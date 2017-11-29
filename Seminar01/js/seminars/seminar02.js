/// <reference path="../jplib/jplib.d.ts" />
var __;
(function (__) {
    var CCOUNT = 100;
    var circles = [], // массив пустой, типа array
    target, cnt_click, // счетчик кликов мышью
    cnt_circles_yel, cnt_circles_blue, // счетчик закрашенных шаров
    //cl_circles :int = 0, // переменная для подсчета закрашенных шаров
    bg, r;
    var iscolored = [];
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
        r = __.SIDE * 0.02 | 0; //радиус, где SIDE - меньшая сторона браузера, умн. на 0,05 и округленная в меньшую сторону
        __.$$init(); // инициализирует
        __.$$draw("game@circle", r * 2, r * 2, 0, 1, 0.5, 0.5, function (w) {
            //расположение спрайта по х и у
            //sf - скейл относительно изначально заданного спрайта для того, чтобы при растягивании не билась графика
            //высота и ширина спрайта равны двум радиусам
            __.$fcircle(r, r, r, "#ffffff");
        });
        __.$$draw("game@target", r * 12, r * 12, 0, 1, 0.5, 0.5, function (w) {
            __.$fcircle(r * 6, r * 6, r * 6, "#ffffff");
        });
        __.$$draw("game@bg", __.WIDTH / 2, __.HEIGHT, 0, 1, 0.5, 0.5, function (w) {
            __.$frect(0, 0, __.WIDTH / 2, __.HEIGHT, "#a1abba");
        });
        __.$$abc_symbols("game@cnt_click", 50, 0, 1, 0.5, 0.5, "#122d1a", 5, "0123456789, /"); // рисуем счетчик кликов мышью 
        __.$$abc_symbols("game@cnt_circles_yel", 50, 0, 1, 0.5, 0.5, "#122d1a", 5, "0123456789, /"); // рисуем счетчик закрашенных шаров
        __.$$abc_symbols("game@cnt_circles_blue", 50, 0, 1, 0.5, 0.5, "#ad9601", 5, "0123456789, /"); // рисуем счетчик закрашенных шаров 
        __.$$apply(); // закрывает
    });
    /**
     * Инициализация программы.
     */
    __.app_init(function () {
        cnt_click = __.scounter_create("game@cnt_click", 6);
        __.sprites_color(cnt_click, 0x122d1a);
        cnt_circles_yel = __.scounter_create("game@cnt_circles_yel", 6);
        __.sprites_color(cnt_circles_yel, 0x122d1a);
        cnt_circles_blue = __.scounter_create("game@cnt_circles_blue", 6);
        __.sprites_color(cnt_circles_blue, 0xad9601);
        bg = __.sprite_create("game@bg", __.WIDTH / 4, __.HEIGHT / 2, __.WIDTH / 2, __.HEIGHT * 2);
        __.scounter_val(cnt_click, 10); // устанавливаем в счетчик 0
        __.scounter_val(cnt_circles_yel, 0);
        __.scounter_val(cnt_circles_blue, 0);
        __.sprites_color(cnt_circles_yel, 0xffffff);
        __.sprites_color(cnt_circles_blue, 0xffffff);
        __.sprites_color(cnt_click, 0xffffff);
        __.sprite_color(bg, 0x1328af);
        target = __.sprite_create("game@target");
        __.sprite_color(target, 0xebce7d);
        __.sprite_alpha(target, 0);
        for (var i = 0; i < CCOUNT; ++i) {
            var s = __.sprite_create("game@circle"); //в массив s записываем массив нашего созданного спрайта game@circle
            s[22 /* bb */] = Math.random() * 2 - 1; // присваиваем 22 и 23 элементам массива рандомное значение
            s[23 /* cc */] = Math.random() * 2 - 1;
            circles.push(s); //заполняем массив сircles спрайтами
            __.sprite_pos(s, __.WIDTH * Math.random(), __.HEIGHT * Math.random()); // создали 100 разных кружков на экране
            __.sprite_color(s, 0xffffff); // готовый цвет из объявления умножается на число
            // circles.push (sprite_create("game@circle")); //  push добавляет в конец массива созданный массив float32array
        }
        _resize(); // вызываем функцию _resize(), устанавливаем позиции, размеры...  
    });
    function _resize() {
        __.scounter_align(cnt_click, false, __.WIDTH / 2, 100, 34 /* CC */);
        __.scounter_align(cnt_circles_yel, true, __.WIDTH - 200, 0, 65 /* RT */);
        __.scounter_align(cnt_circles_blue, true, 200, 0, 65 /* RT */);
        __.scounter_val(cnt_click, 10); // устанавливаем 0, пока кликов мышью не было
        __.scounter_align(cnt_click, false, __.WIDTH / 2, 100, 34 /* CC */);
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
            s = circles[i]; //присваиваем s спрайт данной итерации
            __.sprite_move(s, s[22 /* bb */], s[23 /* cc */]); //перемещаем спрайт на рандомное расстояние
            if (__.sprite__pos_x(s) < 0 || __.sprite__pos_x(s) > __.WIDTH) {
                s[22 /* bb */] *= -1; //меняем его движение на прямо противоположное
            }
            if (__.sprite__pos_y(s) < 0 || __.sprite__pos_y(s) > __.HEIGHT) {
                s[23 /* cc */] *= -1; //меняем его движение на прямо противоположное
            }
        }
        check_circles();
    });
    /**
     Обработка мышки.
     */
    __.app_mouse(function () {
        if (__.MOUSE.phase == 2 /* BEGAN */ && __.scounter__val(cnt_click) > 0 && __.sprite__alpha(target) == 0) {
            __.sprite_alpha(target, 1);
            __.sprite_pos(target, __.MOUSE.x, __.MOUSE.y);
            __.sprite_tscale(target, 0, 1, -180, __.EASE_LINEAR);
            __.tweens_timer(null, function () {
                __.sprite_alpha(target, 0);
            }, -240);
            var cl_click = __.scounter__val(cnt_click); // получили значение счетчика
            __.scounter_val(cnt_click, cl_click - 1); // установили значение счетчика + 1
            __.scounter_align(cnt_click, false, __.WIDTH / 2, 100, 34 /* CC */);
        }
        return true;
    });
    function check_circles() {
        var color_yel = 0xad9601, color_blue = 0x01adaa; // цвет, в который перекрашиваем
        if (__.sprite__alpha(target) > 0) {
            var cl_crcl_y = __.scounter__val(cnt_circles_yel), // в переменную положили текущее значение счетчика закрашенных шаров
            cl_crcl_b = __.scounter__val(cnt_circles_blue), // в переменную положили текущее значение счетчика закрашенных шаров
            r7 = 7 * r, s = void 0, cur_r = void 0;
            for (var i = 0; i < CCOUNT; ++i) {
                cur_r = __.sprite__scale(target) * __.sprite__scale(target) * r7 * r7; //вычисляем scale таргета в данный момент времени
                s = circles[i];
                var mx = __.sprite__pos_x(target) - s[0 /* xx */], my = __.sprite__pos_y(target) - s[1 /* yy */], dist = mx * mx + my * my;
                if (dist < cur_r) {
                    if (__.sprite__pos_x(s) < __.WIDTH / 2 && iscolored[i] !== 1) {
                        if (iscolored[i] == 2) {
                            cl_crcl_y--;
                        }
                        __.sprite_color(s, color_blue, 1); // перекрашиваем в цвет
                        iscolored[i] = 1;
                        cl_crcl_b++; // при перекрашивании увеличиваем счетчик шаров на 1    
                    }
                    else if (__.sprite__pos_x(s) > __.WIDTH / 2 && iscolored[i] !== 2) {
                        if (iscolored[i] == 1) {
                            cl_crcl_b--;
                        }
                        __.sprite_color(s, color_yel, 1); // перекрашиваем в цвет
                        iscolored[i] = 2;
                        cl_crcl_y++; // при перекрашивании увеличиваем счетчик шаров на 1
                    }
                }
            }
            __.scounter_val(cnt_circles_yel, cl_crcl_y); // устанавливаем в счетчик закрашенных шаров новое значение
            __.scounter_val(cnt_circles_blue, cl_crcl_b); // устанавливаем в счетчик закрашенных шаров новое значение
            __.scounter_align(cnt_circles_yel, true, __.WIDTH - 200, 0, 65 /* RT */);
            __.scounter_align(cnt_circles_blue, true, 200, 0, 65 /* RT */);
        }
    }
    ;
    /**
     * Фреймовая прорисовка.
     */
    __.app_draw(function () {
        // sprite_draw ("game@circle", WIDTH / 2, HEIGHT / 2); // рисуем атлас game@circle
        __.sprite_draw(bg);
        __.sprite_draw(target);
        __.sprites_draw(circles);
        __.sprites_draw(cnt_click); // отрисовка счетчика кликов мышью
        __.sprites_draw(cnt_circles_yel);
        __.sprites_draw(cnt_circles_blue);
    });
})(__ || (__ = {}));
//# sourceMappingURL=seminar02.js.map