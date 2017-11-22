/**
 * Семинар 01.
 *
 */

/// <reference path="../jplib/jplib.d.ts" />

module __
{
    let 
        // угол первого спиннера
        r0: degrees = 0,
        /** угол второго спиннера */
        r1: degrees = 0,
        /** угол второго спиннера */
        r2: degrees = 0,
        /** скорость первого спиннера */
        v0: degrees = 25,
        /** скорость второго спиннера */
        v1: degrees = 15,
        /** скорость третьего спиннера */
        v2: degrees = 20,
        /** ускорение первого спиннера */
        a0: degrees = -0.07,
        a1: degrees = -0.04,
        a2: degrees = -0.05,
        /** счетчики */
        c0: int = 0,
        c1: int = 0,
        c2: int = 0,
        s0 :farray,
        s1: farray,
        s2: farray,
        counter: farray[],
        counter1: farray[]; // массив из массивов, составной спрайт



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
        $$init();
        $$draw("spinner@spinner0", SIDE / 2 | 0, SIDE / 2 | 0, 0, 1, 0.5, 0.5, (w: pixels, h: pixels, l: pixels) => {
            let fc :str = "#c7eb5e", 
                cc :str = "#895ea7";
            $line_cap("round");
            $fcircle(w / 2 , h / 4, h / 6, fc);
            $scircle(w / 2 , h / 4, h / 6, cc, l * 10);
            $fcircle(w * 0.3, h / 1.7, h / 6, fc);
            $scircle(w * 0.3, h / 1.7, h / 6, cc, l * 10);
            $fcircle(w * 0.7, h / 1.7, h / 6, fc);
            $scircle(w * 0.7, h / 1.7, h / 6, cc, l * 10);
            $fcircle(w / 2, h / 2 , h / 6, fc);
            $fcircle(w / 2, h / 2 , 50, cc);

        }); 
        $$draw("spinner@spinner1", SIDE / 2 | 0, SIDE / 2 | 0, 0, 1, 0.5, 0.5, (w: pixels, h: pixels, l: pixels) => {
            $line_cap("round");
            let fc :str = "#17a5a3", 
                cc :str = "#deeb7b";
            $fcircle(w / 2, h / 2 , h / 6 + 10, fc); // центральный круг
            $sline(w / 2, h / 2, w / 2, 80, fc, l * 120);
            $fcircle(w / 2, 80 , h / 6, fc);
            $fcircle(w / 2, 80 , 30, cc); // центр 
            $sline(w / 2, h / 2, 120, h / 2 + 80, fc, l * 120);
            $fcircle(120, h / 2 + 80 , h / 6, fc);
            $fcircle(120, h / 2 + 80 , 30, cc); // центр 
            $sline(w / 2, h / 2, 360, h / 2 + 70, fc, l * 120);
            $fcircle(360, h / 2 + 70 , h / 6, fc);
            $fcircle(360, h / 2 + 70 , 30, cc); // центр
            $fcircle(w / 2, h / 2, 50, cc); // центр 
            
        });
        $$draw("spinner@spinner2", SIDE / 2 | 0, SIDE / 2 | 0, 0, 1, 0.5, 0.5, (w: pixels, h: pixels, l: pixels) => {
            let fc :str = "#da2865", 
                cc :str = "#98e2e1";
            $fcircle(w / 2, h / 2 , h / 6, fc);
            $frect( w / 2 + 10, h / 2 + 10, 100, 100, fc);
            $frect( w / 2 + 50, h / 2 + 50, 50, 50, cc); // центр
            $frect( w / 2 - 110, h / 2 - 110, 100, 100, fc);
            $frect( w / 2 - 100, h / 2 - 100, 50, 50, cc); // центр
            $frect( w / 2 - 110, h / 2 + 10, 100, 100, fc);
            $frect( w / 2 - 100, h / 2 + 50, 50, 50, cc); // центр
            $frect( w / 2 + 10, h / 2 - 110, 100, 100, fc);
            $frect( w / 2 + 50, h / 2 - 100, 50, 50, cc); // центр
            $fcircle(w / 2, h / 2 , 50, cc);
        });
        $$abc_symbols("spinner@counter", 50, 0, 1, 0.5, 0.5, "#da2865", 5, "0123456789, %");
        $$abc_symbols("spinner@counter1", 50, 0, 1, 0.5, 0.5, "#da2865", 5, "0123456789, %");

        $$apply();

    });


    /**
     * Инициализация программы.
     */
    app_init(() =>
    {
        s0 = sprite_create ("spinner@spinner0");
        sprite_color (s0 , 0xffffff); // готовый цвет из объявления умножается на число
        s1 = sprite_create ("spinner@spinner1");
        sprite_color (s1 , 0xffffff); // готовый цвет из объявления умножается на число
        s2 = sprite_create ("spinner@spinner2");
        sprite_color (s2 , 0xffffff); // готовый цвет из объявления умножается на число

        counter = scounter_create("spinner@counter", 6); // считаем обороты вращения спиннера
        sprites_color (counter , 0xda2865);

        counter1 = scounter_create("spinner@counter1", 6); // считаем обороты вращения спиннера
        sprites_color (counter1 , 0xda2865);

        scounter_val(counter, 0);
        scounter_val(counter1, 0);

        _resize(); // вызываем функцию _resize(), устанавливаем позиции, размеры...

        
    });

    

    function _resize(): void{
        sprite_pos (s0, SIDE / 2, SIDE / 3);
        sprite_pos (s1, SIDE / 2 + 200, SIDE / 2 + 200);
        sprite_pos (s2, SIDE / 2 - 200, SIDE / 2 + 200);

        scounter_align(counter, false, WIDTH, HEIGHT - 10, ALIGNS.RB);
        scounter_align(counter1, false, WIDTH, 0, ALIGNS.RT);

        scounter_val(counter, 0); // устанавливаем 0, пока кликов мышью не было
        scounter_align(counter, false, WIDTH, HEIGHT - 10, ALIGNS.RB);
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
        // if (DEBUGGING) log("app_update() " + TICKS + " " + TIME);


        if (v0 > 0) { 
            v0 += a0;
            sprite_rotate (s0, v0);
        }

        if (v1 > 0) { 
            v1 += a1;
            sprite_rotate (s1, v1);
        }

        if (v2 > 0) { 
            v2 += a2;
            sprite_rotate (s2, v2);
        }

        scounter_val(counter1, s0[SP.rr] / 360 + s1[SP.rr] / 360 + s2[SP.rr] / 360 | 0);  
        scounter_align(counter1, false, WIDTH, 0, ALIGNS.RT);  
    });


    /**
     *  Обработка тачей.
     */
    app_touches(() :bool =>
    {
       /* if (DEBUGGING) log("app_touches() phase: " + TOUCHES[0].phase + " coords: " + TOUCHES[0].x + "x" + TOUCHES[0].y + " " + TOUCHES[0].prev_x + "x" + TOUCHES[0].prev_y);*/
        return false;
    });

    /**
     Обработка мышки.
     */
    app_mouse(() :bool =>
    {
        if (MOUSE.phase == TOUCH.BEGAN && scounter__val(counter) < 10) {
            let va: int = scounter__val (counter); 
            log(scounter__val (counter));
            
            scounter_val(counter, va + 1); // _ устанавливает значение, __ забирает значениe
            scounter_align(counter, false, WIDTH, HEIGHT - 10, ALIGNS.RB);
            
            let va1: int = scounter__val (counter1); 
            log(scounter__val (counter1));
            
            scounter_val(counter1, va1 + 1); // _ устанавливает значение, __ забирает значениe
            scounter_align(counter1, false, WIDTH, 0, ALIGNS.RT);

            let dx0 = MOUSE.x - s0[SP.xx],
                dy0 = MOUSE.y - s0[SP.yy],
                dx1 = MOUSE.x - s1[SP.xx],
                dy1 = MOUSE.y - s1[SP.yy],
                dx2 = MOUSE.x - s2[SP.xx],
                dy2 = MOUSE.y - s2[SP.yy];

            let g0 = dx0 * dx0 + dy0 * dy0,
                g1 = dx1 * dx1 + dy1 * dy1,
                g2 = dx2 * dx2 + dy2 * dy2;

            if (g0 <= g1 && g0 <= g2) {
                v0 += Math.random() * 5 + 2;
            }

            if (g1 <= g0 && g1 <= g2) {
                v1 += Math.random() * 5 + 2;
            }

            if (g2 <= g1 && g2 <= g0) {
                v2 += Math.random() * 5 + 2;
            }
        }
        return true;
    });


    /**
     * Фреймовая прорисовка.
     */
    app_draw(() :void =>
    {
        // if (DEBUGGING) log("app_draw() ");
        sprite_draw(s0);
        sprite_draw(s1);
        sprite_draw(s2);

        sprites_draw(counter);
        sprites_draw(counter1);
    });

}