/// <reference path="../jplib/jplib.d.ts" />

module __
{
    const CCOUNT:int = 100;
    let circles:farray[] = [], // массив пустой, типа array
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
        r = SIDE * 0.05 | 0; //радиус, где SIDE - меньшая сторона браузера, умн. на 0,05 и округленная в меньшую сторону

        $$init(); // инициализирует
        $$draw("game@circle", r * 2, r * 2, 0, 2, 0.5, 0.5, (w: pixels) => {
            $fcircle (r, r, r, "#ffffff");
        });
        $$apply(); // закрывает

    });


    /**
     * Инициализация программы.
     */
    app_init(() =>
    {
        for (let i = 0; i < CCOUNT; ++i)    
        {
            let s :farray = sprite_create("game@circle");
            s[SP.bb] = Math.random() * 2 - 1; // от -1 до 1
            s[SP.cc] = Math.random() * 2 - 1; 
            circles.push(s);
            sprite_pos (s, WIDTH * Math.random(), HEIGHT * Math.random()); // создали 100 разных кружков на экране
            sprite_color (s , 0xffffff); // готовый цвет из объявления умножается на число

            // circles.push (sprite_create("game@circle")); //  push добавляет в конец массива созданный массив float32array
        }    
    });

    function _resize(): void{
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
            s = circles[i];
            sprite_move(s, s[SP.bb], s[SP.cc]);
            if(sprite__pos_x (s) < 0 || sprite__pos_x (s) > WIDTH)
            {
                s[SP.bb] *= -1;
            }
            if(sprite__pos_y (s) < 0 || sprite__pos_y (s) > HEIGHT)
            {
                s[SP.cc] *= -1;
            }
        }
    });


    /**
     Обработка мышки.
     */
    app_mouse(() :bool =>
    {
        if (MOUSE.phase == TOUCH.BEGAN) {

            let r4 :pixels = 4 * r,
                s  :farray;    
            for (let i = 0; i < CCOUNT; ++i) {
                s = circles[i];
                let mx :pixels = MOUSE.x - s[SP.xx],
                    my :pixels = MOUSE.y - s[SP.yy],
                    dist = mx * mx + my * my;
                if (dist < r4 * r4){
                    sprite_color(s, 0x123456, 1); 
                }
            }
        

        }
        return true;
    });

    
    /**
     * Фреймовая прорисовка.
     */
    app_draw(() :void =>
    {
        // sprite_draw ("game@circle", WIDTH / 2, HEIGHT / 2); // рисуем атлас game@circle
        sprites_draw(circles);
    });

}