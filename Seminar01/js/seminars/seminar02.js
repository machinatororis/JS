/// <reference path="../jplib/jplib.d.ts" />
var __;
(function (__) {
    var r, //задаем радиус спрайтов типа pixels
    counter_clicks, target, iscolored = [], cnt_def_y, cnt_def_b, points, koef = 1, levels = [];
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
            __.$fcircle(r, r, r, "#fff"); //рисуем окружность с координатами (r;r) и радиусом r цвета белого
        });
        __.$$draw("game@target", r * 12, r * 12, 0, 1, 0.5, 0.5, function (w) {
            __.$fcircle(r * 6, r * 6, r * 6, "#ffffff");
        });
        __.$$draw("game@bg", __.WIDTH / 2, __.HEIGHT, 0, 1, 0.5, 0.5, function (w) {
            __.$frect(0, 0, __.WIDTH / 2, __.HEIGHT, "#fff");
        });
        __.$$abc_symbols("game@counters", 50, 0, 1, 0.5, 0.5, "#122d1a", 5, "0123456789, /"); //счетчики
        __.$$abc_symbols("game@points", 50, 0, 1, 0.5, 0.5, "#122d1a", 5, "0123456789, %"); //очки
        __.$$abc_symbols("game@counter_clicks", 50, 0, 1, 0.5, 0.5, "#122d1a", 5, "0123456789, %"); //очки
        __.$$apply(); // закрывает
    });
    /**
     * Инициализация программы.
     */
    __.app_init(function () {
        //массив с левелами
        levels = [{
                rects: [{ x: __.WIDTH / 4, y: __.HEIGHT / 2, w: __.WIDTH / 2, h: __.HEIGHT, color: 0xff0000 },
                    { x: 3 * __.WIDTH / 4, y: __.HEIGHT / 2, w: __.WIDTH / 2, h: __.HEIGHT, color: 0x0000ff }],
                counters: [10, 10],
                colors: [0xff8080, 0x8080ff],
                clicks: 12,
                circles: 50
            },
            {
                rects: [{ x: __.WIDTH / 2, y: __.HEIGHT / 4, w: __.WIDTH, h: __.HEIGHT / 2, color: 0xf00 },
                    { x: __.WIDTH / 2, y: 3 * __.HEIGHT / 4, w: __.WIDTH, h: __.HEIGHT / 2, color: 0x00f }],
                counters: [10, 10],
                colors: [0xff8080, 0x8080ff],
                clicks: 12,
                circles: 50
            }
        ];
        //счетчик кликов
        counter_clicks = __.scounter_create("game@counter_clicks", 6);
        __.sprites_color(counter_clicks, 0xffffff);
        __.scounter_align(counter_clicks, false, __.WIDTH / 2, 0, 33 /* CT */);
        //таргет
        target = __.sprite_create("game@target");
        __.sprite_color(target, 0xff0000);
        __.sprite_alpha(target, 0);
        //счетчик очков
        points = __.scounter_create("game@points", 6);
        __.sprites_color(points, 0xffffff);
        __.scounter_align(points, false, __.WIDTH - 300, __.HEIGHT - 100, 17 /* LT */);
        //Устанавливаем счетчик кликов в нужное число 
        __.scounter_val(counter_clicks, levels[levelInd].clicks);
        createLevel();
    });
    var levelInd = 0, levelRects, levelsCircles, levelsCnts, levelsColCnts;
    function createLevel() {
        var cfg = levels[levelInd], rects = cfg.rects, counters = cfg.counters, steps = cfg.steps, circles = cfg.circles, s, c;
        //Удаляем старый массив бг
        __.sprites_destroy(levelRects);
        levelRects = [];
        //Удаляем старый массив шариков
        __.sprites_destroy(levelsCircles);
        levelsCircles = [];
        //Удаляем старый массив счетчиков с установленными значениями
        if (levelInd != 0) {
            for (var i = 0; i < levelsCnts.length; i++)
                __.sprites_destroy(levelsCnts[i]);
        }
        levelsCnts = [];
        //Удаляем старый массив счетчиков с числом окрашенных шариков
        if (levelInd != 0) {
            for (var i = 0; i < levelsColCnts.length; i++)
                __.sprites_destroy(levelsColCnts[i]);
        }
        levelsColCnts = [];
        //создаем спрайты бекграундов, записываем их в массив levelRects
        for (var i = 0; i < rects.length; ++i) {
            s = __.sprite_create("game@bg", rects[i].x, rects[i].y, rects[i].w, rects[i].h);
            __.sprite_color(s, rects[i].color);
            levelRects.push(s);
        }
        //создаем спрайты кружочков
        for (var i = 0; i < circles; ++i) {
            s = __.sprite_create("game@circle"); //в массив s записываем массив нашего созданного спрайта game@circle
            s[22 /* bb */] = Math.random() * 2 - 1; // присваиваем 22 и 23 элементам массива рандомное значение
            s[23 /* cc */] = Math.random() * 2 - 1;
            __.sprite_color(s, 0xffffff); // готовый цвет из объявления умножается на число
            __.sprite_pos(s, __.WIDTH * Math.random(), __.HEIGHT * Math.random()); // каждый спрайт устанавливаем вразброс
            levelsCircles.push(s); //заполняем массив сircles спрайтами
        }
        //создаем счетчики с готовыми значениями
        for (var i = 0; i < counters.length; ++i) {
            c = __.scounter_create("game@counters", 6);
            __.scounter_val(c, counters[i]);
            __.sprites_color(c, 0xffffff);
            if (i == 1) {
                __.scounter_align(c, true, __.WIDTH - 300, 0, 17 /* LT */);
            }
            if (i == 2) {
                __.scounter_align(c, true, 10, 10, 17 /* LT */);
            }
            levelsCnts.push(c);
        }
        //Создаем счетчики, в которые будем заносить кол-во закрашенных кружочков
        for (var i = 0; i < counters.length; ++i) {
            c = __.scounter_create("game@counters", 6);
            __.scounter_val(c, 0);
            __.sprites_color(c, 0xffffff);
            if (i == 1) {
                __.scounter_align(c, false, 300, 10, 65 /* RT */);
            }
            if (i == 2) {
                __.scounter_align(c, true, __.WIDTH - 100, 0, 65 /* RT */);
            }
            levelsColCnts.push(c);
        }
        //Обнуляем счетчик очков           
        __.scounter_val(points, 0);
    }
    /**
     * Изменение размеров контейнера канваса.
     */
    __.app_resize(_resize);
    function _resize() {
        var s, cfg = levels[levelInd];
        //Выравниваем rects
        for (var i = 0; i < levelRects.length; ++i) {
            __.sprite_pos(levelRects[i], cfg.rects[i].x, cfg.rects[i].y);
        }
        //Выравниваем счетчик кликов
        __.scounter_align(counter_clicks, false, __.WIDTH / 2, 0, 33 /* CT */);
        //Выравниваем счетчик очков
        __.scounter_align(points, false, __.WIDTH - 300, __.HEIGHT - 100, 17 /* LT */);
        //Выравниваем счетчики со значениями
        for (var i = 0; i < levelsCnts.length; ++i) {
            if (i == 1) {
                __.scounter_align(levelsCnts[i], true, __.WIDTH - 300, 0, 17 /* LT */);
            }
            if (i == 2) {
                __.scounter_align(levelsCnts[i], true, 10, 10, 17 /* LT */);
            }
        }
        //Выравниваем счетчики с окрашенными шариками
        for (var i = 0; i < levelsColCnts.length; ++i) {
            if (i == 1) {
                __.scounter_align(levelsColCnts[i], false, 300, 10, 65 /* RT */);
            }
            if (i == 2) {
                __.scounter_align(levelsColCnts[i], true, __.WIDTH - 100, 0, 65 /* RT */);
            }
        }
    }
    ;
    /**
     * Фреймовая анимация.
     */
    __.app_update(function () {
        var s;
        for (var i = 0; i < levels[levelInd].circles; ++i) {
            s = levelsCircles[i]; //присваиваем s спрайт данной итерации
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
    function check_circles() {
        var colors, cfg = levels[levelInd];
        //если таргет появился
        if (__.sprite__alpha(target) > 0) {
            var r7 = 7 * r, s = void 0, cur_r = void 0, k_points = __.scounter__val(points);
            for (var i = 0; i < levels[levelInd].circles; ++i) {
                cur_r = __.sprite__scale(target) * __.sprite__scale(target) * r7 * r7; //вычисляем scale таргета в данный момент времени
                s = levelsCircles[i]; //s = спрайту текущего круга
                var mx = __.sprite__pos_x(target) - s[0 /* xx */], my = __.sprite__pos_y(target) - s[1 /* yy */], dist = mx * mx + my * my, cfg_1 = levels[levelInd];
                if ((dist < cur_r) && s[7 /* aa */] == 0) {
                    for (var j = 0; j < levelRects.length; j++) {
                        //если спрайт попал в этот ректангл
                        if (__.sprite__pos_y(s) < (cfg_1.rects[j].y + cfg_1.rects[j].h / 2) && __.sprite__pos_y(s) > (cfg_1.rects[j].y - cfg_1.rects[j].h / 2)
                            && __.sprite__pos_x(s) < (cfg_1.rects[j].x + cfg_1.rects[j].w / 2) && __.sprite__pos_x(s) > (cfg_1.rects[j].x - cfg_1.rects[j].w / 2)) {
                            __.log(cfg_1.colors[j]);
                            //если спрайт еще не покрашен в цвет этого ректангла
                            if (__.sprite__color(s) !== cfg_1.colors[j]) {
                                //то перекрашиваем спрайт в цвет этого ректангла
                                __.sprite_color(s, cfg_1.colors[j], 1); // перекрашиваем в цвет
                                /*let cur_cnt_val = scounter__val(levelsColCnts[j]);
                                scounter_val(levelsColCnts[j], cur_cnt_val++);*/
                            }
                        }
                    }
                }
            }
            //Выравниваем счетчики с окрашенными шариками
            for (var i = 0; i < levelsColCnts.length; ++i) {
                if (i == 1) {
                    __.scounter_align(levelsColCnts[i], false, 300, 10, 65 /* RT */);
                }
                if (i == 2) {
                    __.scounter_align(levelsColCnts[i], true, __.WIDTH - 100, 0, 65 /* RT */);
                }
            }
        }
    }
    ;
    /**
     Обработка мышки.
     */
    __.app_mouse(function () {
        if (__.MOUSE.phase == 2 /* BEGAN */) {
            if (__.scounter__val(counter_clicks) > 0) {
                var cnt_cl = __.scounter__val(counter_clicks);
                __.scounter_val(counter_clicks, cnt_cl - 1);
                __.scounter_align(counter_clicks, false, __.WIDTH / 2, 0, 33 /* CT */);
                __.sprite_alpha(target, 1);
                __.sprite_pos(target, __.MOUSE.x, __.MOUSE.y);
                __.sprite_tscale(target, 0, 1, -180, __.EASE_LINEAR);
                __.tweens_timer(null, function () {
                    __.sprite_alpha(target, 0);
                }, -240);
            }
            else {
                levelInd++;
                createLevel();
            }
        }
        return true;
    });
    /**
     * Фреймовая прорисовка.
     */
    __.app_draw(function () {
        __.sprites_draw(levelRects);
        __.sprite_draw(target);
        __.sprites_draw(levelsCircles);
        for (var i = 0; i < levelsCnts.length; i++)
            __.sprites_draw(levelsCnts[i]);
        __.sprites_draw(counter_clicks);
        for (var i = 0; i < levelsColCnts.length; i++)
            __.sprites_draw(levelsColCnts[i]);
        __.sprites_draw(points);
    });
})(__ || (__ = {}));
//# sourceMappingURL=seminar02.js.map