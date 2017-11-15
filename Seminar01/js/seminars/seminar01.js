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
    v0 = 25, 
    /** скорость второго спиннера */
    v1 = 15, 
    /** скорость третьего спиннера */
    v2 = 20, 
    /** ускорение первого спиннера */
    a0 = -0.07, a1 = -0.04, a2 = -0.05, 
    /** счетчики */
    c0 = 0, c1 = 0, c2 = 0, s0, s1, s2, counter, counter1; // массив из массивов, составной спрайт
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
            var fc = "#da2865", cc = "#98e2e1";
            __.$fcircle(w / 2, h / 2, h / 6, fc);
            __.$frect(w / 2 + 10, h / 2 + 10, 100, 100, fc);
            __.$frect(w / 2 + 50, h / 2 + 50, 50, 50, cc); // центр
            __.$frect(w / 2 - 110, h / 2 - 110, 100, 100, fc);
            __.$frect(w / 2 - 100, h / 2 - 100, 50, 50, cc); // центр
            __.$frect(w / 2 - 110, h / 2 + 10, 100, 100, fc);
            __.$frect(w / 2 - 100, h / 2 + 50, 50, 50, cc); // центр
            __.$frect(w / 2 + 10, h / 2 - 110, 100, 100, fc);
            __.$frect(w / 2 + 50, h / 2 - 100, 50, 50, cc); // центр
            __.$fcircle(w / 2, h / 2, 50, cc);
        });
        __.$$abc_symbols("spinner@counter", 50, 0, 1, 0.5, 0.5, "#da2865", 5, "0123456789, %");
        __.$$abc_symbols("spinner@counter1", 50, 0, 1, 0.5, 0.5, "#da2865", 5, "0123456789, %");
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
        counter = __.scounter_create("spinner@counter", 6); // считаем обороты вращения спиннера
        __.sprites_color(counter, 0xda2865);
        counter1 = __.scounter_create("spinner@counter1", 6); // считаем обороты вращения спиннера
        __.sprites_color(counter1, 0xda2865);
        __.scounter_val(counter, 0);
        __.scounter_val(counter1, 0);
        _resize(); // вызываем функцию _resize(), устанавливаем позиции, размеры...
    });
    function _resize() {
        __.sprite_pos(s0, __.SIDE / 2, __.SIDE / 3);
        __.sprite_pos(s1, __.SIDE / 2 + 200, __.SIDE / 2 + 200);
        __.sprite_pos(s2, __.SIDE / 2 - 200, __.SIDE / 2 + 200);
        __.scounter_align(counter, false, __.WIDTH, __.HEIGHT - 10, 68 /* RB */);
        __.scounter_align(counter1, false, __.WIDTH, 0, 65 /* RT */);
        __.scounter_val(counter, 0); // устанавливаем 0, пока кликов мышью не было
        __.scounter_align(counter, false, __.WIDTH, __.HEIGHT - 10, 68 /* RB */);
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
        __.scounter_val(counter1, (s0[4 /* rr */] + s1[4 /* rr */] + s2[4 /* rr */]) / 360 | 0);
        __.scounter_align(counter1, false, __.WIDTH, 0, 65 /* RT */);
    });
    /**
     *  Обработка тачей.
     */
    __.app_touches(function () {
        /* if (DEBUGGING) log("app_touches() phase: " + TOUCHES[0].phase + " coords: " + TOUCHES[0].x + "x" + TOUCHES[0].y + " " + TOUCHES[0].prev_x + "x" + TOUCHES[0].prev_y);*/
        return false;
    });
    /**
     Обработка мышки.
     */
    __.app_mouse(function () {
        if (__.MOUSE.phase == 2 /* BEGAN */ && __.scounter__val(counter) < 10) {
            var va = __.scounter__val(counter);
            __.log(__.scounter__val(counter));
            __.scounter_val(counter, va + 1); // _ устанавливает значение, __ забирает значениe
            __.scounter_align(counter, false, __.WIDTH, __.HEIGHT - 10, 68 /* RB */);
            var va1 = __.scounter__val(counter1);
            __.log(__.scounter__val(counter1));
            __.scounter_val(counter1, va1 + 1); // _ устанавливает значение, __ забирает значениe
            __.scounter_align(counter1, false, __.WIDTH, 0, 65 /* RT */);
            var dx0 = __.MOUSE.x - s0[0 /* xx */], dy0 = __.MOUSE.y - s0[1 /* yy */], dx1 = __.MOUSE.x - s1[0 /* xx */], dy1 = __.MOUSE.y - s1[1 /* yy */], dx2 = __.MOUSE.x - s2[0 /* xx */], dy2 = __.MOUSE.y - s2[1 /* yy */];
            var g0 = dx0 * dx0 + dy0 * dy0, g1 = dx1 * dx1 + dy1 * dy1, g2 = dx2 * dx2 + dy2 * dy2;
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
    __.app_draw(function () {
        // if (DEBUGGING) log("app_draw() ");
        __.sprite_draw(s0);
        __.sprite_draw(s1);
        __.sprite_draw(s2);
        __.sprites_draw(counter);
        __.sprites_draw(counter1);
    });
})(__ || (__ = {}));
//# sourceMappingURL=seminar01.js.map