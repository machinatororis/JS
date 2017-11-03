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
            $fcircle(w / 2, h / 4, h / 6, "#fcc");
            $fcircle(w * 0.3, h / 1.7, h / 6, "#fcc");
            $fcircle(w * 0.7, h / 1.7, h / 6, "#fcc");
            $fcircle(w / 2, h / 2 , h / 6, "#fcc");
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
        r += 20;
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
        sprite_draw("spinner@spinner0", WIDTH / 2, HEIGHT / 2, undefined, undefined, 1, 1, r);

    });

}