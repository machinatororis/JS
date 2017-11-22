/// <reference path="../jplib/jplib.d.ts" />
var __;
(function (__) {
    var CCOUNT = 100;
    var circles = [], // массив пустой, типа array
    cnt_click, // счетчик кликов мышью
    cnt_circles, // счетчик закрашенных шаров
    //cl_circles :int = 0, // переменная для подсчета закрашенных шаров
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
        __.$$abc_symbols("game@cnt_click", 50, 0, 1, 0.5, 0.5, "#da2865", 5, "0123456789, %"); // рисуем счетчик кликов мышью 
        __.$$abc_symbols("game@cnt_circles", 50, 0, 1, 0.5, 0.5, "#da2865", 5, "0123456789, %"); // рисуем счетчик закрашенных шаров     
        __.$$apply(); // закрывает
    });
    /**
     * Инициализация программы.
     */
    __.app_init(function () {
        cnt_click = __.scounter_create("game@cnt_click", 6);
        __.sprites_color(cnt_click, 0xda2865);
        cnt_circles = __.scounter_create("game@cnt_circles", 6);
        __.sprites_color(cnt_circles, 0xda2865);
        __.scounter_val(cnt_click, 0); // устанавливаем в счетчик 0
        __.scounter_val(cnt_circles, 0);
        for (var i = 0; i < CCOUNT; ++i) {
            var s = __.sprite_create("game@circle");
            s[22 /* bb */] = Math.random() * 2 - 1; // от -1 до 1
            s[23 /* cc */] = Math.random() * 2 - 1;
            circles.push(s);
            __.sprite_pos(s, __.WIDTH * Math.random(), __.HEIGHT * Math.random()); // создали 100 разных кружков на экране
            __.sprite_color(s, 0xffffff); // готовый цвет из объявления умножается на число
            // circles.push (sprite_create("game@circle")); //  push добавляет в конец массива созданный массив float32array
        }
        _resize(); // вызываем функцию _resize(), устанавливаем позиции, размеры...  
    });
    function _resize() {
        __.scounter_align(cnt_click, false, __.WIDTH, __.HEIGHT - 10, 68 /* RB */);
        __.scounter_align(cnt_circles, false, __.WIDTH, 0, 65 /* RT */);
        __.scounter_val(cnt_click, 0); // устанавливаем 0, пока кликов мышью не было
        __.scounter_align(cnt_click, false, __.WIDTH, __.HEIGHT - 10, 68 /* RB */);
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
        if (__.MOUSE.phase == 2 /* BEGAN */ && __.scounter__val(cnt_click) < 10) {
            var cl_click = __.scounter__val(cnt_click); // получили значение счетчика
            __.scounter_val(cnt_click, cl_click + 1); // установили значение счетчика + 1
            __.scounter_align(cnt_click, false, __.WIDTH, __.HEIGHT - 10, 68 /* RB */);
            var cl_circles = __.scounter__val(cnt_circles); // в переменную положили текущее значение счетчика закрашенных шаров
            __.scounter_val(cnt_circles, cl_circles + 1); // _ устанавливает значение, __ забирает значениe
            __.scounter_align(cnt_circles, false, __.WIDTH, 0, 65 /* RT */);
            var r4 = 4 * r, s = void 0;
            for (var i = 0; i < CCOUNT; ++i) {
                s = circles[i];
                var mx = __.MOUSE.x - s[0 /* xx */], my = __.MOUSE.y - s[1 /* yy */], dist = mx * mx + my * my;
                if (dist < r4 * r4) {
                    __.sprite_color(s, 0x123456, 1); // перекрашиваем в цвет
                    cl_circles++; // при перекрашивании увеличиваем счетчик шаров на 1
                    __.scounter_val(cnt_circles, cl_circles); // устанавливаем в счетчик закрашенных шаров новое значение
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
        __.sprites_draw(cnt_click); // отрисовка счетчика кликов мышью
        __.sprites_draw(cnt_circles);
    });
})(__ || (__ = {}));
//# sourceMappingURL=seminar02.js.map