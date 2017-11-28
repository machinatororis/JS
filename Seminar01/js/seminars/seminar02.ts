/// <reference path="../jplib/jplib.d.ts" />
module __
{
    const CCOUNT:int = 100;
    let circles:farray[] = [], // массив пустой, типа array
        target :farray,
        cnt_click :farray[], // счетчик кликов мышью
        cnt_circles :farray[], // счетчик закрашенных шаров
        //cl_circles :int = 0, // переменная для подсчета закрашенных шаров
        bg :farray,
        r: pixels; 
    
    

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
            $fcircle (r, r, r, "#ffffff");
        });
        
        $$draw("game@target", r * 12, r * 12, 0, 1, 0.5, 0.5, (w: pixels) => { // мишень
            $fcircle (r * 6, r * 6, r * 6, "#ffffff");
        });

        $$draw("game@bg", WIDTH, HEIGHT, 0, 1, 0.5, 0.5, (w: pixels) => { // фон
            $frect (0, 0, WIDTH, HEIGHT, "#8ad2ce");
        });

        $$abc_symbols("game@cnt_click", 50, 0, 1, 0.5, 0.5, "#da2865", 5, "0123456789, %"); // рисуем счетчик кликов мышью 
        $$abc_symbols("game@cnt_circles", 50, 0, 1, 0.5, 0.5, "#da2865", 5, "0123456789, %"); // рисуем счетчик закрашенных шаров 

        $$apply(); // закрывает
    });


    /**
     * Инициализация программы.
     */
    app_init(() =>
    {
        cnt_click = scounter_create("game@cnt_click", 6);
        sprites_color (cnt_click, 0xda2865);

        cnt_circles = scounter_create("game@cnt_circles", 6);
        sprites_color (cnt_circles, 0xda2865);

        bg = sprite_create("game@bg", WIDTH / 2, HEIGHT / 2, WIDTH * 2, HEIGHT * 2);

        scounter_val(cnt_click, 0); // устанавливаем в счетчик 0
        scounter_val(cnt_circles, 0);

        sprites_color(cnt_circles, 0xffffff);
        sprites_color(cnt_click, 0xffffff);
        sprite_color(bg, 0x8ad2ce);
        
        target = sprite_create("game@target");
        sprite_color (target, 0xc3beca);
        sprite_alpha(target, 0);

        for (let i = 0; i < CCOUNT; ++i)    
        {
            let s :farray = sprite_create("game@circle"); //в массив s записываем массив нашего созданного спрайта game@circle
            s[SP.bb] = Math.random() * 2 - 1; // присваиваем 22 и 23 элементам массива рандомное значение
            s[SP.cc] = Math.random() * 2 - 1; 
            circles.push(s); //заполняем массив сircles спрайтами
            sprite_pos (s, WIDTH * Math.random(), HEIGHT * Math.random()); // создали 100 разных кружков на экране
            sprite_color (s , 0xffffff); // готовый цвет из объявления умножается на число
            // circles.push (sprite_create("game@circle")); //  push добавляет в конец массива созданный массив float32array
        }  
        _resize(); // вызываем функцию _resize(), устанавливаем позиции, размеры...  
    });

    function _resize(): void{
        scounter_align(cnt_click, false, WIDTH, HEIGHT - 10, ALIGNS.RB);
        scounter_align(cnt_circles, false, WIDTH, 0, ALIGNS.RT);

        scounter_val(cnt_click, 0); // устанавливаем 0, пока кликов мышью не было
        scounter_align(cnt_click, false, WIDTH, HEIGHT - 10, ALIGNS.RB);
    };


    /**
     * Изменение размеров контейнера канваса.
     */
    app_resize (_resize);


    /**
     * Фреймовая анимация.
     */
    app_update(() =>
    {
        let s :farray;
        for (let i = 0; i < CCOUNT; ++i)
        {
            s = circles[i]; //присваиваем s спрайт данной итерации
            sprite_move(s, s[SP.bb], s[SP.cc]); //перемещаем спрайт на рандомное расстояние
            if(sprite__pos_x (s) < 0 || sprite__pos_x (s) > WIDTH) //если спрайт вылетает за экран по х,то
            {
                s[SP.bb] *= -1; //меняем его движение на прямо противоположное
            }
            if(sprite__pos_y (s) < 0 || sprite__pos_y (s) > HEIGHT) //если спрайт вылетает за экран по у,то
            {
                s[SP.cc] *= -1; //меняем его движение на прямо противоположное
            }
        }

        check_circles();
    });


    /**
     Обработка мышки.
     */
    app_mouse(() :bool =>
    {
        if (MOUSE.phase == TOUCH.BEGAN && scounter__val(cnt_click) < 10 && sprite__alpha(target) == 0) {

            sprite_alpha(target, 1);
            sprite_pos(target, MOUSE.x, MOUSE.y);
            sprite_tscale(target, 0, 1, -180, EASE_LINEAR);
            tweens_timer(null, () => {
                sprite_alpha(target, 0);
            }, -240);
            
            let cl_click: int = scounter__val (cnt_click); // получили значение счетчика
            
            scounter_val(cnt_click, cl_click + 1); // установили значение счетчика + 1
            scounter_align(cnt_click, false, WIDTH, HEIGHT - 10, ALIGNS.RB);
        }
        return true;
    });

    function check_circles(): void
    {
        const color :rgb = 0xda2865; // цвет, в который перекрашиваем

        if (sprite__alpha(target) > 0) {
            let cl_crcl: int = scounter__val (cnt_circles), // в переменную положили текущее значение счетчика закрашенных шаров
                r7 :pixels = 7 * r,
                s  :farray,
                cur_r :pixels;    

            for (let i = 0; i < CCOUNT; ++i) {
                cur_r = sprite__scale(target) * sprite__scale(target) * r7 * r7; //вычисляем scale таргета в данный момент времени
                s = circles[i];
                let mx :pixels = sprite__pos_x(target) - s[SP.xx],
                    my :pixels = sprite__pos_y(target) - s[SP.yy],
                    dist = mx * mx + my * my;
                if (dist < cur_r && s[SP.aa] !== 1) {
                    sprite_color(s, color, 1); // перекрашиваем в цвет
                    s[SP.aa] = 1;
                    cl_crcl++; // при перекрашивании увеличиваем счетчик шаров на 1                   
                }
            }
           
            scounter_val(cnt_circles, cl_crcl); // устанавливаем в счетчик закрашенных шаров новое значение
            scounter_align(cnt_circles, false, WIDTH, 0, ALIGNS.RT);           
        }
    };

    
    /**
     * Фреймовая прорисовка.
     */
    app_draw(() :void =>
    {
        // sprite_draw ("game@circle", WIDTH / 2, HEIGHT / 2); // рисуем атлас game@circle
        sprite_draw(bg);
        sprite_draw(target);
        sprites_draw(circles);
        sprites_draw(cnt_click); // отрисовка счетчика кликов мышью
        sprites_draw(cnt_circles);
    });

}