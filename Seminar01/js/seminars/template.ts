/// <reference path="../jplib/jplib.d.ts" />

module __
{

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

        $$apply();

    });


    /**
     * Инициализация программы.
     */
    app_init(() =>
    {
           
    });

    function _resize(): void{
    };


    /**
     * Изменение размеров контейнера канваса.
     */
    app_resize (_resize);


    /**
     * Фреймовая анимация.
     */
    app_update(() =>
    {

    });


    /**
     Обработка мышки.
     */
    app_mouse(() :bool =>
    {
        return true;
    });


    /**
     * Фреймовая прорисовка.
     */
    app_draw(() :void =>
    {

    });

}