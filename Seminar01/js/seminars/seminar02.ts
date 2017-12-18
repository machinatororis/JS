/// <reference path="../jplib/jplib.d.ts" />

module __
{
    let r :pixels,          //задаем радиус спрайтов типа pixels
        counter_clicks :farray[],
        target :farray,
        iscolored :int[] = [],
        cnt_def_y :farray[],
        cnt_def_b :farray[],
        points :farray[],
        koef :int = 1,
        levels :any = [];
    
    

    /**
     * Конфигурация программы.
     */
    app_config({
        fps_div:            1,
        // atlas_debugging:    true,
        debugging:          true
    });

    /**
     * Формирование графических ресурсов.
     * Вызывается перед app_init и перед app_resize
     */
    app_graphics(() :void =>
    {
        
        r = SIDE * 0.02 | 0; //радиус, где SIDE - меньшая сторона браузера, умн. на 0,05 и округленная в меньшую сторону

        $$init(); // инициализирует

        $$draw("game@circle", r * 2, r * 2, 0, 1, 0.5, 0.5, (w: pixels) => { //создаем атлас game,в нем спрайт circle
            //расположение спрайта по х и у
            //sf - скейл относительно изначально заданного спрайта для того, чтобы при растягивании не билась графика
            //высота и ширина спрайта равны двум радиусам
            $fcircle (r, r, r, "#fff"); //рисуем окружность с координатами (r;r) и радиусом r цвета белого
        });

        $$draw("game@target", r * 12, r * 12, 0, 1, 0.5, 0.5, (w: pixels) => { // мишень
            $fcircle (r * 6, r * 6, r * 6, "#ffffff");
        });

        $$draw("game@bg", WIDTH / 2, HEIGHT, 0, 1, 0.5, 0.5, (w: pixels) => { // фоны
            $frect (0, 0, WIDTH / 2, HEIGHT, "#fff");
        });

        $$abc_symbols("game@counters", 50, 0, 1, 0.5, 0.5, "#122d1a", 5, "0123456789, /");//счетчики

        $$abc_symbols("game@points", 50, 0, 1, 0.5, 0.5, "#122d1a", 5, "0123456789, %"); //очки

        $$abc_symbols("game@counter_clicks", 50, 0, 1, 0.5, 0.5, "#122d1a", 5, "0123456789, %"); //очки

        $$apply(); // закрывает

    });


    /**
     * Инициализация программы.
     */
    app_init(() =>
    {
        initConfig();

        //счетчик кликов
        counter_clicks = scounter_create("game@counter_clicks", 6);
        sprites_color(counter_clicks, 0xffffff);
        scounter_align(counter_clicks, false, WIDTH / 2, 10, ALIGNS.CT);

        //таргет
        target = sprite_create("game@target");
        sprite_color (target, 0x000000);
        sprite_alpha(target, 0);

        //счетчик очков
        points = scounter_create("game@points", 6);
        sprites_color(points, 0xffffff);
        scounter_align(points, false, WIDTH - 300, HEIGHT - 100, ALIGNS.LT);   

        createLevel();
    });

    let levelInd = 0,
        levelRects :farray[],
        levelsCircles :farray[],
        levelsCnts :farray[][],
        levelsColCnts :farray[][];

    function createLevel(): void{
        let cfg :any = levels[levelInd],
            rects :any[] = cfg.rects,
            counters :int[] = cfg.counters,
            steps :int = cfg.steps,
            circles :int = cfg.circles,
            counter_align :any[] = cfg.counter_align,
            def_align :any[] = cfg.def_align,
            s :farray,
            c :farray[];
            //Удаляем старый массив бг
            sprites_destroy(levelRects);
            levelRects = [];
            //Удаляем старый массив шариков
            sprites_destroy(levelsCircles);
            levelsCircles = [];
            //Удаляем старый массив счетчиков с установленными значениями
            if(levelInd != 0){
                for (let i = 0; i < levelsCnts.length; i++)
                    sprites_destroy(levelsCnts[i]);
            }
            levelsCnts = [];
            //Удаляем старый массив счетчиков с числом окрашенных шариков
            if(levelInd != 0){
                for (let i = 0; i < levelsColCnts.length; i++)
                    sprites_destroy(levelsColCnts[i]);
            }           
            levelsColCnts = [];

            //создаем спрайты бекграундов, записываем их в массив levelRects
            for(let i = 0; i < rects.length; ++i){
                s = sprite_create("game@bg", rects[i].x, rects[i].y, rects[i].w, rects[i].h);
                sprite_color(s, rects[i].color);
                levelRects.push(s);
            }

            //создаем спрайты кружочков
            for (let i = 0; i < circles; ++i)   
            {
                s = sprite_create("game@circle"); //в массив s записываем массив нашего созданного спрайта game@circle
                s[SP.bb] = Math.random() * 2 - 1; // присваиваем 22 и 23 элементам массива рандомное значение
                s[SP.cc] = Math.random() * 2 - 1; 
                sprite_color (s , 0xffffff); // готовый цвет из объявления умножается на число
                sprite_pos (s, WIDTH * Math.random(), HEIGHT * Math.random()); // каждый спрайт устанавливаем вразброс
                levelsCircles.push(s); //заполняем массив сircles спрайтами

            }    

            //создаем счетчики с готовыми значениями
            for (let i = 0; i < counters.length; ++i)   
            {
                c = scounter_create("game@counters", 6);
                scounter_val(c, counters[i]);
                sprites_color(c, 0xffffff);
                levelsCnts.push(c);
            }

            //Создаем счетчики, в которые будем заносить кол-во закрашенных кружочков
            for (let i = 0; i < counters.length; ++i)   
            {
                c = scounter_create("game@counters", 6); 
                scounter_val(c, 0);
                sprites_color(c, 0xffffff);
                levelsColCnts.push(c);
            }
            align();
            //Обнуляем счетчик очков           
            scounter_val(points, 0);
            //Устанавливаем счетчик кликов в нужное число 
            scounter_val(counter_clicks, levels[levelInd].clicks);
    }

    function initConfig() :void{
                //массив с левелами
                levels = [{
                    rects:[{x: WIDTH / 4, y: HEIGHT / 2, w: WIDTH / 2, h: HEIGHT, color: 0xffff00 },
                           {x: 3 * WIDTH / 4, y: HEIGHT / 2, w: WIDTH / 2, h: HEIGHT, color: 0x0000ff }],
                    counters:[10,10],
                    counter_align:[{xx: 300, yy: 10, align: ALIGNS.RT},
                                   {xx: WIDTH - 100, yy: 10, align: ALIGNS.RT}],
                    def_align:[{xx: WIDTH - 300, yy: 10, align: ALIGNS.LT},
                                   {xx: 10, yy: 10, align: ALIGNS.LT}],
                    colors:[0xffff80, 0x8080ff],
                    clicks:12,
                    circles:50
                },
                {
                    rects:[{x: WIDTH / 2, y: HEIGHT / 4, w: WIDTH, h: HEIGHT / 2, color: 0xffff00 },
                           {x: WIDTH / 2, y: 3 * HEIGHT / 4, w: WIDTH, h: HEIGHT / 2, color: 0x0000ff }],
                    counters:[10,10],
                    counter_align:[{xx: WIDTH - 100, yy: 10, align: ALIGNS.RT},
                                    {xx: WIDTH - 100, yy: HEIGHT - 100, align: ALIGNS.RT}],
                    def_align:[{xx: WIDTH - 300, yy: 10, align: ALIGNS.RT},
                                {xx: WIDTH - 300, yy: HEIGHT - 100, align: ALIGNS.RT}],
                    colors:[0xffff80, 0x8080ff],
                    clicks:12,
                    circles:50
                }
                ]
        
    }

    function align(): void{
        initConfig();
        let cfg :any = levels[levelInd],
            counters :int[] = cfg.counters,
            counter_align :any[] = cfg.counter_align,
            def_align :any[] = cfg.def_align;
         //создаем счетчики с готовыми значениями
         for (let i = 0; i < counters.length; ++i)   
         {
             scounter_align(levelsCnts[i], true, def_align[i].xx, def_align[i].yy, def_align[i].align);
         }

         //Создаем счетчики, в которые будем заносить кол-во закрашенных кружочков
         for (let i = 0; i < counters.length; ++i)   
         {
             scounter_align(levelsColCnts[i], false, counter_align[i].xx, counter_align[i].yy, counter_align[i].align);
         }

    }


    /**
     * Изменение размеров контейнера канваса.
     */
    app_resize (_resize);

    function _resize(): void{
        
        initConfig();

        let s:farray,
            cfg :any = levels[levelInd],
            rects :any[] = cfg.rects;


        //Выравниваем rects
        for(let i = 0; i < levelRects.length; ++i){
            sprite_pos(levelRects[i], rects[i].x, rects[i].y);
            sprite_size(levelRects[i], rects[i].w, rects[i].h);
        }

        //Выравниваем счетчик кликов
        scounter_align(counter_clicks, false, WIDTH / 2, 10, ALIGNS.CT);

        //Выравниваем счетчик очков
        scounter_align(points, false, WIDTH - 300, HEIGHT - 100, ALIGNS.LT);

        align();

    };


    /**
     * Фреймовая анимация.
     */
    app_update(() =>
    {
        let s :farray;
        for (let i = 0; i < levels[levelInd].circles; ++i)
        {
            s = levelsCircles[i];//присваиваем s спрайт данной итерации
            sprite_move(s, s[SP.bb], s[SP.cc]); //перемещаем спрайт на рандомное расстояние
            if(sprite__pos_x (s) < 0 || sprite__pos_x (s) > WIDTH){ //если спрайт вылетает за экран по х,то
                s[SP.bb] *= -1; //меняем его движение на прямо противоположное
            }
            if(sprite__pos_y (s) < 0 || sprite__pos_y (s) > HEIGHT){//если спрайт вылетает за экран по у,то
                s[SP.cc] *= -1;//меняем его движение на прямо противоположное
            }
            
           for (let j = 0; j < levels[levelInd].circles; ++j){ 
                let s1 = levelsCircles[j], // спрайт следующего круга
                //cur_r :pixels,
                mx :pixels = sprite__pos_x(s) - s1[SP.xx], 
                my :pixels = sprite__pos_y(s) - s1[SP.yy],
                dist = mx * mx + my * my;
                if (i != j){

                if (dist <= 2 * r * r * 2){
                    s[SP.bb] *= -1; //меняем его движение на прямо противоположное
                    s[SP.cc] *= -1; //меняем его движение на прямо противоположное

                    s1[SP.bb] *= -1; //меняем его движение на прямо противоположное
                    s1[SP.cc] *= -1; //меняем его движение на прямо противоположное
                }
            }
            }
        }

        check_circles();
    });

    function check_circles(): void{

        let colors :farray,
            cfg :any = levels[levelInd];
        //если таргет появился
        if (sprite__alpha(target) > 0) {

            let r7 :pixels = 7 * r,    
                s :farray,
                cur_r :pixels,
                k_points :int = scounter__val (points);

            for (let i = 0; i < levels[levelInd].circles; ++i)//для всех кружочков
            {
                cur_r = sprite__scale(target) * sprite__scale(target) * r7 * r7; //вычисляем scale таргета в данный момент времени
                s = levelsCircles[i]; //s = спрайту текущего круга

                let mx :pixels = sprite__pos_x(target) - s[SP.xx],
                    my :pixels = sprite__pos_y(target) - s[SP.yy],
                    dist = mx * mx + my * my,
                    cfg :any = levels[levelInd];

                if ((dist < cur_r) && s[SP.aa] == 0){//если кружочек попадает в цель
                    for(let j = 0; j < levelRects.length; j++){//проверяем для всех ректанглов
                        //если спрайт попал в этот ректангл
                        let y_rect = cfg.rects[j].y,
                            h_rect = cfg.rects[j].h,
                            x_rect = cfg.rects[j].x,
                            w_rect = cfg.rects[j].w,
                            color_rect = cfg.colors[j],
                            counter_rect = scounter__val(levelsColCnts[j]),
                            color_sprite = sprite__color(s);
                        if (sprite__pos_y(s) <= (y_rect + h_rect / 2) && sprite__pos_y(s) >= (y_rect - h_rect / 2)
                            && sprite__pos_x(s) <= (x_rect + w_rect / 2) && sprite__pos_x(s) >= (x_rect - w_rect / 2)){
                                //если спрайт еще не покрашен в цвет этого ректангла
                                if(color_sprite !== color_rect){
                                    //Проверям он еще белый или покрашен уже в другой цвет
                                    for(let z = 0; z < cfg.colors.length; z++){
                                        //Если покрашен
                                        if (color_sprite == cfg.colors[z]){
                                        //Уменьшаем счетчик того цвета на 1
                                            let cur_cnt = scounter__val(levelsColCnts[z]);
                                            cur_cnt--;
                                            scounter_val(levelsColCnts[z], cur_cnt);
                                        }
                                    }
                                    //то перекрашиваем спрайт в цвет этого ректангла
                                    sprite_color(s, color_rect, 1); 
                                    //увеличиваем счетчик шариков данного цвета
                                    counter_rect++;
                                    scounter_val(levelsColCnts[j], counter_rect);
                                    //Проверяем набрали ли мы нужное количество шариков после увеличения
                                    let flag :int = 0;
                                    for(let z = 0; z < cfg.rects.length; z++){
                                        if(scounter__val(levelsColCnts[z]) == cfg.counters[z]) 
                                            flag++;
                                        else 
                                            break;
                                    }
                                    if(flag == cfg.rects.length){ 
                                        levelInd++;
                                    createLevel();
                                    }
                                }
                        }
                    }
                }
                
            }
            align(); 
        }

    };

    /**
     Обработка мышки.
     */
    app_mouse(() :bool =>
       {
        if (MOUSE.phase == TOUCH.BEGAN) {
            if(scounter__val(counter_clicks) > 0){
                let cnt_cl :int = scounter__val(counter_clicks);
                scounter_val(counter_clicks, cnt_cl - 1);
                scounter_align(counter_clicks, false, WIDTH / 2, 0, ALIGNS.CT);

                sprite_alpha(target, 1);
                sprite_pos(target, MOUSE.x, MOUSE.y);
                sprite_tscale(target, 0, 1, -180, EASE_LINEAR);
                tweens_timer(null, () => {
                    sprite_alpha(target, 0);
                }, -240);
            }
            else
                createLevel();
        }
        return true;
    });

    
    /**
     * Фреймовая прорисовка.
     */
    app_draw(() :void =>
    {
        sprites_draw(levelRects);
        sprite_draw(target);
        sprites_draw(levelsCircles);
        for (let i = 0; i < levelsCnts.length; i++)
            sprites_draw(levelsCnts[i]);
        sprites_draw(counter_clicks);
        for (let i = 0; i < levelsColCnts.length; i++)
            sprites_draw(levelsColCnts[i]);
        //sprites_draw(points);
    });

}