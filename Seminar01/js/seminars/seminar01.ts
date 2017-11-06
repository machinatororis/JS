/**
 * Семинар 01.
 *
 */

/// <reference path="../jplib/jplib.d.ts" />

module __
{
    let r: degrees = 0;

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
        $$draw("spinner@spinner0", round(WIDTH / 2, 1), round(HEIGHT / 2, 1), 0, 1, 0.5, 0.5, (w: pixels, h: pixels, l: pixels) => {
            //$frect ( 0, 0, w, h, "#000");
            $line_cap("round");
           // $sline(w / 2, 10, w / 2, h - 10, "#ff0000", l * 10);
            $fcircle(w / 2 , h / 4, h / 6, "#c7eb5e");
            $scircle(w / 2 , h / 4, h / 6, "#895ea7", l * 10);
            $fcircle(w * 0.3, h / 1.7, h / 6, "#c7eb5e");
            $scircle(w * 0.3, h / 1.7, h / 6, "#895ea7", l * 10);
            $fcircle(w * 0.7, h / 1.7, h / 6, "#c7eb5e");
            $scircle(w * 0.7, h / 1.7, h / 6, "#895ea7", l * 10);
            $fcircle(w / 2, h / 2 , h / 6, "#c7eb5e");
            $fcircle(w / 2, h / 2 , 50, "#895ea7");
        }); 
        $$draw("spinner@spinner1", round(WIDTH / 2, 1), round(HEIGHT / 2, 1), 0, 1, 0.5, 0.5, (w: pixels, h: pixels, l: pixels) => {
            //$frect ( 0, 0, w, h, "#000");
            $line_cap("round");
            //$sline(w / 2, 10, w / 2, h - 10, "#ff0000", l * 10);
            //$fcircle(w / 2 , h / 4, h / 6, "#fcc");
            //$fcircle(w * 0.3, h / 1.7, h / 6, "#fcc");
            //$fcircle(w * 0.7, h / 1.7, h / 6, "#fcc");
            $fcircle(w / 2, h / 2 , h / 6 + 10, "#17a5a3"); //центральный круг
            $sline(w / 2, h / 2, w / 2, 80, "#17a5a3", l * 120);
            $fcircle(w / 2, 80 , h / 6, "#17a5a3");
            $fcircle(w / 2, 80 , 30, "#deeb7b"); //центр 
            $sline(w / 2, h / 2, 120, h / 2 + 80, "#17a5a3", l * 120);
            $fcircle(120, h / 2 + 80 , h / 6, "#17a5a3");
            $fcircle(120, h / 2 + 80 , 30, "#deeb7b"); //центр 
            $sline(w / 2, h / 2, 360, h / 2 + 70, "#17a5a3", l * 120);
            $fcircle(360, h / 2 + 70 , h / 6, "#17a5a3");
            $fcircle(360, h / 2 + 70 , 30, "#deeb7b"); //центр
            $fcircle(w / 2, h / 2, 50, "#deeb7b"); //центр 
            
        });
        $$draw("spinner@spinner2", round(WIDTH / 2, 1), round(HEIGHT / 2, 1), 0, 1, 0.5, 0.5, (w: pixels, h: pixels, l: pixels) => {
            //$frect ( 0, 0, w, h, "#000");
            //$line_cap("round");
            $fcircle(w / 2, h / 2 , h / 6, "#da2865");
            $frect( w / 2 + 10, h / 2 + 10, 100, 100, "#da2865");
            $frect( w / 2 + 50, h / 2 + 50, 50, 50, "#98e2e1"); //центр
            $frect( w / 2 - 110, h / 2 - 110, 100, 100, "#da2865");
            $frect( w / 2 - 100, h / 2 - 100, 50, 50, "#98e2e1"); //центр
            $frect( w / 2 - 110, h / 2 + 10, 100, 100, "#da2865");
            $frect( w / 2 - 100, h / 2 + 50, 50, 50, "#98e2e1"); //центр
            $frect( w / 2 + 10, h / 2 - 110, 100, 100, "#da2865");
            $frect( w / 2 + 50, h / 2 - 100, 50, 50, "#98e2e1"); //центр
            $fcircle(w / 2, h / 2 , 50, "#98e2e1");
        });

        $$apply();

    });


    /**
     * Инициализация программы.
     */
    app_init(() =>
    {
        if (DEBUGGING) log("app_init()");
        log ("test");
    });


    /**
     * Изменение размеров контейнера канваса.
     */
    app_resize(() =>
    {
        // if (DEBUGGING) log("app_resize() ");
    });


    /**
     * Фреймовая анимация.
     */
    app_update(() =>
    {
        // if (DEBUGGING) log("app_update() " + TICKS + " " + TIME);
        r += 10;
    });


    /**
     *  Обработка тачей.
     */
    app_touches(() :bool =>
    {
        if (DEBUGGING) log("app_touches() phase: " + TOUCHES[0].phase + " coords: " + TOUCHES[0].x + "x" + TOUCHES[0].y + " " + TOUCHES[0].prev_x + "x" + TOUCHES[0].prev_y);
        return false;
    });

    /**
     Обработка мышки.
     */
    app_mouse(() :bool =>
    {
        if (DEBUGGING) log("app_mouse() phase: " + MOUSE.phase + " coords: " + MOUSE.x + "x" + MOUSE.y + " " + MOUSE.prev_x + "x" + MOUSE.prev_y);
        return false;
    });


    /**
     * Фреймовая прорисовка.
     */
    app_draw(() :void =>
    {
        // if (DEBUGGING) log("app_draw() ");
        sprite_draw("spinner@spinner0", WIDTH / 4, HEIGHT / 4, undefined, undefined, 1, 1, r);
        sprite_draw("spinner@spinner1", WIDTH / 2 + 200, HEIGHT / 2 - 200, undefined, undefined, 1, 1, r);
        sprite_draw("spinner@spinner2", WIDTH / 2 - 200, HEIGHT / 2 + 200, undefined, undefined, 1, 1, r);

    });

}