/**
 * Семинар 01.
 *
 */
/// <reference path="../jplib/jplib.d.ts" />
var __;
(function (__) {
    var r = 0;
    /**
     * Конфигурация программы.
     */
    __.app_config({
        fps_div: 1,
        // atlas_debugging:    true,
        debugging: true
    });
    /**
     * Формирование графических ресурсов.
     * Вызывается перед app_init и перед app_resize
     */
    __.app_graphics(function () {
        __.$$init();
        __.$$draw("spinner@spinner0", __.round(__.WIDTH / 2, 1), __.round(__.HEIGHT / 2, 1), 0, 1, 0.5, 0.5, function (w, h, l) {
            //$frect ( 0, 0, w, h, "#000");
            __.$line_cap("round");
            // $sline(w / 2, 10, w / 2, h - 10, "#ff0000", l * 10);
            __.$fcircle(w / 2, h / 4, h / 6, "#c7eb5e");
            __.$scircle(w / 2, h / 4, h / 6, "#895ea7", l * 10);
            __.$fcircle(w * 0.3, h / 1.7, h / 6, "#c7eb5e");
            __.$scircle(w * 0.3, h / 1.7, h / 6, "#895ea7", l * 10);
            __.$fcircle(w * 0.7, h / 1.7, h / 6, "#c7eb5e");
            __.$scircle(w * 0.7, h / 1.7, h / 6, "#895ea7", l * 10);
            __.$fcircle(w / 2, h / 2, h / 6, "#c7eb5e");
            __.$fcircle(w / 2, h / 2, 50, "#895ea7");
        });
        __.$$draw("spinner@spinner1", __.round(__.WIDTH / 2, 1), __.round(__.HEIGHT / 2, 1), 0, 1, 0.5, 0.5, function (w, h, l) {
            //$frect ( 0, 0, w, h, "#000");
            __.$line_cap("round");
            //$sline(w / 2, 10, w / 2, h - 10, "#ff0000", l * 10);
            //$fcircle(w / 2 , h / 4, h / 6, "#fcc");
            //$fcircle(w * 0.3, h / 1.7, h / 6, "#fcc");
            //$fcircle(w * 0.7, h / 1.7, h / 6, "#fcc");
            __.$fcircle(w / 2, h / 2, h / 6 + 10, "#17a5a3"); //центральный круг
            __.$sline(w / 2, h / 2, w / 2, 80, "#17a5a3", l * 120);
            __.$fcircle(w / 2, 80, h / 6, "#17a5a3");
            __.$fcircle(w / 2, 80, 30, "#deeb7b"); //центр 
            __.$sline(w / 2, h / 2, 120, h / 2 + 80, "#17a5a3", l * 120);
            __.$fcircle(120, h / 2 + 80, h / 6, "#17a5a3");
            __.$fcircle(120, h / 2 + 80, 30, "#deeb7b"); //центр 
            __.$sline(w / 2, h / 2, 360, h / 2 + 70, "#17a5a3", l * 120);
            __.$fcircle(360, h / 2 + 70, h / 6, "#17a5a3");
            __.$fcircle(360, h / 2 + 70, 30, "#deeb7b"); //центр
            __.$fcircle(w / 2, h / 2, 50, "#deeb7b"); //центр 
        });
        __.$$draw("spinner@spinner2", __.round(__.WIDTH / 2, 1), __.round(__.HEIGHT / 2, 1), 0, 1, 0.5, 0.5, function (w, h, l) {
            //$frect ( 0, 0, w, h, "#000");
            //$line_cap("round");
            __.$fcircle(w / 2, h / 2, h / 6, "#da2865");
            __.$frect(w / 2 + 10, h / 2 + 10, 100, 100, "#da2865");
            __.$frect(w / 2 + 50, h / 2 + 50, 50, 50, "#98e2e1"); //центр
            __.$frect(w / 2 - 110, h / 2 - 110, 100, 100, "#da2865");
            __.$frect(w / 2 - 100, h / 2 - 100, 50, 50, "#98e2e1"); //центр
            __.$frect(w / 2 - 110, h / 2 + 10, 100, 100, "#da2865");
            __.$frect(w / 2 - 100, h / 2 + 50, 50, 50, "#98e2e1"); //центр
            __.$frect(w / 2 + 10, h / 2 - 110, 100, 100, "#da2865");
            __.$frect(w / 2 + 50, h / 2 - 100, 50, 50, "#98e2e1"); //центр
            __.$fcircle(w / 2, h / 2, 50, "#98e2e1");
        });
        __.$$apply();
    });
    /**
     * Инициализация программы.
     */
    __.app_init(function () {
        if (__.DEBUGGING)
            __.log("app_init()");
        __.log("test");
    });
    /**
     * Изменение размеров контейнера канваса.
     */
    __.app_resize(function () {
        // if (DEBUGGING) log("app_resize() ");
    });
    /**
     * Фреймовая анимация.
     */
    __.app_update(function () {
        // if (DEBUGGING) log("app_update() " + TICKS + " " + TIME);
        r += 10;
    });
    /**
     *  Обработка тачей.
     */
    __.app_touches(function () {
        if (__.DEBUGGING)
            __.log("app_touches() phase: " + __.TOUCHES[0].phase + " coords: " + __.TOUCHES[0].x + "x" + __.TOUCHES[0].y + " " + __.TOUCHES[0].prev_x + "x" + __.TOUCHES[0].prev_y);
        return false;
    });
    /**
     Обработка мышки.
     */
    __.app_mouse(function () {
        if (__.DEBUGGING)
            __.log("app_mouse() phase: " + __.MOUSE.phase + " coords: " + __.MOUSE.x + "x" + __.MOUSE.y + " " + __.MOUSE.prev_x + "x" + __.MOUSE.prev_y);
        return false;
    });
    /**
     * Фреймовая прорисовка.
     */
    __.app_draw(function () {
        // if (DEBUGGING) log("app_draw() ");
        __.sprite_draw("spinner@spinner0", __.WIDTH / 4, __.HEIGHT / 4, undefined, undefined, 1, 1, r);
        __.sprite_draw("spinner@spinner1", __.WIDTH / 2 + 200, __.HEIGHT / 2 - 200, undefined, undefined, 1, 1, r);
        __.sprite_draw("spinner@spinner2", __.WIDTH / 2 - 200, __.HEIGHT / 2 + 200, undefined, undefined, 1, 1, r);
    });
})(__ || (__ = {}));
//# sourceMappingURL=seminar01.js.map