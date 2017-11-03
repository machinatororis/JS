/**
 * Общий пример работы со спрайтами.
 *
 * by KH!T (c) 2012-2017.
 */
/// <reference path="../jplib/jplib.d.ts" />
var __;
(function (__) {
    //// INTERNAL CONSTS
    var _RES_BUBBLE = "X 100 100 50 50 0 none none 1 true 0 " +
        "D -20 -20 0 -20 -20 80 0 $0 0.33 $1 0.66 $2 1 $3 " +
        "E 0 0 50 0 " +
        "F $4 " +
        "M -15 18.65 " +
        "Q -15.5 18.5 -17.35 18.5 -18.5 19.15 -21.15 20.85 -23.5 22.5 -26.5 22.5 -28.35 22.5 -31.35 22.65 -29.85 24.5 -28.15 25 " +
        "L -27.35 25.5 " +
        "Q -24.5 26.35 -21.5 25.85 -20.35 25.65 -18.65 23.85 -16.35 21.35 -15 18.65 " +
        "M 43.15 -9.5 " +
        "Q 42.65 -11 42.15 -12 " +
        "L 41.65 -12.85 " +
        "Q 38.15 -11.85 35.65 -11.85 40.15 7 31.35 19.5 22.5 31.85 8.65 34 -5.15 36.35 -11.65 35.5 -18.15 34.5 -21 33.5 -23.85 32.5 -24.5 32 -25.35 31.5 -26.85 31.65 -27.5 31.85 -28.5 32.5 -29.15 32.85 -29.65 33.15 " +
        "L -27.65 34.5 " +
        "Q -25.15 36 -22.5 37.5 -14 42 -9.65 42.15 -5.65 42.35 -2.5 42.15 0.5 42 12.35 39.35 24.35 36.5 31.65 28.65 38.85 20.65 41.15 13.5 43.65 6.5 44.15 0.15 44.5 -5.35 43.15 -9.5 " +
        "M 28.15 -33.35 " +
        "Q 29.35 -30.35 30.35 -27.5 30.85 -25.35 31.85 -23.85 33.35 -20.85 36.35 -19.65 40 -19.65 37.65 -22.35 36.5 -24 35.15 -26.5 34.35 -28.85 31.85 -30 30 -31.65 28.15 -33.35 " +
        "Z " +
        "F $5 " +
        "M -38.35 -10.85 " +
        "Q -39.65 -8.85 -39.15 -6.15 -39.15 -2.65 -39.15 5.65 -36.35 4.85 -33.85 4.15 -31.15 3.85 -29.65 1.85 -28.65 -0.35 -27.35 -3.35 -26.85 -4.35 -26.15 -7.35 -25.65 -9.85 -25.35 -10.85 -25.85 -10.65 -28.15 -11 -30.15 -11.5 -32.85 -11.85 -36.35 -13.5 -38.35 -10.85 " +
        "M -4.5 -33.5 " +
        "L -15.85 -38.85 " +
        "Q -17.15 -38.15 -18.35 -37.65 -19.5 -37.15 -22.65 -34.85 -26 -32.65 -26.85 -31.85 -29.15 -30.35 -31.15 -27.5 -32.15 -26.35 -33.35 -24.65 -35.35 -21.65 -35.85 -19.65 -33.5 -19.15 -31.35 -18.65 -28.65 -18.65 -26 -18.15 -24.15 -18 -21.5 -19.15 -20.35 -19.85 -19.65 -21.5 -18.85 -23.35 -18 -24.65 -15.85 -26.65 -14.35 -27.85 -12 -29.15 -10.15 -30.65 -7.85 -32.35 -6 -32.65 -5.15 -33.5 -4.5 -33.5 " +
        "Z " +
        "";
    var _srect, _test = false, _ctr = 0;
    /**
     * Конфигурация программы.
     */
    __.app_config({
        fps_div: 1,
    });
    /**
     * Формирование графических ресурсов.
     * Вызывается перед app_init и перед app_resize
     */
    __.app_graphics(function () {
        var i, hue;
        __.$$init();
        // формирование прямоугольника с текстом
        __.$$draw$("@test", 0.1, 0.1, 0, 1, 0.5, 0.5, function (w, h, l) {
            __.$srrect(w * 0.1, 0, 0, w, h, "#fff", l * 3, true);
            __.$abc(w * 0.25, l * 3);
            __.$abc_text_align("TEST", 34 /* CC */, l * 3, 0, 0, w, h, "#fff");
        });
        // формирование шариков
        for (i = 0; i < 6; ++i) {
            hue = i * 60;
            __.$$epath$("@bubble" + i, 0.05, 0.05, 0, 1, 0.5, 0.5, _RES_BUBBLE, _hsv2str(hue, 0.50, 1.00), _hsv2str(hue, 0.75, 1.00), _hsv2str(hue, 0.60, 0.75), _hsv2str(hue, 0.60, 0.60), _hsv2str(hue, 0.60, 1.00), _hsv2str(hue, 0.10, 1.00));
        }
        __.$$apply();
    });
    /**
     * Инициализация программы.
     */
    __.app_init(function () {
        var t;
        if (__.DEBUGGING)
            __.log("app_init()");
        __.grid_create();
        _srect = __.sprite_create$("@test", 0.15, 0.15);
        __.sprite_color(_srect, 0xff0000, 1);
        t = __.tweens_vals(_srect, __.sprite_angle, 0, 360, 0, 3000, __.EASE_IN_OUT_BOUNCE);
        __.tween_cycles(t, 0, true);
        __.tween_delay(t, 3000);
        __.tween_repeat_delay(t, 1000);
        t = __.tweens_ws$(_srect, __.sprite_pos_x$, 0, 0.15, 1, -0.15, 1, 3000, __.EASE_IN_OUT_BOUNCE);
        __.tween_cycles(t, 0, true);
        __.tween_delay(t, 3000);
        __.tween_repeat_delay(t, 1000);
        // let newScript = document.createElement("script");
        // newScript.src = "js/test.js";
        // document.body.appendChild(newScript);
    });
    /**
     * Изменение размеров контейнера канваса.
     */
    __.app_resize(function () {
        if (__.DEBUGGING)
            __.log("app_resize() ");
    });
    /**
     * Фреймовая анимация.
     */
    __.app_update(function () {
        //if (DEBUGGING) log("app_update() " + TICKS + " " + TIME);
        //sprite_rotate(s, 1);
        _ctr++;
    });
    /**
     *  Обработка тачей.
     */
    __.app_touches(function () {
        //if (DEBUGGING) log("app_mouse() phase: " + mouse.phase + " coords: " + mouse.x + "x" + mouse.y + " " + mouse.prev_x + "x" + mouse.prev_y);
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
        //if (DEBUGGING) log("app_draw()");
        __.grid_draw();
        if (!_test || _ctr < 300)
            __.sprite_draw("@bubble0", __.w2p$(0.5), __.h2p$(0.5));
        __.sprite_draw(_srect);
    });
    /**
     * Конвертация HSV в #rrggbb
     * @param h 0..360 цветовой круг
     * @param s 0..1
     * @param v 0..1
     * @return {string} #rrggbb
     * @private
     */
    function _hsv2str(h, s, v) {
        var R, G, B, X, C;
        h = (h % 360) / 60;
        C = v * s;
        X = C * (1 - Math.abs(h % 2 - 1));
        R = G = B = v - C;
        h = h >> 0;
        R += [C, X, 0, 0, X, C][h];
        G += [X, C, C, X, 0, 0][h];
        B += [0, 0, X, C, C, X][h];
        return "#" + (16777216 | (B * 255) | ((G * 255) << 8) | ((R * 255) << 16)).toString(16).slice(1);
    }
})(__ || (__ = {}));
//# sourceMappingURL=seminar00.js.map