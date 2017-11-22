/// <reference path="../jplib/jplib.d.ts" />
var __;
(function (__) {
    var CCOUNT = 100;
    var circles = [], // массив пустой, типа array
    r;
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
        r = __.SIDE * 0.05 | 0; //радиус, где SIDE - меньшая сторона браузера, умн. на 0,05 и округленная в меньшую сторону
        __.$$init(); // инициализирует
        __.$$draw("game@circle", r * 2, r * 2, 0, 2, 0.5, 0.5, function (w) {
            __.$fcircle(r, r, r, "#ffffff");
        });
        __.$$apply(); // закрывает
    });
    /**
     * Инициализация программы.
     */
    __.app_init(function () {
        for (var i = 0; i < CCOUNT; ++i) {
            var s = __.sprite_create("game@circle");
            s[22 /* bb */] = Math.random() * 2 - 1; // от -1 до 1
            s[23 /* cc */] = Math.random() * 2 - 1;
            circles.push(s);
            __.sprite_pos(s, __.WIDTH * Math.random(), __.HEIGHT * Math.random()); // создали 100 разных кружков на экране
            __.sprite_color(s, 0xffffff); // готовый цвет из объявления умножается на число
            // circles.push (sprite_create("game@circle")); //  push добавляет в конец массива созданный массив float32array
        }
    });
    function _resize() {
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
        var s;
        for (var i = 0; i < CCOUNT; ++i) {
            s = circles[i];
            __.sprite_move(s, s[22 /* bb */], s[23 /* cc */]);
            if (__.sprite__pos_x(s) < 0 || __.sprite__pos_x(s) > __.WIDTH) {
                s[22 /* bb */] *= -1;
            }
            if (__.sprite__pos_y(s) < 0 || __.sprite__pos_y(s) > __.HEIGHT) {
                s[23 /* cc */] *= -1;
            }
        }
    });
    /**
     Обработка мышки.
     */
    __.app_mouse(function () {
        if (__.MOUSE.phase == 2 /* BEGAN */) {
            var r4 = 4 * r, s = void 0;
            for (var i = 0; i < CCOUNT; ++i) {
                s = circles[i];
                var mx = __.MOUSE.x - s[0 /* xx */], my = __.MOUSE.y - s[1 /* yy */], dist = mx * mx + my * my;
                if (dist < r4 * r4) {
                    __.sprite_color(s, 0x123456, 1);
                }
            }
        }
        return true;
    });
    /**
     * Фреймовая прорисовка.
     */
    __.app_draw(function () {
        // sprite_draw ("game@circle", WIDTH / 2, HEIGHT / 2); // рисуем атлас game@circle
        __.sprites_draw(circles);
    });
})(__ || (__ = {}));
//# sourceMappingURL=seminar02.js.map