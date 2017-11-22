/// <reference path="../jplib/jplib.d.ts" />
var __;
(function (__) {
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
        __.$$apply();
    });
    /**
     * Инициализация программы.
     */
    __.app_init(function () {
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
    });
    /**
     Обработка мышки.
     */
    __.app_mouse(function () {
        return true;
    });
    /**
     * Фреймовая прорисовка.
     */
    __.app_draw(function () {
    });
})(__ || (__ = {}));
//# sourceMappingURL=template.js.map