/**
 * Семинар 01.
 *
 */
/// <reference path="../jplib/jplib.d.ts" />
var __;
(function (__) {
    var 
    // угол первого спиннера
    r0 = 0, 
    /** угол второго спиннера */
    r1 = 0, 
    /** угол второго спиннера */
    r2 = 0, 
    /** скорость первого спиннера */
    v0 = 10, 
    /** скорость второго спиннера */
    v1 = 7, 
    /** скорость третьего спиннера */
    v2 = 12, 
    /** ускорение первого спиннера */
    a0 = -0.05, a1 = -0.05, a2 = -0.05, 
    /** счетчики */
    c0 = 0, c1 = 0, c2 = 0, s0, s1, s2;
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
        __.$$draw("spinner@spinner0", __.SIDE / 2 | 0, __.SIDE / 2 | 0, 0, 1, 0.5, 0.5, function (w, h, l) {
            var fc = "#c7eb5e", cc = "#895ea7";
            __.$line_cap("round");
            __.$fcircle(w / 2, h / 4, h / 6, fc);
            __.$scircle(w / 2, h / 4, h / 6, cc, l * 10);
            __.$fcircle(w * 0.3, h / 1.7, h / 6, fc);
            __.$scircle(w * 0.3, h / 1.7, h / 6, cc, l * 10);
            __.$fcircle(w * 0.7, h / 1.7, h / 6, fc);
            __.$scircle(w * 0.7, h / 1.7, h / 6, cc, l * 10);
            __.$fcircle(w / 2, h / 2, h / 6, fc);
            __.$fcircle(w / 2, h / 2, 50, cc);
        });
        __.$$draw("spinner@spinner1", __.SIDE / 2 | 0, __.SIDE / 2 | 0, 0, 1, 0.5, 0.5, function (w, h, l) {
            __.$line_cap("round");
            var fc = "#17a5a3", cc = "#deeb7b";
            __.$fcircle(w / 2, h / 2, h / 6 + 10, fc); // центральный круг
            __.$sline(w / 2, h / 2, w / 2, 80, fc, l * 120);
            __.$fcircle(w / 2, 80, h / 6, fc);
            __.$fcircle(w / 2, 80, 30, cc); // центр 
            __.$sline(w / 2, h / 2, 120, h / 2 + 80, fc, l * 120);
            __.$fcircle(120, h / 2 + 80, h / 6, fc);
            __.$fcircle(120, h / 2 + 80, 30, cc); // центр 
            __.$sline(w / 2, h / 2, 360, h / 2 + 70, fc, l * 120);
            __.$fcircle(360, h / 2 + 70, h / 6, fc);
            __.$fcircle(360, h / 2 + 70, 30, cc); // центр
            __.$fcircle(w / 2, h / 2, 50, cc); // центр 
        });
        __.$$draw("spinner@spinner2", __.SIDE / 2 | 0, __.SIDE / 2 | 0, 0, 1, 0.5, 0.5, function (w, h, l) {
            var fc = "#17a5a3", cc = "#98e2e1";
            __.$fcircle(w / 2, h / 2, h / 6, "#da2865");
            __.$frect(w / 2 + 10, h / 2 + 10, 100, 100, "#da2865");
            __.$frect(w / 2 + 50, h / 2 + 50, 50, 50, "#98e2e1"); // центр
            __.$frect(w / 2 - 110, h / 2 - 110, 100, 100, "#da2865");
            __.$frect(w / 2 - 100, h / 2 - 100, 50, 50, "#98e2e1"); // центр
            __.$frect(w / 2 - 110, h / 2 + 10, 100, 100, "#da2865");
            __.$frect(w / 2 - 100, h / 2 + 50, 50, 50, "#98e2e1"); // центр
            __.$frect(w / 2 + 10, h / 2 - 110, 100, 100, "#da2865");
            __.$frect(w / 2 + 50, h / 2 - 100, 50, 50, "#98e2e1"); // центр
            __.$fcircle(w / 2, h / 2, 50, "#98e2e1");
        });
        __.$$apply();
    });
    /**
     * Инициализация программы.
     */
    __.app_init(function () {
        s0 = __.sprite_create("spinner@spinner0");
        __.sprite_color(s0, 0xffffff); // готовый цвет из объявления умножается на число
        s1 = __.sprite_create("spinner@spinner1");
        __.sprite_color(s1, 0xffffff); // готовый цвет из объявления умножается на число
        s2 = __.sprite_create("spinner@spinner2");
        __.sprite_color(s2, 0xffffff); // готовый цвет из объявления умножается на число
        _resize(); // вызываем функцию _resize()
    });
    function _resize() {
        __.sprite_pos(s0, __.SIDE / 2, __.SIDE / 3);
        __.sprite_pos(s1, __.SIDE / 2 + 200, __.SIDE / 2 + 200);
        __.sprite_pos(s2, __.SIDE / 2 - 200, __.SIDE / 2 + 200);
    }
    ;
    /**
     * Изменение размеров контейнера канваса.
     */
    __.app_resize(_resize);
    /**
     * Фреймовая анимация.
     */
    __.app_update(function () {
        // if (DEBUGGING) log("app_update() " + TICKS + " " + TIME);
        if (v0 > 0) {
            v0 += a0;
            __.sprite_rotate(s0, v0);
        }
        if (v1 > 0) {
            v1 += a1;
            __.sprite_rotate(s1, v1);
        }
        if (v2 > 0) {
            v2 += a2;
            __.sprite_rotate(s2, v2);
        }
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
        __.sprite_draw(s0);
        __.sprite_draw(s1);
        __.sprite_draw(s2);
    });
})(__ || (__ = {}));
//# sourceMappingURL=seminar01.js.map