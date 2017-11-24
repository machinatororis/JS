/**
 * Базовый энжин.
 *
 * by KH!T (c) 2012-2017.
 */
declare module __
{


    //// js/__/core/core.ts


    export const
        /** Глобальный флаг отладки */
        DEBUGGING   :bool;

    /** bool */
    export type bool = boolean;

    /** double */
    export type double = number;

    /** float */
    export type float = number;

    /** str */
    export type str = string;

    /** byte */
    export type byte = number;

    /** ubyte */
    export type ubyte = number;

    /** char */
    export type char = number;

    /** char */
    export type uchar = number;

    /** short */
    export type short = number;

    /** ushort */
    export type ushort = number;

    /** int */
    export type int = number;

    /** uint */
    export type uint = number;

    /** long */
    export type long = number;

    /** ulong */
    export type ulong = number;

    /** pixels */
    export type pixels = number;

    /** color */
    export type color = number;

    /** radians */
    export type radians = number;

    /** degrees */
    export type degrees = number;

    /** Тип цвета в формате 0xAARRGGBB. */
    export type argb = number;

    /** Тип цвета в формате 0xRRGGBB. */
    export type rgb = number;

    /** array */
    export type array = number[]|Int8Array|Uint8Array|Uint8ClampedArray|Int16Array|Uint16Array|Int32Array|Uint32Array|Float32Array|Float64Array;

    /** func */
    export type func = () => void;

    /** bfunc */
    export type bfunc = () => bool;

    /** float array */
    export const FARRAY :any;

    /** float array */
    export type farray = Float32Array;

    /**
     * Проверка является ли объект массивом
     * @param val объект для проверки
     * @return {boolean}
     */
    export const is_arr :(val :any) =>bool;

    /**
     * Проверка является ли объект типовым массивом (Int8Array, UInt8Array, ...)
     * @param val объект для проверки
     * @return {boolean}
     */
    export const is_tarr :(val :any) =>bool;

    /**
     * Проверка является ли объект строкой
     * @param val объект для проверки
     * @return {boolean}
     */
    export const is_str :(val :any) =>bool;

    /**
     * Проверка является ли объект булевым значением
     * @param val объект для проверки
     * @return {boolean}
     */
    export const is_bool :(val :any) =>bool;

    /**
     * Проверка является ли объект числом
     * @param val объект для проверки
     * @return {boolean}
     */
    export const is_num :(val :any) =>bool;

    /**
     * Проверка является ли объект объектом
     * @param val объект для проверки
     * @return {boolean}
     */
    export const is_obj :(val :any) =>bool;

    /**
     * Проверка является ли объект функцией
     * @param val объект для проверки
     * @return {boolean}
     */
    export const is_func :(val :any) =>bool;

    /**
     * Проверка на значение
     * @param val объект для проверки
     * @return {boolean}
     */
    export const is_val :(val :any) =>bool;

    /**
     * Вывод ошибки.
     * @param val проверяемое значение
     * @param {=} msg сообщение
     */
    export const assert :(val? :bool, msg? :str) => void;

    /**
     * Объединение полей src в обхект dst (только не существующие поля).
     * @param dst объект приемник
     * @param src объект источник
     * @returns объект приемник
     */
    export const mixin :(dst :any, src :any) => any;

    /**
     * Округление по модулю.
     * @param val значение
     * @param module модуль
     * @return {number}
     */
    export const round :(val :double, module? :int) => int;

    /**
     * Получить ближайшую степень двойки, большую либо равную
     * @param val заданное число
     * @returns {number}
     */
    export const power_of_2 :(val :int) =>int;

    /**
     * Получение текущего времени
     */
    export const now :() =>number;

    /**
     * Сокращеннная форма функции лога
     */
    export const log :(message? :any, ...optionalParams :any[]) => void;

    /**
     * Пустая функция.
     * @param {Object|=}p1
     * @param {Object|=}p2
     * @param {Object|=}p3
     * @param {Object|=}p4
     */
    export const clean :(p1? :any, p2? :any, p3? :any, p4? :any) =>void;

    /**
     * Пустая булева функция (возвращающая true).
     */
    export const tclean :() =>bool;

    /**
     * Пустая булева функция (возвращающая false).
     */
    export const bclean :() =>bool;

    /**
     * Заглушка убирающая ворнинги webstorm
     */
    export const warning_remove: (val :any) => void;

    export const bits_set_if_or :(check :int, set:int, ...vals :int[]) =>int;

    export const bits_set_if_and :(check :int, set:int, ...vals :int[]) =>int;

    export const is_bits_or :(check :int, ...vals :int[]) =>bool;

    export const is_bits_and :(check :int, ...vals :int[]) =>bool;

    export const is_bits_not :(check :int, ...vals :int[]) =>bool;

    /**
     * Получить красную составляющую цвета в диапазоне (0..1).
     * @param val цвет
     * @return {number}
     */
    export const color_r :(val :rgb) =>float;

    /**
     * Получить зеленую составляющую цвета в диапазоне (0..1).
     * @param val цвет
     * @return {number}
     */
    export const color_g :(val :rgb) =>float;

    /**
     * Получить синюю составляющую цвета в диапазоне (0..1).
     * @param val цвет
     * @return {number}
     */
    export const color_b :(val :rgb) =>float;

    /**
     * Установка сида генератора случайных чисел
     * @param val
     */
    export const rnd_seed :(val? :int) =>void;

    /**
     * Получить случайное целое число в диапазоне.
     * @param bound диапазон
     * @retrun {number}
     */
    export const rnd_rand :(bound :int) =>int;

    /**
     * Получить случайное вещественное число.
     * @return {number}
     */
    export const random : () =>float;

    /** Виды выравнивания */
    export const enum ALIGNS
    {
        /** Лево - Верх */
        LT        = 0x11,
            /** Лево - Центр */
        LC        = 0x12,
            /** Лево - Низ */
        LB        = 0x14,
            /** Центр - Верх */
        CT        = 0x21,
            /** Центр - Центр */
        CC        = 0x22,
            /** Центр - Низ */
        CB        = 0x24,
            /** Право - Верх */
        RT        = 0x41,
            /** Право - Центр */
        RC        = 0x42,
            /** Право - Низ */
        RB        = 0x44,
    }

    /** Точка */
    export interface IPoint
    {
        /** Координата левого верхнего угла */
        readonly x :float,
        /** Координата левого верхнего угла */
        readonly y :float,
    }

    /** Размер */
    export interface ISize
    {
        /** Ширина */
        readonly w :float,
        /** Высота */
        readonly h :float
    }

    /** Прямоугольник */
    export interface IRect
    {
        /** Координата левого верхнего угла */
        readonly x :float,
        /** Координата левого верхнего угла */
        readonly y :float,
        /** Ширина */
        readonly w :float,
        /** Высота */
        readonly h :float
    }

    /** Окружность */
    export interface ICircle
    {
        /** Координата центра */
        readonly x :float,
        /** Координата центра */
        readonly y :float,
        /** Радиус */
        readonly r :float
    }

    /**
     * Добавление модуля
     * @param name имя модуля
     * @param init функция инициализации
     * @param final функция финализации
     * @param {=} main функция которая запускается после инициализации
     */
    export function modules_on(name :str, init :bfunc, final :bfunc, main? :bfunc) :void;

    /**
     * Удаление модуля
     * @param name имя модуля
     */
    export function modules_off(name :str) :void;

    /**
     * Инициализация модулей
     */
    export function modules_init() :void;

    /**
     * Финализация модулей
     */
    export function modules_final() :void;

    /**
     * Проверка на наличие модуля.
     * @param name имя модуля
     * @return {boolean}
     */
    export const is_module :(name :str) =>bool;


    //// js/__/core/fcore.ts


    /** Тип размерность от ширины базового канваса (0..1) */
    export type Width   = float;

    /** Тип размерность от высоты базового канваса (0..1) */
    export type Height  = float;

    /** Тип размерность от меньшей стороны базового канваса */
    export type Side    = float;

    /** Тип размерность от отношения меньшей стороны базового канваса к CONFIG.length */
    export type Length  = float;

    /** Тип лайаут */
    export const enum LAYOUTS
    {
        /** @const неизвестный */
        NONE        = 0,
            /** @const портрет */
        PORTRAIT    = 1,
            /** @const альбом */
        LANDSCAPE   = 2,
            /** @const оба */
        BOTH        = 3,
    }

    /** Типы событий тача. */
    export const enum TOUCH
    {
        /** Мышка над объеком без нажатия (только для мышки) */
        HOVER           = 0x01,
            /** Нажатие пальцем на экран или нажатие кнопки мышки */
        BEGAN           = 0x02,
            /** Палец перемещается по экрану или мышка с нажатой кнопкой перемещается по экрану */
        MOVED           = 0x04,
            /** Палец или мышка с нажатой кнопкой не перемещались по экрану за последний тик таймера */
        STATIONARY      = 0x08,
            /** Палец отрывается от экрана или отжимается кнопка мышки */
        ENDED           = 0x10,
            /** Комбинированый тач нажатие и перемещение */
        BEGAN_MOVED     = BEGAN | MOVED,
    }

    /** Типы блендинга */
    export const enum BLENDS
    {
        /** @const Отсутствие блендинга, те отсутствие прозрачности. */
        NONE            = 0,
            /** @const Объекты с обычной прозрачностью снизу вверх. */
        NORMAL          = 1,
            /** @const Добавляет значение цвета объекта к цвету бакграунда. */
        ADD             = 2,
            /** @const Умножает значение цвета объекта с цветом бакграунда. */
        MULTIPLY        = 3,
            /** @const Умножает инверсный цвет объекта на инверсный цвет бакграунда. */
        SCREEN          = 4,
            /** @const Стирает бакграунд при рисовании RenderTexture. */
        ERASE           = 5
    }

    /** Типы буфферов, для передачи параметров (1..4 floats) */
    export const enum BUFFERS
    {
        /** @const Буферы не определены. */
        NONE            = 0,
            /** @const 1 байт под параметры. */
        ONE             = 1,
            /** @const 2 байта под параметры. */
        TWO             = 2,
            /** @const 3 байта под параметры. */
        THREE           = 3,
            /** @const 4 байта под параметры. */
        FOUR            = 4,
    }

    /** Конфигурация приложения */
    export interface IConfig
    {
        /** Контейнер в котором хранится базовый канвас (по умолчанию document.body)*/
        readonly container?         :HTMLElement;
        /** Расширения WebGL */
        readonly wgl_extentions?    :str[];
        /** Глобальный фпс делитель 60 / fps_div (по умолчанию 2) */
        readonly fps_div?           :int;
        /** Цвет бакграунда (по умолчанию 0) */
        readonly bg_color?          :argb;
        /** Размер в пикселах для вычисления LENGTH (по умолчанию 768px) */
        readonly length?            :pixels,
        /** Бордюр атласных текстур (по умолчанию 4) */
        readonly atlas_border?      :int;
        /** Отладка атласных тексур, путем сохранения в png (по умолчанию false) */
        readonly atlas_debugging?   :bool;
        /** Флаг отладки (по умолчанию true) */
        readonly debugging?         :bool;
        /** Вывод виджета статистики (необходимо подключение модуля stats) */
        readonly stats?             :bool;
    }

    /**
     * Интерфейс конфигурации атласной текстуры
     * В случае составных спрайтов:
     *        ------       -------                      -
     *       |      |     |       |  <-- height (oh)     |
     * ox,oy  ------       -------   <-- base line       |  <-size (os)
     *       |      |     |       |                      |
     *        ------       -------                      -
     *                 ^
     *         sprite line space (ol)
     */
    export interface ITextureConfig
    {
        /** Уникальное имя текстуры в атласе */
        readonly id?     :str;
        /** Координата левого верхнего угла в атласе */
        readonly xx      :pixels;
        /** Координата левого верхнего угла в атласе  */
        readonly yy      :pixels;
        /** Ширина в атласе  */
        readonly ww      :pixels;
        /** Высота в атласе  */
        readonly hh      :pixels;
        /** Масштабный коэффициент */
        readonly sf      :float;
        /** Пивот относительно ww */
        readonly px?     :Width;
        /** Пивот относительно hh */
        readonly py?     :Height;
        /** Дополнительное положение спрайта (для составных спрайтов) */
        readonly ox?     :pixels;
        /** Дополнительное положение спрайта (для составных спрайтов) */
        readonly oy?     :pixels;
        /** Высота от базовой линии до верхней линии (для составных спрайтов) */
        readonly oh?     :pixels;
        /** Размер от верхней до нижней линии (для составных спрайтов) */
        readonly os?     :pixels;
        /** Растояние от ближайшего спрайта по x (для составных спрайтов) */
        readonly ol?     :pixels;
    }

    /** Интерфейс конфигурации шейдерной программы */
    export interface IProgramConfig
    {
        /** Тип буфера */
        readonly buffer      :BUFFERS;
        /** Текст вертексного шейдера */
        readonly vshader     :str;
        /** Текст фрагментного шейдера */
        readonly fshader     :str;
        /** Количество семплов в программе */
        readonly samples?    :int;
    }

    /** Интерфейс конфигурации атласа */
    export interface IAtlasConfig
    {
        /** Ширина атласа */
        readonly ww          :pixels;
        /** Высота атласа */
        readonly hh          :pixels;
        /** Бордюр */
        readonly border?     :pixels;
        /** Массив конфигураций атласных текстур */
        readonly atexs?      :ITextureConfig[];
        /** Битмап */
        readonly bitmap?     :ImageData|Uint8Array;
    }

    /** Интерфейс события тача */
    export interface ITouch
    {
        /** Идентификатор тача */
        readonly id             :int;
        /** X глобальная координата */
        readonly x              :pixels;
        /** Y глобальная координата */
        readonly y              :pixels;
        /** X предыдущая глобальная координата */
        readonly prev_x         :pixels;
        /** Y предыдущая глобальная координата */
        readonly prev_y         :pixels;
        /** Текущая фаза */
        readonly phase          :TOUCH;
        /** Временной штамп текущей фазы */
        readonly timestamp      :double;
        /** Cила нажатия 0..1 */
        readonly pressure       :double;
        /** Ширина зоны нажатия */
        readonly width          :pixels;
        /** Высота зоны нажатия */
        readonly height         :pixels;
    }

    /** Интерфейс шейдерной программы. */
    export interface IProgram
    {
        /** Имя */
        readonly id             :str;
        /** Количество ссылок */
        readonly refs           :int;
        /** Тип буфера */
        readonly buffer         :BUFFERS;
        /** Количество семплов в программе */
        readonly samples        :int;
        /** Текст вершинного шейдера */
        readonly vshader?       :str;
        /** Текст фрагментного шейдера */
        readonly fshader?       :str;
    }

    /** Интерфейс атласа. */
    export interface IAtlas
    {
        /** Уникальный идентификатор атласа */
        readonly id             :str;
        /** Уникальный индекс атласа */
        readonly ind            :int;
        /** Количество ссылок */
        readonly refs           :int;
        /** Ширина атласа */
        readonly ww             :pixels;
        /** Высота атласа */
        readonly hh             :pixels;
        /** Бордюр */
        readonly border         :pixels;
        /** Рендерить в текстуру */
        readonly render_to      :bool;
        /** Массив атласных текстур */
        readonly atexs          :ITexture[];
        /** Словарь индексов атласных текстур */
        readonly atids          :{ [id: string]: int };
        /** Не валиден */
        readonly dirty          :bool;
        /** Битмап */
        readonly bitmap?        :ImageData|Uint8Array;
    }

    /** Интерфейс атласной текстуры */
    export interface ITexture
    {
        /** Ссылка на атласную текстуру */
        readonly atlas_ind  :int;

        /** Идентификатор атласной текстуры */
        readonly id         :str;
        /** Индекс атласной текстуры в атласе */
        readonly ind        :int;

        /** X координата левого верхнего угла в текстуре */
        readonly xx         :pixels;
        /** Y координата левого верхнего угла в текстуре */
        readonly yy         :pixels;
        /** Ширина в текстуре */
        readonly ww         :pixels;
        /** Высота в текстуре */
        readonly hh         :pixels;

        /** Масштабный коэффициент */
        readonly sf         :float;

        /** X координата левого верхнего угла текстуры */
        readonly tx         :Width;
        /** Y координата левого верхнего угла текстуры */
        readonly ty         :Height;
        /** Ширина текстуры */
        readonly tw         :Width;
        /** Высота текстуры */
        readonly th         :Height;

        /** X пивота  */
        readonly px      :pixels;
        /** Y пивота  */
        readonly py      :pixels;

        /** Дополнительное положение спрайта (для составных спрайтов) */
        readonly ox      :pixels;
        /** Дополнительное положение спрайта (для составных спрайтов) */
        readonly oy      :pixels;
        /** Высота от базовой линии до верхней линии (для составных спрайтов) */
        readonly oh      :pixels;
        /** Размер от верхней до нижней линии (для составных спрайтов) */
        readonly os      :pixels;
        /** Растояние от ближайшего спрайта по x (для составных спрайтов) */
        readonly ol      :pixels;
    }

    export const
        /** Конфиг приложения */
        CONFIG      :IConfig,
        /** Текущая ширина рабочего канваса */
        WIDTH       :pixels,
        /** Текущая высота рабочего канваса */
        HEIGHT      :pixels,
        /** Текущее разрешение рабочего канваса */
        DPI         :pixels,
        /** Текущий лайоут */
        LAYOUT      :LAYOUTS,
        /** Текущая минимальная сторона */
        SIDE        :pixels,
        /** Текущее отношение SIDE к config.length */
        LENGTH      :float,

        /** Текущие тачи */
        TOUCHES     :ITouch[],
        /** Текущая мышка */
        MOUSE       :ITouch,

        /** Частота обновления экрана */
        FPS         :int,
        /** Время после запуска программы */
        TIME        :double,
        /** Количество анимационных фреймов после запуска программы */
        TICKS       :int;

    /**
     * Базовая функция конфигурации.
     * @param config конфигурация
     */
    export const app_config :(config :IConfig) =>void;

    /**
     * Размер в единицах отношения минимальной стороны к config.length, c округлением по модулю
     * @param val значение в пикселах
     * @param module модуль округления
     * @return {number}
     */
    export const p2p$ :(val :pixels, module? :int) =>pixels;

    /**
     * Размер в единицах отношения минимальной стороны к config.length, c округлением по модулю
     * @param length значение в LENGTH
     * @param module модуль округления
     * @return {number}
     */
    export const l2p$ :(length :Length, module? :int) =>pixels;

    /**
     * Размер в единицах наименьшей стороны окна с округлением по модулю
     * @param side размер в единицах SIDE
     * @param module модуль округления
     * @return {number}
     */
    export const s2p$ :(side :Side, module? :int) =>pixels;

    /**
     * Размер в единицах ширины окна c округлением по модулю
     * @param width размер в единицах WIDTH
     * @param module модуль округления
     * @return {number}
     */
    export const w2p$ :(width :Width, module? :int) =>pixels;

    /**
     * Размер в единицах высоты окна c округлением по модулю
     * @param height размер в единицах HEIGHT
     * @param module модуль округления
     * @return {number}
     */
    export const h2p$ :(height :Height, module? :int) =>pixels;

    /**
     * Размер в единицах ширины окна c округлением по модулю
     * @param width размер в единицах WIDTH
     * @param side размер в единицах SIDE (0..1)
     * @param module модуль округления
     * @return {number}
     */
    export const ws2p$ :(width :Width, side :Side, module? :int) =>pixels;

    /**
     * Размер в единицах высоты окна c округлением по модулю
     * @param height размер в единицах HEIGHT
     * @param side размер в единицах SIDE (0..1)
     * @param module модуль округления
     * @return {number}
     */
    export const hs2p$ :(height :Height, side :Side, module? :int) =>pixels;

    /**
     * Размер в единицах отношения минимальной стороны к config.length, c округлением по модулю
     * @param val значение в пикселах
     * @param module модуль округления
     * @return {number}
     */
    export const p2s$ :(val :pixels, module? :int) =>pixels;

    /**
     * Размер в единицах отношения минимальной стороны к config.length, c округлением по модулю
     * @param length значение в LENGTH
     * @param module модуль округления
     * @return {number}
     */
    export const l2s$ :(length :Length, module? :int) =>pixels;

    /**
     * Размер в единицах наименьшей стороны окна с округлением по модулю
     * @param side размер в единицах SIDE
     * @param module модуль округления
     * @return {number}
     */
    export const s2s$ :(side :Side, module? :int) =>pixels;

    /**
     * Размер в единицах ширины окна c округлением по модулю
     * @param width размер в единицах WIDTH
     * @param module модуль округления
     * @return {number}
     */
    export const w2s$ :(width :Width, module? :int) =>pixels;

    /**
     * Размер в единицах высоты окна c округлением по модулю
     * @param height размер в единицах HEIGHT
     * @param module модуль округления
     * @return {number}
     */
    export const h2s$ :(height :Height, module? :int) =>pixels;

    /**
     * Размер в единицах ширины окна c округлением по модулю
     * @param width размер в единицах WIDTH
     * @param side размер в единицах SIDE (0..1)
     * @param module модуль округления
     * @return {number}
     */
    export const ws2s$ :(width :Width, side :Side, module? :int) =>pixels;

    /**
     * Размер в единицах высоты окна c округлением по модулю
     * @param height размер в единицах HEIGHT
     * @param side размер в единицах SIDE (0..1)
     * @param module модуль округления
     * @return {number}
     */
    export const hs2s$ :(height :Height, side :Side, module? :int) =>pixels;

    /**
     * Удалить обработчики изменения размеров канваса.
     */
    export function resize_clear() :void;

    /**
     * Добавить функцию обработчика размеров.
     * @param func функция обработчиков размеров.
     * @param apply выполнить немедленно
     */
    export function resize_on(func :func, apply? :bool) :void;

    /**
     * Удалить функцию обработчика размеров.
     * @param func
     */
    export function resize_off(func :func) :void;

    /**
     * Изменение глобальных значений.
     * @param width текущая ширина контейнера
     * @param height текущая высота контейнера
     * @param dpi текущий dpi
     */
    export function resize_apply_consts(width :pixels, height :pixels, dpi :int) :bool;

    /**
     * Вызов обработчиков.
     * @param func дополнительная функция обработчик
     */
    export function resize_apply(func? :func) :void;

    /**
     * Удалить обработчики событий мышки/тача.
     */
    export function touch_clear() :void;

    /**
     * Добавить функцию обработки событий тача/мыши.
     * @param func функция обработи
     * @param multitouch обработка мультитача
     */
    export function touch_on(func :bfunc, multitouch? :bool) :void;

    /**
     * Удалить функцию обработки событий тача/мыши.
     * @param func функция обработки
     */
    export function touch_off(func :bfunc) :void;

    /**
     * Добавить событие мышки/тача в очередь.
     * @param id
     * @param globalX
     * @param globalY
     * @param phase
     * @param pressure
     * @param width
     * @param height
     * @private
     */
    export function touch_add(id :int, globalX :pixels, globalY :pixels, phase :TOUCH,
                              pressure :float, width :pixels, height :pixels) :void;

    /**
     * Выполнить обработку событий мышки/тача.
     * @param tfunc дополнительная функция обработки мультитача
     * @param mfunc дополнительная функция обработки мышки
     */
    export function touch_apply(tfunc? :bfunc, mfunc? :bfunc) :void;

    /**
     * Удалить обработчики фреймовой анимации.
     */
    export function update_clear() :void;

    /**
     * Добавить обработчик фреймовой анимации
     * @param func функция обработки
     * @param fps_div делитель обеспечивающий фпс 60 / fps_div
     * @param apply выполнить немедленно
     */
    export function update_on(func :func, fps_div :int, apply? :bool) :void;

    /**
     * Поставить обработчик фреймовой анимации на паузу
     * @param func функция обработки
     * @param val значение паузы
     * @return FrameHandler
     */
    export function update_pause(func :func, val? :bool) :void;

    /**
     * Установить фпс для обработчика фреймовой анимации
     * @param func функция обработки
     * @param val значение фпс
     */
    export function update_fps_div(func :func, val? :int) :void;

    /**
     * Удалить обработчик фреймовой анимции
     * @param func функция обработки
     */
    export function update_off(func :func) :void;

    /**
     * Выполнить обработку фреймовой анимации
     * @param time время после запуска программы
     * @param ticks тиков после запуска программы
     */
    export function update_apply_consts(time :double, ticks :int) :void;

    /**
     * Выполнить обработку фреймовой анимации
     * @param func дополнительная функция обработчик
     */
    export function update_apply(func? :func) :void;

    /**
     * Удалить обработчики вывода на экран.
     */
    export function draw_clear() :void;

    /**
     * Добавить функцию обработчика вывода на экран.
     * @param func функция вывода на экран.
     * @param apply выполнить немедленно
     */
    export function draw_on(func :func, apply? :bool) :void;

    /**
     * Удалить функцию вывода на экран.
     * @param func
     */
    export function draw_off(func :func) :void;

    /**
     * Активировать обработчики вывода на экран.
     * @param func дополнительная функция обработчик
     */
    export function draw_apply(func? :func) :void;

    /**
     * Удалить обработчики ресурсов.
     */
    export function graphics_clear() :void;

    /**
     * Добавить функцию обработчика ресурсов.
     * @param func функция обработчиков ресурсов.
     * @param apply выполнить немедленно
     */
    export function graphics_on(func :func, apply? :bool) :void;

    /**
     * Удалить функцию обработчика ресурсов.
     * @param func
     */
    export function graphics_off(func :func) :void;

    /**
     * Активировать обработчики ресурсов.
     * @param func дополнительная функция обработчик
     */
    export function graphics_apply(func? :func) :void;

    /**
     * Удалить обработчики глобальных сообщений.
     */
    export function events_clear() :void;

    /**
     * Добавить функцию обработчика глобальных сообщений.
     * @param func функция обработчик глобальных сообщений.
     */
    export function events_on(func :(event :any) =>bool) :void;

    /**
     * Удалить функцию обработчика глобальных сообщений.
     * @param func функция обработчик глобальных сообщений.
     */
    export function events_off(func :(event :any) =>bool) :void;

    /**
     * Активировать обработчики глобальных сообщений.
     * @param func дополнительная функция обработчик
     */
    export function events_apply(func? :(event :any) =>bool) :void;

    /**
     * Распространить сообщение, которое
     * сработает на следующем тике таймера.
     * @param event сообщение
     */
    export function event_fire(event :any) :void;


    //// js/__/core/tweens.ts


    /** Функция преобразования твина */
    export type TweenTransition = (t :double, b? :double, c? :double, d? :double) =>double;

    /** Интерфейс объекта твина */
    export interface ITween
    {
        /** Функция срабатывающая при достижении начального состояния */
        readonly svfunc             :(obj :any) =>void;
        /** Функция срабатывающая при достижении конечного состояния */
        readonly evfunc             :(obj :any) =>void;
        /** Функция срабатывающая в начале работы твина */
        readonly sfunc              :(obj :any) =>void;
        /** Функция срабатывающая после окончания работы твина */
        readonly efunc              :(obj :any) =>void;
        /** Обрабатываемый объект */
        readonly obj                :any;
        /** Функция меняющая/читающая свойство объекта */
        readonly prop               :((obj :any, val :double)=>void)|((obj: any)=>bool);
        /** Функция обрабатывающая таймер */
        readonly ufunc              :((t :ITween) =>bool)|((t :ITween, time :double) =>bool);


        /** Начальное значение свойства */
        readonly sval               :double;
        /** Конечное значение свойства */
        readonly eval               :double;
        /** Объект из которого берется начальное значение */
        readonly sobj               :any;
        /** Функция из которой берется начальное значение */
        readonly sofunc             :((obj :any) =>double)|(() =>double);
        /** Объект из которого берется конечное значение */
        readonly eobj               :any;
        /** Функция из которой берется конечное значение */
        readonly eofunc             :((obj :any) =>double)|(() =>double);

        /** Функция преобразования */
        readonly tfunc              :TweenTransition;
        /** Общее время работы на одно повторение */
        readonly ttime              :double;
        /** Текущее время работы */
        readonly ctime              :double;
        /** Задержка перед стартом */
        readonly sdelay             :double;
        /** Округление полученного значения по модулю (0 - не округлять) */
        readonly rmodule            :int;
        /** Количество повторений */
        readonly rcount             :int;
        /** Задержка перед повторениями */
        readonly rdelay             :double;
        /** Реверсировать каждое второе повторение */
        readonly reverse            :bool;
        /** Текущий цикл */
        readonly ccycle             :int;
        /** Дельта для вычислений граничных значений */
        readonly epsilon            :double;

        /** Предыдущий твин в списке */
        readonly prev               :ITween;
        /** Следующий твин в списке */
        readonly next               :ITween;
        /** Флаг рабочего твина */
        readonly work               :bool;
    }

    /**
     * Добавить твин в менеджер.
     * @param obj обрабатываемый нод
     * @param prop функция свойства нода
     * @param stval начальное значение свойства
     * @param enval конечное значение свойства
     * @param rmodule модуль округления результатов (0 - не округлять)
     * @param time время работы твина в секундах (<0 в тиках)
     * @param transition функция преобразования
     */
    export function tweens_vals(obj :any, prop :(obj :any, val :double)=>void,
                                stval :double, enval :double, rmodule :int,
                                time :double|int, transition :TweenTransition) :ITween;

    /**
     * Добавить твин в менеджер.
     * @param obj обрабатываемый нод
     * @param prop функция свойства нода
     * @param sobj объект из которого берется начальное значение
     * @param sfunc функция из которой берется начальное значение
     * @param eobj объект из которого берется конечное значение
     * @param efunc функция из которой берется конечное значение
     * @param rmodule модуль округления результатов (0 - не округлять)
     * @param time время работы твина в секундах (<0 в тиках)
     * @param transition функция преобразования
     */
    export function tweens_objs(obj :any, prop :(obj :any, val :double)=>void,
                                sobj :any, sfunc :(obj :any) =>double, eobj :any, efunc :(obj :any) =>double, rmodule :int,
                                time :double|int, transition :TweenTransition) :ITween;

    /**
     * Добавить твин в менеджер.
     * @param obj обрабатываемый нод
     * @param prop функция свойства нода
     * @param sfunc функция из которой берется начальное значение
     * @param efunc функция из которой берется конечное значение
     * @param rmodule модуль округления результатов (0 - не округлять)
     * @param time время работы твина в секундах (<0 в тиках)
     * @param transition функция преобразования
     */
    export function tweens_funcs(obj :any, prop :(obj :any, val :double)=>void,
                                 sfunc :() =>double, efunc :() =>double, rmodule :int,
                                 time :double|int, transition :TweenTransition) :ITween;

    /**
     * Добавить твин в менеджер.
     * @param obj обрабатываемый нод
     * @param prop функция свойства нода
     * @param sx начальное растояние в WIDTH единицах
     * @param ss прирашение к начальному расстоянию в SIDE единицах
     * @param ex конечное растояние в WIDTH единицах
     * @param es прирашение к конечному расстоянию в SIDE единицах
     * @param rmodule модуль округления результатов (0 - не округлять)
     * @param time время работы твина в секундах (<0 в тиках)
     * @param transition функция преобразования
     */
    export function tweens_ws$(obj :any, prop :(obj :any, val :double)=>void,
                               sx :Width, ss :Side, ex :Width, es :Side, rmodule :int,
                               time :double|int, transition :TweenTransition) :ITween;

    /**
     * Добавить твин в менеджер.
     * @param obj обрабатываемый нод
     * @param prop функция свойства нода
     * @param sy начальное растояние в HEIGHT единицах
     * @param ss прирашение к начальному расстоянию в SIDE единицах
     * @param ey конечное растояние в HEIGHT единицах
     * @param es прирашение к конечному расстоянию в SIDE единицах
     * @param rmodule модуль округления результатов (0 - не округлять)
     * @param time время работы твина в секундах (<0 в тиках)
     * @param transition функция преобразования
     */
    export function tweens_hs$(obj :any, prop :(obj :any, val :double)=>void,
                               sy :Height, ss :Side, ey :Height, es :Side, rmodule :int,
                               time :double|int, transition :TweenTransition) :ITween;

    /**
     * Добавить таймер в менеджер, после окончания работы срабатывает efunc.
     * @param obj обрабатываемый нод
     * @param efunc функция срабатывающая после окончания работы твина
     * @param time время работы твина в секундах (< 0 в тиках)
     */
    export function tweens_timer(obj :any, efunc :(obj :any) =>void, time :double) :void;

    /**
     * Добавить таймер в менеджер, после окончания работы срабатывает efunc.
     * @param obj обрабатываемый нод
     * @param efunc функция срабатывающая после окончания работы твина
     */
    export function tweens_next_tick(obj :any, efunc :(obj :any) =>void) :void;

    /**
     * Добавить триггер, при котором срабатывает функция efunc
     * когда resfunc возвращает true
     * @param obj объект
     * @param resfunc функция проверки
     * @param efunc срабатывающая функция
     */
    export function tweens_trigger(obj :any, resfunc :(obj: any) =>bool, efunc :(obj :any) =>void) :void;

    /**
     * Удалить твины с заданным объектом|объектами.
     * @param obj объект над которым выполняются твины
     */
    export function tweens_off(obj :any|any[]) :void;

    /**
     * Применить обработку сообщения.
     * @param time интервал в секундах прошедший между последними событиями таймера.
     */
    export function tweens_apply(time :double) :void;

    /**
     * Установка количества циколов твина.
     * @param t твин
     * @param count количество циклов (0 - вечно)
     * @param reverse флаг реверса
     * @return {Object}
     */
    export function tween_cycles(t :ITween, count :int, reverse? :bool) :ITween;

    /**
     * Установка задержки перед стартом твина.
     * @param t твин
     * @param delay задержка перед стартом твина
     * @return {Object}
     */
    export function tween_delay(t :ITween, delay :double|int) :ITween;

    /**
     * Установка задержки перед повтором твина.
     * @param t твин
     * @param delay задержка перед стартом твина
     * @return {Object}
     */
    export function tween_repeat_delay(t :ITween, delay :double|int) :ITween;

    /**
     * Установить функцию, срабатывающую в начале твина
     * @param t твин
     * @param sfunc функция
     * @return {Object}
     */
    export function tween_start_func(t :ITween, sfunc :(obj :any) =>void) :ITween;

    /**
     * Установить функцию, срабатывающую в конце твина
     * @param t твин
     * @param efunc функция
     * @return {Object}
     */
    export function tween_end_func(t :ITween, efunc :(obj :any) =>void) :ITween;

    export const EASE_LINEAR :TweenTransition;

    export const EASE_IN_QUAD :TweenTransition;

    export const EASE_OUT_QUAD :TweenTransition;

    export const EASE_IN_OUT_QUAD :TweenTransition;

    export const EASE_OUT_IN_QUAD :TweenTransition;

    export const EASE_IN_CUBIC :TweenTransition;

    export const EASE_OUT_CUBIC :TweenTransition;

    export const EASE_IN_OUT_CUBIC :TweenTransition;

    export const EASE_OUT_IN_CUBIC :TweenTransition;

    export const EASE_IN_QUART :TweenTransition;

    export const EASE_OUT_QUART :TweenTransition;

    export const EASE_IN_QUINT :TweenTransition;

    export const EASE_OUT_QUINT :TweenTransition;

    export const EASE_IN_OUT_QUINT :TweenTransition;

    export const EASE_OUT_IN_QUINT :TweenTransition;

    export const EASE_IN_SINE :TweenTransition;

    export const EASE_OUT_SINE :TweenTransition;

    export const EASE_IN_OUT_SINE :TweenTransition;

    export const EASE_OUT_IN_SINE :TweenTransition;

    export const EASE_IN_EXPO :TweenTransition;

    export const EASE_OUT_EXPO :TweenTransition;

    export const EASE_IN_CIRC :TweenTransition;

    export const EASE_OUT_CIRC :TweenTransition;

    export const EASE_IN_OUT_CIRC :TweenTransition;

    export const EASE_OUT_IN_CIRC :TweenTransition;

    export const EASE_IN_ELASTIC :TweenTransition;

    export const EASE_OUT_ELASTIC :TweenTransition;

    export const EASE_IN_OUT_ELASTIC :TweenTransition;

    export const EASE_OUT_IN_ELASTIC :TweenTransition;

    export const EASE_IN_BACK :TweenTransition;

    export const EASE_OUT_BACK :TweenTransition;

    export const EASE_IN_OUT_BACK :TweenTransition;

    export const EASE_OUT_IN_BACK :TweenTransition;

    export const EASE_IN_BOUNCE :TweenTransition;

    export const EASE_OUT_BOUNCE :TweenTransition;

    export const EASE_IN_OUT_BOUNCE :TweenTransition;

    export const EASE_OUT_IN_BOUNCE :TweenTransition;


    //// js/__/core/math.ts


    /** PI */
    export const PI             :float;

    /** 2PI */
    export const PI2            :float;

    /** Перевод градусов в радианы */
    export const DEG_TO_RAD     :float;

    /** Перевод радианов в градусы */
    export const RAD_TO_DEG     :float;

    /** Константы работы с матрицей abcdef */
    export const enum MX2
    {
        a = 0,
        b = 1,
        c = 2,
        d = 3,
        e = 4,
        f = 5,
        size = 6
    }

    export interface IMX2DecomposeQR
    {
        /** Смещение по x */
        readonly tx :float;
        /** Смещение по y */
        readonly ty :float;
        /** Масштаб по x */
        readonly sx :float;
        /** Масштаб по x */
        readonly sy :float;
        /** Угол */
        readonly rt :radians;
        /** Сдвиг по x */
        readonly ex :float;
        /** Сдвиг по y */
        readonly ey :float;
    }

    /**
     * ==
     * @param v1 первое число
     * @param v2 второе число
     * @return {boolean}
     */
    export const is_eq :(v1 :float, v2 :float) => bool;

    /**
     * <
     * @param v1 первое число
     * @param v2 второе число
     * @return {boolean}
     */
    export const is_ls :(v1 :float, v2 :float) => bool;

    /**
     * =
     * @param v1 первое число
     * @param v2 второе число
     * @return {boolean}
     */
    export const is_le :(v1 :float, v2 :float) => bool;

    /**
     * >
     * @param v1 первое число
     * @param v2 второе число
     * @return {boolean}
     */
    export const is_gt :(v1 :float, v2 :float) => bool;

    /**
     * =
     * @param v1 первое число
     * @param v2 второе число
     * @return {boolean}
     */
    export const is_ge :(v1 :float, v2 :float) => bool;

    /**
     * Абсолютное значение
     * @param value значение
     * @returns {number}
     */
    export const abs :(value :float) =>float;

    /**
     * Максимальное значение
     * @param val1 значение
     * @param val2 значение
     * @returns {number}
     */
    export const max :(val1 :float, val2 :float) =>float;

    /**
     * Максимальное значение
     * @param val1 значение
     * @param val2 значение
     * @returns {number}
     */
    export const min :(val1 :float, val2 :float) =>float;

    /**
     * Максимальное значение
     * @param val значение
     * @param min минимальное значение диапазона
     * @param max максимальное значение диапазона
     * @returns {number}
     */
    export const clamp :(val :float, min :float, max :float) =>float;

    /**
     * Найти пересечение двух окружностей.
     * @param x1 координата первой окружности
     * @param y1 координата первой окружности
     * @param r1 радиус первой окружности
     * @param x2 координата второй окружности
     * @param y2 координата второй окружности
     * @param r2 радиус второй окружности
     * @returns {Object|void} //{x1:float; y1:float; x2:float; y2:float}
     */
    export function circle_intersections(x1 :float, y1 :float, r1 :float,
                                         x2 :float, y2 :float, r2 :float) :{ x1 :float, y1 :float, x2 :float, y2 :float };

    /**
     * Найти тангенсы от точки к окружности
     * @param cx координата окружности
     * @param cy координата окружности
     * @param cr радиус окружности
     * @param x координата точки
     * @param y координата точки
     * @returns {Object|void} //{x1:float; y1:float; x2:float; y2:float}
     */
    export function circle_tangents_to(cx :float, cy :float, cr :float, x :float, y :float) :{ x1 :float, y1 :float, x2 :float, y2 :float };

    /**
     * Тангенсы двух окружностей
     * @param x1 координата первой окружности
     * @param y1 координата первой окружности
     * @param r1 радиус первой окружности
     * @param x2 координата второй окружности
     * @param y2 координата второй окружности
     * @param r2 радиус второй окружности
     * @param ind индекс тангенса (0..4)
     * @returns {Object|void} //{x1:float; y1:float; x2:float; y2:float}
     */
    export function circles_tangents_to(x1 :float, y1 :float, r1 :float,
                                        x2 :float, y2 :float, r2 :float, ind :int) :{ x1 :float, y1 :float, x2 :float, y2 :float };

    /**
     * Создать матрицу трансформации.
     * @return матрица трансформации
     */
    export function mx2_create() :array;

    /**
     * Склонировать матрицу трансформации.
     * @param {Array|=} m матрица которая клонируется
     * @return матрица трансформации по умолчанию берется из кеша,
     * для дальнейшего использования ее необходимо копировать
     */
    export function mx2_clone(m? :array) :array;

    /**
     * Сбросить матрицу трансформации
     * @param {Array|=} m матрица над которой производится трансформация
     * @return матрица трансформации по умолчанию берется из кеша,
     * для дальнейшего использования ее необходимо копировать
     */
    export function mx2_identity(m? :array) :array;

    /**
     * Установка матрицы трансформации по коэффициентам.
     * @param p матрица с коэффициентами [a, b, c, d, e, f]
     * @param m матрица над которой производится трансформация
     * @return матрица трансформации по умолчанию берется из кеша,
     * для дальнейшего использования ее необходимо копировать
     */
    export function mx2_set(p :array, m? :array) :array;

    /**
     * Установка матрицы трансформации по коэффициентам.
     * @param a scale x
     * @param b shear x
     * @param c shear y
     * @param d scale y
     * @param e translate x
     * @param f translate y
     * @param {Float32Array|=} m матрица над которой производится трансформация
     * @return матрица трансформации по умолчанию берется из кеша,
     * для дальнейшего использования ее необходимо копировать
     */
    export function mx2_set(a :float, b :float, c :float, d :float, e :float, f :float, m? :array) :array;

    export function mx2_set(v0 :float | array, v1? :float | array, c? :float, d? :float, e? :float, f? :float, m? :array) :array;

    /**
     * Перемещение матрицы трансформации
     * @param x перемещение
     * @param y перемещение
     * @param m матрица над которой производится трансформация
     * @return матрица трансформации по умолчанию берется из кеша,
     * для дальнейшего использования ее необходимо копировать
     */
    export function mx2_translate(x :float, y :float, m? :array) :array;

    /**
     * Вращение матрицы трансформации
     * @param angle угол
     * @param m матрица над которой производится трансформация
     * @return матрица трансформации по умолчанию берется из кеша,
     * для дальнейшего использования ее необходимо копировать
     */
    export function mx2_rotate(angle :radians, m? :array) :array;

    /**
     * Масштаб матрицы трансформации
     * @param x масштаб по x
     * @param y масштаб по y
     * @param m матрица над которой производится трансформация
     * @return матрица трансформации по умолчанию берется из кеша,
     * для дальнейшего использования ее необходимо копировать
     */
    export function mx2_scale(x :float, y? :float, m? :array) :array;

    /**
     * Скос матрицы трансформации
     * @param ex скос по x
     * @param ey скос по y
     * @param m матрица над которой производится трансформация
     * @return матрица трансформации по умолчанию берется из кеша,
     * для дальнейшего использования ее необходимо копировать
     */
    export function mx2_skew(ex :float, ey :float, m? :array) :array;

    /**
     * Трансформация по коэффициентам
     * @param p матрица с коэффициентами [a, b, c, d, e, f]
     * @param m матрица над которой производится трансформация
     * @return матрица трансформации по умолчанию берется из кеша,
     * для дальнейшего использования ее необходимо копировать
     */
    export function mx2_transform(p :array, m? :array) :array;

    /**
     * Трансформация по коэффициентам
     * @param a scale x
     * @param b shear x
     * @param c shear y
     * @param d scale y
     * @param e translate x
     * @param f translate y
     * @param {=} m матрица над которой производится трансформация
     * @return матрица трансформации по умолчанию берется из кеша,
     * для дальнейшего использования ее необходимо копировать
     */
    export function mx2_transform(a :float, b :float, c :float, d :float, e :float, f :float, m? :array) :array;

    export function mx2_transform(v0 :float | array, v1? :float | array, c? :float, d? :float, e? :float, f? :float, m? :array) :array;

    /**
     * Умножение матриц m0 = m0 * m1
     * @param m1 матрица множитель
     * @param {Float32Array|=} m0 матрица над которой производится трансформация
     * @param {Float32Array|=} m  результирующая матрица
     * @return матрица трансформации по умолчанию берется из кеша,
     * для дальнейшего использования ее необходимо копировать
     */
    export function mx2_multiply(m1 :array, m0? :array, m? :array) :array;

    /**
     * Декомпозиция матрицы
     * @param {Array|=} m матрица над которой производится трансформация
     * @param {=} dqr объект декомпозиции в который сохраняется результат
     * @returns {Object}
     */
    export function mx2_decomposeQR(m? :array, dqr? :IMX2DecomposeQR) :IMX2DecomposeQR;

    /**
     * Трансформация translate * rotate * scale
     * @param tx перемещение по x
     * @param ty перемещение по y
     * @param angle угол
     * @param sx масштаб по х
     * @param sy масштаб по y
     * @param m матрица над которой производится трансформация
     * @return матрица трансформации по умолчанию берется из кеша,
     * для дальнейшего использования ее необходимо копировать
     */
    export function mx2_trs(tx :float, ty :float, angle :degrees, sx :float, sy? :float, m? :array) :array;

    /**
     * Трансформация translate * rotate * scale * -pivot_translate
     * @param tx перемещение по x
     * @param ty перемещение по y
     * @param angle угол
     * @param sx масштаб по х
     * @param sy масштаб по y
     * @param px точка пивота
     * @param py точка пивота
     * @param m матрица над которой производится трансформация
     * @return матрица трансформации по умолчанию берется из кеша,
     * для дальнейшего использования ее необходимо копировать
     */
    export function mx2_trsp(tx :float, ty :float, angle :degrees, sx :float, sy :float, px :float, py :float, m? :array) :array;

    /**
     * Трансформация identity * translate * rotate * scale
     * @param tx перемещение по x
     * @param ty перемещение по y
     * @param angle угол
     * @param sx масштаб по х
     * @param sy масштаб по y
     * @param m матрица над которой производится трансформация
     * @return матрица трансформации по умолчанию берется из кеша,
     * для дальнейшего использования ее необходимо копировать
     */
    export function mx2_itrs(tx :float, ty :float, angle :degrees, sx :float, sy? :float, m? :array) :array;

    /**
     * Трансформация identity * translate * rotate * scale * -pivot_translate
     * @param tx перемещение по x
     * @param ty перемещение по y
     * @param angle угол
     * @param sx масштаб по х
     * @param sy масштаб по y
     * @param px точка пивота
     * @param py точка пивота
     * @param m матрица над которой производится трансформация
     * @return матрица трансформации по умолчанию берется из кеша,
     * для дальнейшего использования ее необходимо копировать
     */
    export function mx2_itrsp(tx :float, ty :float, angle :degrees, sx :float, sy :float, px :float, py :float, m? :array) :array;

    /**
     * Применить координаты к матрице.
     * @param x координата
     * @param y координата
     * @param m матрица трансформации, по умолчанию берется из кеша
     * @param {=}p точка, куда сохраняются данные
     * @return точка по умолчанию берется из кеша,
     * для дальнейшего использования ее необходимо копировать
     */
    export function mx2_apply_to_coords(x :float, y :float, m? :array, p? :IPoint) :IPoint;

    /**
     * Создать точку.
     * @param x значение
     * @param y значение
     * @return {Object}
     */
    export function point_create(x? :float, y? :float) :IPoint;

    /**
     * Клонировать точку.
     * @param p клонируемая точка, по умолчанию берется из кеша
     */
    export function point_clone(p? :IPoint) :IPoint;

    /**
     * Создать случайную точку в диапазоне.
     * @param width диапазон по х
     * @param height диапазон по y
     * @param p точка, куда сохраняются данные
     * @return точка по умолчанию берется из кеша,
     * для дальнейшего использования ее необходимо копировать
     */
    export function point_rnd(width? :float, height? :float, p? :IPoint) :IPoint;

    /**
     * Применить матрицу к точке.
     * @param pt точка
     * @param m матрица которая производит трансформация
     * @param p точка, куда сохраняются данные
     * @return точка по умолчанию берется из кеша,
     * для дальнейшего использования ее необходимо копировать
     */
    export function point_transform(pt :IPoint, m? :array, p? :IPoint) :IPoint;

    /**
     * Создать прямоугольник.
     * @param x левый верхний угол
     * @param y левый верхний угол
     * @param w ширина
     * @param h высота
     * @return {Object}
     */
    export function rect_create(x? :float, y? :float, w? :float, h? :float) :IRect;

    /**
     * Клонировать прямоугольник.
     * @param r клонируемый прямоугольник, по умолчанию берется из кеша
     * @return {Object}
     */
    export function rect_clone(r? :IRect) :IRect;

    /**
     * Применить трансформацию к прямоугольнику и посчитать
     * получившийся ограничивающий прямоугольник
     * @param rt трансформированный прямоугольник
     * @param m матрица трансформации, по умолчанию берется из кеша
     * @param r прямоугольник куда сохраняются результаты
     * @return прямоугольник по умолчанию берется из кеша,
     * для дальнейшего использования его необходимо копировать
     */
    export function rect_transform_bounds(rt :IRect, m? :array, r? :IRect) :IRect;

    /**
     * Проверка находится ли прямоугольник внутри другого
     * @param rt меньший прямоугольник
     * @param x левый верхний угол большего прямоугольника
     * @param y левый верхний угол большего прямоугольника
     * @param w ширина большего прямоугольника
     * @param h высота большего прямоугольника
     * @return флаг успешности
     */
    export function is_rect_in(rt :IRect, x :float, y :float, w :float, h :float) :bool;

    /**
     * Проверка находится ли прямоугольник внутри другого
     * @param rt меньший прямоугольник
     * @param bigrt больший прямоугольник
     * @return флаг успешности
     */
    export function is_rect_in(rt :IRect, bigrt :IRect) :bool;

    export function is_rect_in(rt :IRect, x :IRect | float, y? :float, w? :float, h? :float) :bool;

    /**
     * Проверка находится ли прямоугольник внутри другого
     * @param rt меньший прямоугольник
     * @param x левый верхний угол большего прямоугольника
     * @param y левый верхний угол большего прямоугольника
     * @param w ширина большего прямоугольника
     * @param h высота большего прямоугольника
     * @return флаг успешности
     */
    export function is_rect_intersect(rt :IRect, x :float, y :float, w :float, h :float) :bool;

    /**
     * Проверка находится ли прямоугольник внутри другого
     * @param rt меньший прямоугольник
     * @param bigrt больший прямоугольник
     * @return флаг успешности
     */
    export function is_rect_intersect(rt :IRect, bigrt :IRect) :bool;

    export function is_rect_intersect(rt :IRect, x :IRect | float, y? :float, w? :float, h? :float) :bool;

    /**
     * Получить полигон из строки.
     * @param pts точки в виде строки чисел
     * @return {Float32Array}
     */
    export function polygon_create_from_str(pts :str) :farray;

    /**
     * Получить полигон из компактной строки.
     * @param pts точки в виде строки чисел
     * @param frac количество точек после запятой
     * @return {Float32Array}
     */
    export function polygon_create_from_cstr(pts :str, frac :int) :farray;

    /**
     * Получить полигон из строки в формате utf16.
     * @param pts точки в формате utf16 (128..0xD7FF)
     * @param frac точек после запятой фиксированного формата
     * @return {Float32Array}
     */
    export function polygon_create_from_utf16(pts :str, frac :int) :farray;

    /**
     * Представить полигон в виде строки
     * @param pts точки
     * @param separator разделитель
     * @param frac точек после запятой фиксированного формата (-1 не использовать)
     */
    export function polygon_to_str(pts :farray, separator :str, frac :int) :str;

    /**
     * Представить полигон в виде компактной строки
     * @param pts точки
     * @param separator разделитель
     * @param frac точек после запятой фиксированного формата
     */
    export function polygon_to_cstr(pts :farray, separator :str, frac :int) :str;

    /**
     * Представить полигон в виде строки utf16
     * @param pts точки, фиксированный формат которых в диапазоне (0..0xD7FF - 128)
     * @param frac точек после запятой фиксированного формата
     * @return {string}
     */
    export function polygon_to_utf16(pts :farray, frac :int) :str;

    /**
     * Создать полигон с отраженными точками по x
     * @param prt исходные точки
     * @param x центр
     * @return новый полигон
     */
    export function polygon_create_inverse_x(prt :farray, x :float) :farray;

    /**
     * Переместить полигон в начало координат.
     * @param prt исходный полигон (меняется)
     * @return новый полигон
     */
    export function polygon_to_origin(prt :farray) :farray;

    /**
     * Проверка является ли полигон замкнутым.
     * @param pts массив точек [x0, y0, .., xN, yN]
     * @return {boolean}
     */
    export function is_polygon_close(pts :farray) :bool;

    /**
     * Подсчитать центроид полигона.
     * @param pts массив точек [x0, y0, .., xN, yN]
     * @param p точка, куда сохраняются данные
     * @return точка по умолчанию берется из кеша,
     * для дальнейшего использования ее необходимо копировать
     */
    export function polygon_centroid(pts :farray, p? :IPoint) :IPoint;

    /**
     * Создать ограничивающий прямоугольник полигона.
     * @param pts массив точек [x0, y0, .., xN, yN]
     * @param r прямоугольник куда сохраняются данные
     * @return прямоугольник по умолчанию берется из кеша,
     * для дальнейшего использования его необходимо копировать
     */
    export function polygon_bounds(pts :farray, r? :IRect) :IRect;

    /**
     * Перевод числа в компактную строку.
     * @param val число
     * @param frac количество цифр после запятой
     * @return {string}
     */
    export function float_to_cstr(val :float, frac? :int) :str;

    /**
     * Перевод из компактной строки в число
     * @param val компактная строка
     * @param frac количество цифр после запятой
     * @return {number}
     */
    export function cstr_to_float(val :str, frac? :int) :float;
// export function polygons_create_from_str(pts :str[], inverse_x? :bool) :farray[];
// export function polygons_create_from_utf16(pts :str[], frac :int, inverse_x? :bool) :farray[];


    //// js/__/web/context.ts


    /**
     * Создать контекст.
     * @param {=} options опции контекста
     * @return {CanvasRenderingContext2D|null}
     */
    export function $create(options? :any) :CanvasRenderingContext2D;

    /**
     * Инициализация контекста.
     * @param {=}context устанавливаемый контекст
     * @param {=}width ширина контекста
     * @param {=}height высота контекста
     * @param {=}blur текущий блур
     * @param {=}blur_color цвет размытия
     */
    export function $init(context? :CanvasRenderingContext2D, width? :pixels, height? :pixels, blur? :pixels, blur_color? :str) :void;

    /**
     * Быстрая установка контекста.
     * @param context контекст
     * @param width ширина контекста
     * @param height высота контекста
     */
    export function $set(context? :CanvasRenderingContext2D, width? :pixels, height? :pixels) :void;

    /**
     * Установка стиля контекста.
     * @param width ширина стиля
     * @param height высота стиля
     */
    export function $css_style(width? :pixels, height? :pixels) :CSSStyleDeclaration;

    /**
     * Сохранить содержимое файла в формате png
     * @param file_name имя файла
     */
    export function $save_as_png(file_name :str) :void;

    /**
     * Получить текущее значение размытия.
     * @return {number}
     */
    export const $blur :() =>pixels;

    /**
     * Получить битмап по заданной области.
     * @param {=} x левый верхний угол
     * @param {=} y левый верхний угол
     * @param {=} width ширина
     * @param {=} height высота
     * @returns {ImageData}
     */
    export function $image_data_get(x? :pixels, y? :pixels, width? :pixels, height? :pixels) :ImageData;

    /**
     * Перевод контекста в base64
     * @return {string}
     */
    export function $to_data_url() :str;

    /**
     * Нарисовать битмап.
     * @param idata битмап
     * @param x левый верхний угол в контексте
     * @param y левый верхний угол в контексте
     * @param dx левый верхний угол в битмапе
     * @param dy левый верхний угол в битмапе
     * @param dwidth ширина в битмапе
     * @param dheight высота в битмапе
     */
    export function $image_data_put(idata :ImageData, x :pixels, y :pixels, dx? :pixels, dy? :pixels, dwidth? :pixels, dheight? :pixels) :void;

    /**
     * Очистить зарезирвированную площадь.
     */
    export function $clear() :void;

    /**
     * Очистить канвас определенным цветом с нулевой альфой.
     * @param color цвет
     */
    export function $clear_no_alpha(color? :rgb) :void;

    /**
     * Установка глобальной альфы.
     * @param val значение
     */
    export function $alpha(val :float) :float;

    /**
     * Установить смешивания.
     * @param val значение
     */
    export function $composite(val :str) :void;

    /**
     * Сброс матрицы трансформации.
     */
    export function $transform_reset() :void;

    /**
     * Установка матрицы трансформации по коэффициентам.
     * @param p матрица с коэффициентами [a, b, c, d, e, f]
     */
    export function $transform_set(p :array) :void;

    /**
     * Установка матрицы трансформации по коэффициентам.
     * @param a scale x
     * @param b shear x
     * @param c shear y
     * @param d scale y
     * @param e translate x
     * @param f translate y
     */
    export function $transform_set(a :float, b :float, c :float, d :float, e :float, f :float) :void;

    export function $transform_set(v0 :float|array, b? :float, c? :float, d? :float, e? :float, f? :float) :void;

    /**
     * Сохранить контекст.
     */
    export function $save() :void;

    /**
     * Восстановить контекст.
     */
    export function $restore() :void;

    /**
     * Изменить масштаб контекста.
     * @param sx масштаб контекста
     * @param sy масштаб контекста
     */
    export function $scale(sx :float, sy? :float) :void;

    /**
     * Переместить контекст.
     * @param dx смещение
     * @param dy смещение
     */
    export function $translate(dx :pixels, dy :pixels) :void;

    /**
     * Вращать контекст.
     * @param val угол
     */
    export function $rotate(val :degrees) :void;

    /**
     * Установить матрицу трансформации
     * @param dx смещение
     * @param dy смещение
     * @param rot вращение
     * @param sx масштаб
     * @param sy масштаб
     * @param px точка пивота
     * @param py точка пивота
     */
    export function $trs(dx :pixels, dy :pixels, rot :degrees, sx :float, sy? :float, px? :pixels, py? :pixels) :void;

    /**
     * Установка вида соединения линий
     * @param join вид соединения (bevel, round, miter)
     */
    export function $line_join(join :str) :void;

    /**
     * Установка вида концов линий
     * @param cap вид соединения (butt, round, square)
     */
    export function $line_cap(cap :str) :void;

    /**
     * Установка ширины линии
     * @param val ширина линии
     */
    export function $line_width(val :pixels) :void;

    /**
     * Установка стиля заполнения.
     * @param val стиль заполнения
     */
    export function $fill(val? :str) :void;

    /**
     * Установка стиля строки.
     * @param val стиль строки
     * @param lwidth ширина линии
     */
    export function $stroke(val? :str, lwidth? :pixels) :void;

    /**
     * Установка стилей
     * @param fill стиль заполнения
     * @param stroke стиль строки
     * @param lwidth ширина линии
     */
    export function $style(fill :str, stroke :str, lwidth :pixels) :void;

    /**
     * Прорисовка прямоугольника текущими стилями.
     * @param x координата левого верхнего угла
     * @param y координата левого верхнего угла
     * @param w ширина
     * @param h высота
     * @param frame необходимо вписать в заданные размеры с учетом толщины линии
     */
    export function $rect(x :pixels, y :pixels, w :pixels, h :pixels, frame? :bool) :void;

    /**
     * Прорисовка прямоугольника.
     * @param x координата левого верхнего угла
     * @param y координата левого верхнего угла
     * @param w ширина
     * @param h высота
     * @param fstyle стиль заливки
     * @param lwidth ширина линии
     * @param frame необходимо вписать в заданные размеры с учетом толщины линии
     */
    export function $frect(x :pixels, y :pixels, w :pixels, h :pixels, fstyle :str, lwidth? :pixels, frame? :bool) :void;

    /**
     * Прорисовка прямоугольника.
     * @param x координата левого верхнего угла
     * @param y координата левого верхнего угла
     * @param w ширина
     * @param h высота
     * @param sstyle стиль линии
     * @param lwidth толщина линии
     * @param frame необходимо вписать в заданные размеры с учетом толщины линии
     */
    export function $srect(x :pixels, y :pixels, w :pixels, h :pixels, sstyle :str, lwidth :pixels, frame? :bool) :void;

    /**
     * Прорисовка прямоугольника с закругленными углами текущими стилями.
     * @param r радиус закругления
     * @param x x координата левого верхнего угла
     * @param y у координата левого верхнего угла
     * @param w ширина
     * @param h высота
     * @param frame необходимо вписать в заданные размеры с учетом толщины линии
     */
    export function $rrect(r :pixels, x :pixels, y :pixels, w :pixels, h :pixels, frame? :bool) :void;

    /**
     * Прорисовка прямоугольника с закругленными углами
     * @param r радиус закругления
     * @param x координата левого верхнего угла
     * @param y координата левого верхнего угла
     * @param w ширина
     * @param h высота
     * @param fstyle стиль заполнения
     * @param lwidth толщина линии
     * @param frame необходимо вписать в заданные размеры с учетом толщины линии
     */
    export function $frrect(r :pixels, x :pixels, y :pixels, w :pixels, h :pixels, fstyle :str, lwidth? :pixels, frame? :bool) :void;

    /**
     * прорисовка прямоугольника с закругленными углами
     * @param r радиус закругления
     * @param x координата левого верхнего угла
     * @param y у координата левого верхнего угла
     * @param w ширина
     * @param h высота
     * @param sstyle стиль бордюра
     * @param lwidth ширина бордюра
     * @param frame необходимо вписать в заданные размеры с учетом толщины линии
     */
    export function $srrect(r :pixels, x :pixels, y :pixels, w :pixels, h :pixels, sstyle :str, lwidth :pixels, frame? :bool) :void;

    /**
     * Прорисовка эллипса текущими стилями
     * @param x координата левого верхнего угла
     * @param y координата левого верхнего угла
     * @param w ширина
     * @param h высота
     * @param frame необходимо вписать в заданные размеры с учетом толщины линии
     */
    export function $ellipse(x :pixels, y :pixels, w :pixels, h :pixels, frame? :bool) :void;

    /**
     * прорисовка эллипса
     * @param x координата левого верхнего угла
     * @param y координата левого верхнего угла
     * @param w ширина
     * @param h высота
     * @param fstyle стиль заполнения
     * @param lwidth ширина бордюра
     * @param frame необходимо вписать в заданные размеры с учетом толщины линии
     */
    export function $fellipse(x :pixels, y :pixels, w :pixels, h :pixels, fstyle :str, lwidth? :pixels, frame? :bool) :void;

    /**
     * прорисовка эллипса
     * @param x координата левого верхнего угла
     * @param y координата левого верхнего угла
     * @param w ширина
     * @param h высота
     * @param sstyle стиль бордюра
     * @param lwidth ширина бордюра
     * @param frame необходимо вписать в заданные размеры с учетом толщины линии
     */
    export function $sellipse(x :pixels, y :pixels, w :pixels, h :pixels, sstyle :str, lwidth :pixels, frame? :bool) :void;

    /**
     * Прорисовка окружности текущими стилями
     * @param x координата центра
     * @param y координата центра
     * @param r радиус
     * @param frame необходимо вписать в заданные размеры с учетом толщины линии
     */
    export function $circle(x :pixels, y :pixels, r :pixels, frame :bool) :void;

    /**
     * Прорисовка окружности
     * @param x координата центра
     * @param y координата центра
     * @param r радиус
     * @param fstyle стиль заполнения
     * @param lwidth ширина бордюра
     * @param frame необходимо вписать в заданные размеры с учетом толщины линии
     */
    export function $fcircle(x :pixels, y :pixels, r :pixels, fstyle :str, lwidth? :pixels, frame? :bool) :void;

    /**
     * Прорисовка окружности
     * @param x координата центра
     * @param y координата центра
     * @param r радиус
     * @param sstyle стиль бордюра
     * @param lwidth ширина бордюра
     * @param frame необходимо вписать в заданные размеры с учетом толщины линии
     */
    export function $scircle(x :pixels, y :pixels, r :pixels, sstyle :str, lwidth :pixels, frame? :bool) :void;

    /**
     * Прорисовка линии текущими стилями.
     * @param x1 координата первой точки
     * @param y1 координата первой точки
     * @param x2 координата второй точки
     * @param y2 координата второй точки
     */
    export function $line(x1 :pixels, y1 :pixels, x2 :pixels, y2 :pixels) :void;

    /**
     * Прорисовка линии
     * @param x1 координата первой точки
     * @param y1 координата первой точки
     * @param x2 координата второй точки
     * @param y2 координата второй точки
     * @param sstyle стиль бордюра
     * @param lwidth ширина бордюра
     */
    export function $sline(x1 :pixels, y1 :pixels, x2 :pixels, y2 :pixels, sstyle :str, lwidth :pixels) :void;

    /**
     * Прорисовка грида текущими стилями
     * @param x координата левого верхнего угла
     * @param y координата левого верхнего угла
     * @param w ширина
     * @param h высота
     * @param tw ширина тайла
     */
    export function $grid(x :pixels, y :pixels, w :pixels, h :pixels, tw :pixels) :void;

    /**
     * Прорисовка грида
     * @param x координата левого верхнего угла
     * @param y координата левого верхнего угла
     * @param w ширина
     * @param h высота
     * @param tw ширина тайла
     * @param sstyle стиль бордюра
     * @param lwidth ширина бордюра
     */
    export function $sgrid(x :pixels, y :pixels, w :pixels, h :pixels, tw :pixels, sstyle :str, lwidth :pixels) :void;

    /**
     * Нарисовать полигон текущими стилями.
     * @param pts точки полигона в виде массива [x0, y0, ..., xN, yN]
     * @param x координата центроида на канвасе
     * @param y координата центроида на канвасе
     * @param close замкнуть полигон
     */
    export function $poly(pts :array, x :pixels, y :pixels, close :boolean) :void;

    /**
     * Нарисовать полигон.
     * @param pts точки полигона в виде массива [x0, y0, ..., xN, yN]
     * @param x координата центроида на канвасе
     * @param y координата центроида на канвасе
     * @param close замкнуть полигон
     * @param fstyle стиль заполнения
     */
    export function $fpoly(pts :array, x :pixels, y :pixels, close :boolean, fstyle :str) :void;

    /**
     * Нарисовать полигон.
     * @param pts точки полигона в виде массива [x0, y0, ..., xN, yN]
     * @param x координата центроида на канвасе
     * @param y координата центроида на канвасе
     * @param sstyle стиль бордюра
     * @param lwidth ширина бордюра
     * @param close замкнуть полигон
     */
    export function $spoly(pts :array, x :pixels, y :pixels, close :boolean,  sstyle :str, lwidth :pixels) :void;

    /**
     * Нарисовать полигон частично текущими стилями.
     * @param pts точки полигона в виде массива [x0, y0, ..., xN, yN]
     * @param count количество точек
     * @param x координата центроида на канвасе
     * @param y координата центроида на канвасе
     */
    export function $poly_part(pts :array, count :int, x :pixels, y :pixels) :void;

    /**
     * Нарисовать полигон частично.
     * @param pts точки полигона в виде массива [x0, y0, ..., xN, yN]
     * @param count количество точек
     * @param x координата центроида на канвасе
     * @param y координата центроида на канвасе
     * @param fstyle стиль заполнения
     */
    export function $fpoly_part(pts :array, count :int, x :pixels, y :pixels, fstyle :str) :void;

    /**
     * Нарисовать полигон частично.
     * @param pts точки полигона в виде массива [x0, y0, ..., xN, yN]
     * @param count количество точек
     * @param x координата центроида на канвасе
     * @param y координата центроида на канвасе
     * @param sstyle стиль бордюра
     * @param lwidth ширина бордюра
     */
    export function $spoly_part(pts :array, count :int, x :pixels, y :pixels, sstyle :str, lwidth :pixels) :void;

    export const $epath :(path :str, x? :pixels, y? :pixels, w? :pixels, h? :pixels, ...params :any[]) =>void;

    /**
     * Установка параметров шрифта
     * @param height базовая высота шрифта
     * @param {=} thickness ширина линии шрифта
     */
    export function $abc(height :pixels, thickness? :pixels) :void;

    /**
     * Высота фонта от базовой линии до максимальной
     * заглавной буквы.
     * @return {number}
     */
    export const $abc_height: () =>pixels;

    /**
     * Размер фонта. Высота + доп высота букв gjqy и тп
     */
    export const $abc_size: () =>pixels;

    /**
     * Расстояние между символами.
     * @return {number}
     */
    export const $abc_letter_space:() =>pixels;

    /**
     * Вывести символ.
     * @param symbol
     * @param x координата начала текста
     * @param y координата базовой линии
     * @param style стиль
     * @return {Object} ограничивающий прямоугольник
     */
    export function $abc_symbol(symbol :str, x :pixels, y :pixels, style? :str) :IRect;

    /**
     * Вывести однострочный текст.
     * @param text текст
     * @param x координата начала текста
     * @param y координата базовой линии
     * @param style стиль
     * @return {Object} ограничивающий прямоугольник
     */
    export function $abc_text(text :string, x :pixels, y :pixels, style? :str) :IRect;

    /**
     * Посчитать ограничивающий прямоугольник символа.
     * @param symbol
     * @param x координата начала текста
     * @param y координата базовой линии
     * @return {Object} ограничивающий прямоугольник
     */
    export function $abc_symbol_bounds(symbol :str, x? :pixels, y? :pixels) :IRect;

    /**
     * Посчитать ограничивающий прямоугольник однострочного текста.
     * @param text текст
     * @param x координата начала текста
     * @param y координата базовой линии
     * @return {Object} ограничивающий прямоугольник
     */
    export function $abc_text_bounds(text :string, x? :pixels, y? :pixels) :IRect;

    /**
     * Вывести однострочный текст, отформатированный внутри прямоугольника.
     * @param text текст
     * @param align выравнивание
     * @param margin отступы
     * @param x координата прямоугольника
     * @param y координата прямоугольника
     * @param w ширина прямоугольника
     * @param h высота прямоугольника
     * @param {=}style стиль
     * @return {Object} прямоугольник ограничивающий текст
     */
    export function $abc_text_align(text :string, align :ALIGNS, margin :pixels, x :pixels, y :pixels, w :pixels, h :pixels, style? :str) :IRect;


    //// js/__/web/graphics.ts


    export const
        TEXTURES_POWER_OF_2 :bool;

    /** Типы сортировок при формировании атласа */
    export const enum SORTS
    {
        /** @const Сортировать по высоте */
        HEIGHT      = 0,
            /** @const Сортировать по ширине */
        WIDTH       = 1,
            /** @const Сортировать по площади */
        AREA        = 2,
            /** @const Сортировать по большей стороне */
        MAXSIDE     = 3,
            /** @const Сортировать по всем типам и выбрать наилучший (оч медленно) */
        BEST        = 4,
    }

    /**
     * Инициализация мейкера.
     */
    export function $$init() :void;

    /**
     * Установить сортировку атласа по умолчанию.
     * @param sort вид сортировки
     * @param border бордюр
     */
    export function $$atlas(sort :SORTS, border? :pixels) :void;

    /**
     * Установить сортировку атласа.
     * @param ida идентификатор атласа.
     * @param sort вид сортировки
     * @param border бордюр
     */
    export function $$atlas(ida :str, sort :SORTS, border? :pixels) :void;

    export function $$atlas(v1 :str|SORTS, v2? :SORTS|pixels, v3? :pixels) :void;

    /**
     * Добавить битмапдату.
     * @param cid комплексный идентификатор atlas_id@texture_id
     * @param sf масштабный коэффициент
     * @param px координата пивота
     * @param py координата пивота
     * @param bdata битмап данные
     * @param {=}ox дополнительное положение спрайта (для составных спрайтов)
     * @param {=}oy дополнительное положение спрайта (для составных спрайтов)
     * @param {=}oh высота спрайта от базовой линии до верхней линии (для составных спрайтов)
     * @param {=}os размер спрайта от нижней до верхней линии (для составных спрайтов)
     * @param {=}ol растояние от ближайшего спрайта по x (для составных спрайтов)
     */
    export function $$bitmap_data(cid :str, sf: float, px :Width, py :Height, bdata :ImageData,
                                  ox? :pixels, oy? :pixels, oh? :pixels, os? :pixels, ol? :pixels) :void;

    /**
     * Добавить битмапдату, формирующуюся функцией.
     * @param cid комплексный идентификатор atlas_id@texture_id
     * @param w ширина битмапдаты
     * @param h высота битмапдаты
     * @param blur размытие (если не NaN, выводится как тень)
     * @param sf масштабный коэффициент
     * @param px координата пивота
     * @param py координата пивота
     * @param draw функция формирующая битмапдату
     */
    export function $$draw(cid :str, w :pixels, h: pixels, blur :pixels, sf :float, px :Width, py :Height, draw :(w :pixels, h :pixels, l :pixels)=>void) :void;

    /**
     * Добавить битмапдату, формирующуюся функцией.
     * @param cid комплексный идентификатор atlas_id@texture_id
     * @param w ширина битмапдаты
     * @param h высота битмапдаты
     * @param blur размытие (если не NaN, выводится как тень)
     * @param sf масштабный коэффициент
     * @param px координата пивота
     * @param py координата пивота
     * @param draw функция формирующая битмапдату
     */
    export function $$draw$(cid :str, w :Side, h: Side, blur :Length, sf :float, px :Width, py :Height, draw :(w :pixels, h :pixels, l :pixels)=>void) :void;

    export const $$epath :(cid :str, w :pixels, h :pixels, blur :pixels, sf :float, px :Width, py :Height, path :str, ...params :any[]) =>void;

    export const $$epath$ :(cid :str, w :Side, h :Side, blur :Length, st :float, px :Width, py :Height, path :str, ...params :any[]) =>void;

    /**
     * Нариосвать текст как отдельные символы в дефолтном шрифте.
     * @param cid идентификатор битмапдаты
     * @param h высота шрифта
     * @param blur размытие (если не NaN, выводится как тень)
     * @param sf масштабный коэффициент
     * @param px координата пивота
     * @param py координата пивота
     * @param style стиль шрифта
     * @param thickness ширина линии шрифта
     * @param text текст
     */
    export function $$abc_symbols(cid :str, h :pixels, blur :pixels, sf :float, px :Width, py :Height,
                                  style :str, thickness :pixels, text :str) :void;

    /**
     * Нариосвать текст как отдельные символы в дефолтном шрифте.
     * @param cid идентификатор битмапдаты
     * @param h высота шрифта
     * @param blur размытие (если не NaN, выводится как тень)
     * @param sf масштабный коэффициент
     * @param px координата пивота
     * @param py координата пивота
     * @param style стиль шрифта
     * @param thickness ширина линии шрифта
     * @param text текст
     */
    export function $$abc_symbols$(cid :str, h :Side, blur :Length, sf :float, px :Width, py :Height,
                                   style :str, thickness :Length, text :str) :void;

    /**
     * Нариосвать текст в дефолтном шрифте.
     * @param cid идентификатор битмапдаты
     * @param h высота шрифта
     * @param blur размытие (если не NaN, выводится как тень)
     * @param sf масштабный коэффициент
     * @param px координата пивота
     * @param py координата пивота
     * @param style стиль шрифта
     * @param thickness ширина линии шрифта
     * @param text текст
     * @param underline подчеркнуть текст
     */
    export function $$abc_text(cid :str, h :pixels, blur :pixels, sf :float,  px :Width, py :Height,
                               style :str, thickness :pixels, text :str, underline? :bool) :void;

    /**
     * Нариосвать текст в дефолтном шрифте.
     * @param cid идентификатор битмапдаты
     * @param h высота шрифта
     * @param blur размытие (если не NaN, выводится как тень)
     * @param sf масштабный коэффициент
     * @param px координата пивота
     * @param py координата пивота
     * @param style стиль шрифта
     * @param thickness ширина линии шрифта
     * @param text текст
     * @param underline подчеркнуть текст
     */
    export function $$abc_text$(cid :str, h :Side, blur :Length, sf :float, px :Width, py :Height,
                                style :str, thickness :Length, text :str, underline? :bool) :void;

    /**
     * Cформировать конфигурацию атласа.
     */
    export function $$apply() :void;

    /**
     * Удалить атлас
     * @param id идентификатор атласа
     * @return {number} уникальный идентификатор атласа
     */
    export function $$remove(id :str) :int;

    /**
     * Сформировать атлас для бак буфера. Доступ к текстуре
     * через составной индекс id@0
     * @param id идентификатор бакбуфера
     * @param width ширина
     * @param height высота
     */
    export function $$back_init(id :str, width :pixels, height :pixels) :void;

    /**
     * Нарисовать в бак буфер.
     * @param id идентификатор бак буфера
     * @param draw функция рисования средствами WebGL
     * @param ccolor цвет очистки экрана
     */
    export function $$back_draw(id :str, draw :func, ccolor? :argb) :void;


    //// js/__/web/container.ts


    export const
        /** Текущий контейнер приложения */
        ELEMENT     :HTMLElement,
        /** Текущий канвас приложения */
        CANVAS      :HTMLCanvasElement;


    //// js/__/web/wgl.ts


    export const
        /** Флаг успешной инициализации модуля */
        WGL                 :bool,
        /** Флаг потери контекста */
        WGL_CONTEXT_LOST    :bool,
        /** Максимальный размер текстуры */
        TEXTURE_SIZE        :pixels;

    /**
     * Установить цвет бакграунда
     * @param value упакованный цвет
     * @param now флаг немедленной установки
     */
    export function wgl_clear_color(value :argb, now? :boolean) :void;

    /**
     * Очистить буфер цвета
     */
    export function wgl_clear_color_buffer() :void;

    /**
     * Установка/сброс области отсечения относительно текущего вьюпорта.
     * @param enable флаг установки/сброса
     * @param xx координата левого верхнего угла
     * @param yy координата левого верхнего угла
     * @param ww ширина
     * @param hh высота
     */
    export function wgl_scissor(enable :bool, xx? :pixels, yy? :pixels, ww? :pixels, hh? :pixels) :void;

    /**
     * Установка блендинга.
     * @param mode устанавливаемый режим
     * @param now выполнить немедленно
     */
    export function wgl_blend(mode :BLENDS, now? :boolean) :void;

    /**
     * Получить экземпляр расширения.
     * @param name имя расширения
     * @return {Object}
     */
    export function wgl_extention(name :str) :any;

    /**
     * Установка атласа вывода графики
     * @param atlas_id уникальный идентификатор атласа (void 0 - дисплейный буфер)
     */
    export function wgl_target_set_id(atlas_id? :str) :void;

    /**
     * Установка атласа вывода графики
     * @param atlas_ind уникальный идентификатор атласа (0 - дисплейный буфер)
     */
    export function wgl_target_set(atlas_ind? :int) :void;

    /**
     * Проверка наличия зарегистрированной программы в рендерере по id.
     * @param id уникальный идентификатор программы
     * @return {boolean}
     */
    export function wgl_is_program_id(id :str);

    /**
     * Проверка наличия зарегистрированной программы в рендерере по индексу.
     * @param ind уникальный индекс программы
     * @return {boolean}
     */
    export function wgl_is_program(ind :int);

    /**
     * Добавить программу, если она отсутствует. Или просто возвратить ссылку на нее.
     * @param id уникальный идентификатор программы
     * @param config конфиг для создания программы
     * @return {number} уникальный индекс программы
     */
    export function wgl_program_init(id :str, config :IProgramConfig) :int;

    /**
     * Добавить программу или возвратить готовую ссылку.
     * @param config конфигурация программы
     * @param id уникальное имя программы
     * @return {number} уникальный индекс программы
     */
    export function wgl_program_create(id :str, config :IProgramConfig) :int;

    /**
     * Увеличение счетчика ссылок на программу.
     * @param id идентификатор программы
     * @return {number} уникальный индекс программы
     */
    export function wgl_program_lock_id(id :str) :int;

    /**
     * Увеличение счетчика ссылок на программу.
     * @param ind уникальный индекс программы
     * @return {number} уникальный индекс программы
     */
    export function wgl_program_lock(ind :int) :int;

    /**
     * Уменьшение счетчика ссылок и удаление программы при нулевом счетчике.
     * @param id уникальный идентификатор программы
     * @param now удалить независимо от счетчика ссылок
     */
    export function wgl_program_remove_id(id :str, now? :bool) :int;

    /**
     * Уменьшение счетчика ссылок и удаление программы при нулевом счетчике.
     * @param ind уникальный индекс программы
     * @param now удалить независимо от счетчиков ссылок
     * @return {number} уникальный индекс программы
     */
    export function wgl_program_remove(ind :int, now? :bool) :int;

    /**
     * Применить программу по id.
     * @param id уникальный идентификатор программы
     * @param now выполнить немедленно
     */
    export function wgl_program_use_id(id :str, now? :bool) :void;

    /**
     * Применить программу.
     * @param ind уникальный индекс программы
     * @param {=}now выполнить немедленно
     */
    export function wgl_program_use(ind :int, now? :bool) :void;

    /**
     * Установка u_params текущей шейдерной программы.
     * @param value массив значений
     */
    export function wgl_program_params_set(value :farray|float[]) :void;

    /**
     * Пометить все зарегистрированные атласы как невалидные.
     */
    export function wgl_atlas_dirty_all() :void;

    /**
     * Проверить наличие атласа
     * @param id уникальный идентификатор атласа
     */
    export function wgl_is_atlas_id(id :str) :bool;

    /**
     * Проверить наличие атласа
     * @param ind уникальный индекс атласа
     */
    export function wgl_is_atlas(ind :int) :bool;

    /**
     * Проверить атлас на валидность.
     * @param id уникальный идентификатор атласа
     * @return {boolean} флаг валидности атласа
     */
    export function wgl_is_atlas_dirty_id(id :str) :bool;

    /**
     * Проверить атлас на валидность.
     * @param ind уникальный индекс атласа
     * @return {boolean} флаг валидности атласа
     * @private
     */
    export function wgl_is_atlas_dirty(ind :int) :bool;

    /**
     * Добавлен атлас, если он не добавлен. Обновить атлас, если он испорчен.
     * Или просто возвратить ссылку на него.
     * @param id уникальный идентификатор атласа
     * @param config конфиг или функция, генерирующая конфиг
     * @param render_to рендеринг в текстуру
     * @return {number} уникальный индекс атласа
     */
    export function wgl_atlas_init(id :str, config :IAtlasConfig|(() =>IAtlasConfig), render_to? :bool) :int;

    /**
     * Создать атлас или возвратить на него ссылку.
     * @param id идентификатор атласа
     * @param config конфигурация атласа
     * @param render_to рендерить в текстуру
     * @return {number} уникальный индекс атласа
     */
    export function wgl_atlas_create(id :str, config :IAtlasConfig, render_to? :bool) :int;

    /**
     * Инициализировать атлас по умолчанию который используется в простых шейдерах,
     * для окраски прямоугольников.
     * @return {number} уникальный индекс атласа
     */
    export function wgl_atlas_create_default() :int;

    /**
     * Увеличить счетчик ссылок на атлас.
     * @param id уникальный идентификатор атласа
     * @return {number} уникальный индекс атласа
     */
    export function wgl_atlas_lock_id(id :str) :int;

    /**
     * Увеличить счетчик ссылок на атлас.
     * @param ind уникальный индекс атласа
     * @return {number} уникальный индекс атласа
     */
    export function wgl_atlas_lock(ind :int) :int;

    /**
     * Уменьшение счетчика ссылок и удаление атласа при нулевом счетчике.
     * @param id уникальный идентификатор атласа
     * @param now удалить независимо от счетчика ссылок
     * @return {number} уникальный индекс атласа
     */
    export function wgl_atlas_remove_id(id :str, now? :bool) :int;

    /**
     * Уменьшение счетчика ссылок и удаление атласа при нулевом счетчике.
     * @param ind уникальный индекс атласа
     * @param now удалить независимо от счетчика ссылок
     * @return {number} уникальный индекс атласа
     */
    export function wgl_atlas_remove(ind :int, now? :bool) :int;

    /**
     * Применить атлас.
     * @param id уникальны идентификатор атласа
     * @param sampler семплер в программе
     * @param now выполнить немедленно
     */
    export function wgl_atlas_use_id(id :str, sampler :int, now? :bool) :void;

    /**
     * Применить атлас.
     * @param ind уникальный индекс атласа
     * @param sampler семплер в программе
     * @param now выполнить немедленно
     */
    export function wgl_atlas_use(ind :int, sampler :int, now? :bool) :void;

    /**
     * Обновить текстуру в атласе.
     * @param id унакальный идентификатор атласа
     * @param bitmap ссылка на битмап
     */
    export function wgl_atlas_upload_id(id :str, bitmap :ImageData) :void;

    /**
     * Обновить текстуру в атласе.
     * @param ind уникальный индекс атласа
     * @param bitmap ссылка на битмап
     */
    export function wgl_atlas_upload(ind :int, bitmap :ImageData) :void;

    /**
     * Обновить текстуру в атласе.
     * @param id унакальный идентификатор атласа
     * @param width ширина текстуры
     * @param height высота текстуры
     * @param arr ссылка на массив в формате RGBA
     */
    export function wgl_atlas_upload_from_array_id(id :str, width :int, height :int, arr :Uint8Array) :void;

    /**
     * Обновить текстуру в атласе.
     * @param ind уникальный индекс атласа
     * @param width ширина текстуры
     * @param height высота текстуры
     * @param arr ссылка на массив в формате RGBA
     */
    export function wgl_atlas_upload_from_array(ind :int, width :int, height :int, arr :Uint8Array) :void;

    /**
     * Применить атлас.
     * @param sampler сэмплер атласа
     * @param id унакальный идентификатор атласа
     */
    export function wgl_atlas_bind_id(sampler :int, id? :str) :void;

    /**
     * Применить атлас.
     * @param sampler сэмплер атласа
     * @param ind уникальный индекс атласа
     */
    export function wgl_atlas_bind(sampler :int, ind :int) :void;

    /**
     * Пометить атлас как невалидный.
     * @param id уникальный идентификатор атласа
     */
    export function wgl_atlas_dirty_id(id :str) :void;

    /**
     * Пометить атлас как невалидный
     * @param ind уникальный индекс атласа
     */
    export function wgl_atlas_dirty(ind :int) :void;

    /**
     * Получить уникальный идентификатор атласа по индексу.
     * @param ind уникальный индекс атласа.
     * @return {number} уникальный идентификатор атласа
     */
    export function wgl_atlas_ind(ind :int) :str;

    /**
     * Получить уникальный индекс атласа по id.
     * @param id уникальный айди атласа.
     * @return {number} уникальный индекс атласа
     */
    export function wgl_atlas_id(id :str) :int;

    /**
     * Получить текстуру по индексу атласа и индексу текстуры.
     * @param ind уникальный индекс атласа
     * @param tind уникальный индекс текстуры в атласе
     * @return {Object}
     */
    export function wgl_atlas_texture(ind :int, tind :int) :ITexture;

    /**
     * Получить текстуру по комплексному айди (atlas_id@texture_id)
     * @param cid комплексный айди (atlas_id@texture_id)
     * @param offs смещение относительно идентификатора текстуры
     * @return {Object}
     */
    export function wgl_texture(cid :str, offs :int) :ITexture;

    /**
     * Нарисовать текущий буфер.
     */
    export function wgl_dbuffer_draw() :void;

    /**
     * Сброс текущего буфера.
     * @private
     */
    export function wgl_dbuffer_reset() :void;

    /**
     * Добавить элементы рисования в буфер.
     * @param vals значения
     * @param length количество данных
     */
    export function wgl_dbuffer_apply(vals :farray, length? :int) :void;

    /**
     * Возвратить размер буфера в квадах по типу патча
     * @param type тип патча (1..4 количество векторов параметров квада)
     * @return {number} количество квадов в патче
     */
    export function wgl_quads_capacity(type :BUFFERS) :int;

    /**
     * Эмуляция потери контекста.
     */
    export function wgl_context_lose() :void;


    //// js/__/web_ui/grid.ts


    /**
     * Инициализация грида
     * @param color цвет линий
     */
    export function grid_create(color? :argb) :void;

    /**
     * Нарисовать сетку.
     */
    export function grid_draw() :void;


    //// js/__/web_ui/sprite.ts


    /** @private Типы параметров спрайта */
    export const enum ST
    {
        /** Размеры берутся из текстуры */
        SIZE_FROM_TEXTURE   = 0x0001,
            /** Пивот берется из текстуры */
        PIVOT_FROM_TEXTURE  = 0x0002,
            /** Использование поля aa */
        AA                  = 0x0004,
            /** Использование поля bb */
        BB                  = 0x0008,
            /** Использование поля cc */
        CC                  = 0x0010,
            /** Дополнительный флаг */
        P0                  = 0x0020,
            /** Дополнительный флаг */
        P1                  = 0x0040,
            /** Дополнительный флаг */
        P2                  = 0x0080,
    }

    /** Индексы доступа к полям спрайта */
    export const enum SP
    {
        xx  = 0,  // pixels  bx + dx * side                                 absolute pos x
        yy  = 1,  // pixels  by + dy * side                                 absolute pos y
        sw  = 2,  // pixels  sx * ww                                        absolute width
        sh  = 3,  // pixels  sy * hh                                        absolute height

        rr  = 4,  // degrees                                                rotate
        px  = 5,  // Width                                                  pivot
        py  = 6,  // Height                                                 pivot
        aa  = 7,  //                                                        reserved

        cr  = 8,  // 0..1                                                   color r
        cg  = 9,  // 0..1                                                   color g
        cb  = 10, // 0..1                                                   color b
        ca  = 11, // 0..1                                                   color a

        tx  = 12, // 0..1                                                   texture x
        ty  = 13, // 0..1                                                   texture y
        tw  = 14, // 0..1                                                   texture w
        th  = 15, // 0..1                                                   texture h

        sx  = 16, // float                                                  scale x
        sy  = 17, // float                                                  scale y
        ww  = 18, // pixels tt.ww                                           width
        hh  = 19, // pixels tt.hh                                           height

        tt  = 20, // PROGRAM_IND << 18 | ATLAS_IND << 10 | TEXTURE_IND      complex wgl index
        ff  = 21, // ST                                                     combination ST flags
        bb  = 22, //                                                        reserved
        cc  = 23, //                                                        reserved

        size = 24,
    }

    /**
     * Создать спрайт, склонировав исходный
     * @param sp исходный спрайт
     * @returns {Float32Array}
     */
    export function sprite_create(sp :farray) :farray;

    /**
     * Создать спрайт
     * @param tt идентификатор текстуры
     * @param {=}xx координата в пикселах
     * @param {=}yy координата в пикселах
     * @param {=}ww ширина в пикселах
     * @param {=}hh высота в пикселах
     * @param {=}sx масштаб
     * @param {=}sy масштаб
     * @param {=}rr вращение в градусах
     * @param {=}px пивот x в единицах ширины
     * @param {=}py пивот y в единицах высоты
     * @param {=}cl цвет
     * @param {=}ca альфа
     */
    export function sprite_create(tt  :str|ITexture,
                                  xx? :pixels, yy? :pixels,
                                  ww? :pixels, hh? :pixels,
                                  sx? :float, sy? :float, rr? :degrees,
                                  px? :Width, py? :Height,
                                  cl? :rgb, ca? :float) :farray;

    export function sprite_create(tt  :str|ITexture|farray,
                                  xx? :pixels, yy? :pixels,
                                  ww? :pixels, hh? :pixels,
                                  sx? :float, sy? :float, rr? :degrees,
                                  px? :Width, py? :Height,
                                  cl? :rgb, ca? :float) :farray;

    /**
     * Проинициализировать спрайт, склонировав исходный
     * @param sp исходный спрайт
     * @param sps спрайт в котором находятся данные для инициализации
     * @returns {Float32Array}
     */
    export function sprite_init(sp :farray, sps :farray) :farray;

    /**
     * Проинициализировать спрайт
     * @param sp исходный спрайт
     * @param tt идентификатор текстуры
     * @param {number|=}xx координата в пикселах
     * @param {number|=}yy координата в пикселах
     * @param {number|=}ww ширина в пикселах
     * @param {number|=}hh высота в пикселах
     * @param {number|=}sx масштаб
     * @param {number|=}sy масштаб
     * @param {number|=}rr вращение в градусах
     * @param {number|=}px пивот x в единицах ширины
     * @param {number|=}py пивот y в единицах высоты
     * @param {number|=}cl цвет
     * @param {number|=}ca альфа
     * @returns {Float32Array}
     */
    export function sprite_init(sp  :farray,
                                tt  :str|ITexture,
                                xx? :pixels, yy? :pixels,
                                ww? :pixels, hh? :pixels,
                                sx? :float, sy? :float, rr? :degrees,
                                px? :Width, py? :Height,
                                cl? :rgb, ca? :float) :farray;

    export function sprite_init(sp  :farray,
                                tt  :str|ITexture|farray,
                                xx? :pixels, yy? :pixels,
                                ww? :pixels, hh? :pixels,
                                sx? :float, sy? :float, rr? :degrees,
                                px? :Width, py? :Height,
                                cl? :rgb, ca? :float) :farray;

    /**
     * Создать спрайт, склонировав исходный
     * @param sp исходный спрайт
     * @returns {Float32Array}
     */
    export function sprite_create$(sp :farray) :farray;

    /**
     * Создать спрайт
     * @param tt идентификатор текстуры
     * @param {=}xx координата в SIDE размерности
     * @param {=}yy координата в SIDE размерности
     * @param {=}ww ширина в SIDE размерности
     * @param {=}hh высота в SIDE размерности
     * @param {=}sx масштаб
     * @param {=}sy масштаб
     * @param {=}rr вращение в градусах
     * @param {=}px пивот x в единицах ширины
     * @param {=}py пивот y в единицах высоты
     * @param {=}cl цвет
     * @param {=}ca альфа
     * @returns {Float32Array}
     */
    export function sprite_create$(tt :str|farray,
                                   xx? :Side, yy? :Side,
                                   ww? :Side, hh? :Side,
                                   sx? :float, sy? :float, rr? :degrees,
                                   px? :Width, py? :Height,
                                   cl? :rgb, ca? :float) :farray;

    export function sprite_create$(tt :str|ITexture|farray,
                                   xx? :Side, yy? :Side,
                                   ww? :Side, hh? :Side,
                                   sx? :float, sy? :float, rr? :degrees,
                                   px? :Width, py? :Height,
                                   cl? :rgb, ca? :float) :farray;

    /**
     * Проинициализировать спрайт, склонировав исходный
     * @param sp исходный спрайт
     * @param sps спрайт в котором находятся данные для инициализации
     * @returns {Float32Array}
     */
    export function sprite_init$(sp :farray, sps :farray) :farray;

    /**
     * Проинициализировать спрайт
     * @param sp исходный спрайт
     * @param tt идентификатор текстуры
     * @param {=}xx координата в SIDE размерности
     * @param {=}yy координата в SIDE размерности
     * @param {=}ww ширина в SIDE размерности
     * @param {=}hh высота в SIDE размерности
     * @param {=}sx масштаб
     * @param {=}sy масштаб
     * @param {=}rr вращение в градусах
     * @param {=}px пивот x в единицах ширины
     * @param {=}py пивот y в единицах высоты
     * @param {=}cl цвет
     * @param {=}ca альфа
     * @returns {Float32Array}
     */
    export function sprite_init$(sp :farray,
                                 tt  :str|ITexture,
                                 xx? :Side, yy? :Side,
                                 ww? :Side, hh? :Side,
                                 sx? :float, sy? :float, rr? :degrees,
                                 px? :Width, py? :Height,
                                 cl? :rgb, ca? :float) :farray;

    export function sprite_init$(sp :farray,
                                 tt  :str|ITexture|farray,
                                 xx? :Side, yy? :Side,
                                 ww? :Side, hh? :Side,
                                 sx? :float, sy? :float, rr? :degrees,
                                 px? :Width, py? :Height,
                                 cl? :rgb, ca? :float) :farray;

    /**
     * Удалить спрайт.
     */
    export function sprite_destroy(sp :farray) :farray;

    export const sprite__pos_x  :(sp :farray) =>pixels;

    export const sprite__pos_y  :(sp :farray) =>pixels;

    export const sprite__size_x :(sp :farray) =>pixels;

    export const sprite__size_y :(sp :farray) =>pixels;

    export const sprite__width  :(sp :farray) =>pixels;

    export const sprite__height :(sp :farray) =>pixels;

    export const sprite__angle   :(sp :farray) =>float;

    export const sprite__scale   :(sp :farray) =>float;

    export const sprite__scale_x :(sp :farray) =>float;

    export const sprite__scale_y :(sp :farray) =>float;

    export const sprite__color_r :(sp :farray) =>float;

    export const sprite__color_g :(sp :farray) =>float;

    export const sprite__color_b :(sp :farray) =>float;

    export const sprite__alpha   :(sp :farray) =>float;

    export const sprite__color   :(sp :farray) =>rgb;

    export const sprite__pos_x$  :(sp :farray) =>Side;

    export const sprite__pos_y$  :(sp :farray) =>Side;

    export const sprite__size_x$ :(sp :farray) =>Side;

    export const sprite__size_y$ :(sp :farray) =>Side;

    export const sprite__width$  :(sp :farray) =>Side;

    export const sprite__height$ :(sp :farray) =>Side;

    /**
     * Установить новую текстуру для спрайта
     * @param sp спрайт
     * @param tt идентификатор текстуры
     * @param offs смещение в массиве текстур относительно данного идентификатора
     * @returns {Float32Array}
     */
    export function sprite_texture(sp :farray, tt :str|ITexture, offs? :int) :farray;

    /**
     * Установить спрайт по абсолютным координатам
     * @param sp спрайт
     * @param x координата
     * @param y координата
     * @param align точка отсчета
     * @returns {Float32Array}
     */
    export function sprite_pos(sp :farray, x :pixels, y :pixels, align? :ALIGNS) :farray;

    /**
     * Установить спрайт по абсолютным координатам
     * @param sp спрайт
     * @param x координата
     * @param y координата
     * @param align точка отсчета
     * @returns {Float32Array}
     */
    export function sprite_pos$(sp :farray, x :Side, y :Side, align? :ALIGNS) :farray;

    /**
     * Установить спрайт по абсолютным координатам
     * @param sp спрайт
     * @param x координата
     * @param align точка отсчета
     * @returns {Float32Array}
     */
    export function sprite_pos_x(sp :farray, x :pixels, align? :ALIGNS) :farray;

    /**
     * Установить спрайт по абсолютным координатам
     * @param sp спрайт
     * @param x координата
     * @param align точка отсчета
     * @returns {Float32Array}
     */
    export function sprite_pos_x$(sp :farray, x :Side, align? :ALIGNS) :farray;

    /**
     * Установить спрайт по абсолютным координатам
     * @param sp спрайт
     * @param y координата
     * @param align точка отсчета
     * @returns {Float32Array}
     */
    export function sprite_pos_y(sp :farray, y :pixels, align? :ALIGNS) :farray;

    /**
     * Установить спрайт по абсолютным координатам
     * @param sp спрайт
     * @param y координата
     * @param align точка отсчета
     * @returns {Float32Array}
     */
    export function sprite_pos_y$(sp :farray, y :Side, align? :ALIGNS) :farray;

    /**
     * Установить размер спрайта
     * @param sp спрайт
     * @param w ширина в пикселах
     * @param h высота в пикселах
     * @returns {Float32Array}
     */
    export function sprite_size(sp :farray, w :pixels, h :pixels) :farray;

    /**
     * Установить размер спрайта
     * @param sp спрайт
     * @param w ширина в SIDE единицах
     * @param h высота в SIDE единицах
     * @returns {Float32Array}
     */
    export function sprite_size$(sp :farray, w :Side, h :Side) :farray;

    /**
     * Переместить спрайт
     * @param sp спрайт
     * @param dx смещение по х
     * @param dy смещение по y
     * @return {Float32Array|void}
     */
    export function sprite_move(sp :farray, dx :pixels, dy :pixels) :farray;

    /**
     * Переместить спрайт
     * @param sp спрайт
     * @param dx смещение по х
     * @param dy смещение по y
     * @return {Float32Array|void}
     */
    export function sprite_move$(sp :farray, dx :Side, dy :Side) :farray;

    /**
     * Переместить спрайт
     * @param sp спрайт
     * @param dx смещение по х
     * @return {Float32Array|void}
     */
    export function sprite_move_x(sp :farray, dx :pixels) :farray;

    /**
     * Переместить спрайт
     * @param sp спрайт
     * @param dx смещение по х
     * @return {Float32Array|void}
     */
    export function sprite_move_x$(sp :farray, dx :Side) :farray;

    /**
     * Переместить спрайт
     * @param sp спрайт
     * @param dy смещение по y
     * @return {Float32Array|void}
     */
    export function sprite_move_y(sp :farray, dy :pixels) :farray;

    /**
     * Переместить спрайт
     * @param sp спрайт
     * @param dy смещение по y
     * @return {Float32Array|void}
     */
    export function sprite_move_y$(sp :farray, dy :Side) :farray;

    /**
     * Установить масштаб спрайта.
     * @param sp спрайт
     * @param sx масштаб по х
     * @param sy масштаб по y (если не определен, берется sx)
     * @returns {Float32Array}
     */
    export function sprite_scale(sp :farray, sx :float, sy? :float) :farray;

    /**
     * Изменить масштаб спрайта.
     * @param sp спрайт
     * @param dsx изменение масштаба по x
     * @param dsy изменение масштаба по y (если не установлен, то берется dsx)
     * @returns {Float32Array}
     */
    export function sprite_scaling(sp :farray, dsx :float, dsy? :float) :farray;

    /**
     * Установить угол спрайта
     * @param sp спрайт
     * @param ang угол
     * @returns {Float32Array}
     */
    export function sprite_angle(sp :farray, ang :degrees) :farray;

    /**
     * Вращать спрайт
     * @param sp спрайт
     * @param dang угол приращения
     * @returns {Float32Array}
     */
    export function sprite_rotate(sp :farray, dang :degrees) :farray;

    /**
     * Установить альфу.
     * @param sp спрайт
     * @param val значение альфы
     * @returns {Float32Array}
     */
    export function sprite_alpha(sp :farray, val :float) :farray;

    /**
     * Установить красную составляющую цвета.
     * @param sp спрайт
     * @param val значение
     * @returns {Float32Array}
     */
    export function sprite_color_r(sp :farray, val :float) :farray;

    /**
     * Установить зеленую составляющую цвета.
     * @param sp спрайт
     * @param val значение
     * @returns {Float32Array}
     */
    export function sprite_color_g(sp :farray, val :float) :farray;

    /**
     * Установить синюю составляющую цвета.
     * @param sp спрайт
     * @param val значение
     * @returns {Float32Array}
     */
    export function sprite_color_b(sp :farray, val :float) :farray;

    /**
     * Установить цвет.
     * @param sp спрайт
     * @param val цвет в формате rgb
     * @param alpha альфа
     * @returns {Float32Array}
     */
    export function sprite_color(sp :farray, val :rgb, alpha? :float) :farray;

    /**
     * Установить пивот спрайта
     * @param sp спрайт
     * @param px пивот по ширине
     * @param py пивот по высоте
     * @returns {Float32Array}
     */
    export function sprite_pivot(sp :farray, px :Width, py :Height) :farray;

    /**
     * Установить тип спрайта
     * @param sp спрайт
     * @param type тип
     * @return {Float32Array}
     */
    export function sprite_type_set(sp :farray, type :ST) :farray;

    /**
     * Сбросить тип спрайта
     * @param sp спрайт
     * @param type тип
     * @return {Float32Array}
     */
    export function sprite_type_clear(sp :farray, type :ST) :farray;

    /**
     * Проверка является спрайт определенного типа
     * @param sp спрайт
     * @param type тип
     * @return {boolean}
     */
    export const is_sprite_type :(sp :farray, type :ST) =>bool;

    /**
     * Проверка на наличие точки внутри спрайта.
     * @param sp спрайт
     * @param x координата
     * @param y координата
     * @return {boolean}
     */
    export function sprite_point_in(sp :farray, x :pixels, y :pixels) :bool;

    /**
     * Нарисовать спрайт
     * @param sp спрайт
     */
    export function sprite_draw(sp :farray) :void;

    /**
     * Нарисовать спрайт
     * @param tt идентификатор текстуры
     * @param xx координата в пикселах
     * @param yy координата в пикселах
     * @param ww ширина в пикселах (0 - взять из текстуры)
     * @param hh высота в пикселах (0 - взять из текстуры)
     * @param sx масштаб
     * @param sy масштаб
     * @param rr вращение в градусах
     * @param px пивот относительно ширины (0..1)
     * @param py пивот относительно высоты (0..1)
     * @param cr красная составляющая цвета
     * @param cg зеленая составляющая цвета
     * @param cb синяя составляющая цвета
     * @param ca альфа составляющая цвета
     */
    export function sprite_draw(tt :str|ITexture|farray, xx :pixels, yy :pixels, ww? :pixels, hh? :pixels,
                                sx? :float, sy? :float, rr? :degrees,
                                px? :float, py? :float,
                                cr? :float, cg? :float, cb? :float, ca? :float) :void;

    export function sprite_draw(tt :str|ITexture|farray, xx? :pixels, yy? :pixels, ww? :pixels, hh? :pixels,
                                sx? :float, sy? :float, rr? :degrees,
                                px? :float, py? :float,
                                cr? :float, cg? :float, cb? :float, ca? :float) :void;

    /**
     * Твин спрайта
     * @param sp спрайт
     * @param func функция изменения значения спрайта
     * @param sv начальное значение твина
     * @param ev конечное значение твина
     * @param rmodule округление
     * @param time время (< 0 в тиках)
     * @param transition функция транзиции
     * @param {=}delay время задержки (< 0 в тиках)
     * @param {=}sf функция, срабатываемая при запуске твина
     * @param {=}ef функция, срабатываемая при окончании твина
     * @return {Float32Array}
     */
    export function sprite_tween(sp :farray, func :(sp :farray, val :float) =>void, sv :float, ev :float, rmodule :int, time :double|int, transition :TweenTransition,
                                 delay? :float|int, sf? :(obj :any) =>void, ef? :(obj :any) =>void) :farray;

    /**
     * Твин позиции
     * @param sp спрайт
     * @param sx начальная координата х
     * @param ex конечная координата x
     * @param sy начальная координата y
     * @param ey конечная координата y
     * @param rmodule округление
     * @param time время (< 0 в тиках)
     * @param transition функция транзиции
     * @param {=}delay время задержки (< 0 в тиках)
     * @param {=}sf функция, срабатываемая при запуске твина
     * @param {=}ef функция, срабатываемая при окончании твина
     * @return {Float32Array}
     */
    export function sprite_tpos(sp :farray, sx :pixels, ex :pixels, sy :pixels, ey :pixels, rmodule :int, time :double|int, transition :TweenTransition,
                                delay? :float|int, sf? :(obj :any) =>void, ef? :(obj :any) =>void) :farray;

    /**
     * Твин угла
     * @param sp спрайт
     * @param sv начальный угол
     * @param ev конечный угол
     * @param rmodule округление
     * @param time время (< 0 в тиках)
     * @param transition функция транзиции
     * @param {=}delay время задержки (< 0 в тиках)
     * @param {=}sf функция, срабатываемая при запуске твина
     * @param {=}ef функция, срабатываемая при окончании твина
     * @return {Float32Array}
     */
    export function sprite_tangle(sp :farray, sv :degrees, ev :degrees, rmodule :int, time :double|int, transition :TweenTransition,
                                  delay? :float|int, sf? :(obj :any) =>void, ef? :(obj :any) =>void) :farray;

    /**
     * Твин цвета
     * @param sp спрайт
     * @param sv начальный цвет
     * @param ev конечный цвет
     * @param time время (< 0 в тиках)
     * @param transition функция транзиции
     * @param {=}delay время задержки (< 0 в тиках)
     * @param {=}sf функция, срабатываемая при запуске твина
     * @param {=}ef функция, срабатываемая при окончании твина
     * @return {Float32Array}
     */
    export function sprite_tcolor(sp :farray, sv :rgb, ev :rgb, time :double|int, transition :TweenTransition,
                                  delay? :float|int, sf? :(obj :any) =>void, ef? :(obj :any) =>void) :farray;

    /**
     * Твин альфы
     * @param sp спрайт
     * @param sv начальная альфа
     * @param ev конечная альфа
     * @param time время (< 0 в тиках)
     * @param transition функция транзиции
     * @param {=}delay время задержки (< 0 в тиках)
     * @param {=}sf функция, срабатываемая при запуске твина
     * @param {=}ef функция, срабатываемая при окончании твина
     * @return {Float32Array}
     */
    export function sprite_talpha(sp :farray, sv :float, ev :float, time :double|int, transition :TweenTransition,
                                  delay? :float|int, sf? :(obj :any) =>void, ef? :(obj :any) =>void) :farray;

    /**
     * Твин масштаба
     * @param sp спрайт
     * @param sv начальный масштаб
     * @param ev конечный масштаб
     * @param time время (< 0 в тиках)
     * @param transition функция транзиции
     * @param {=}delay время задержки (< 0 в тиках)
     * @param {=}sf функция, срабатываемая при запуске твина
     * @param {=}ef функция, срабатываемая при окончании твина
     * @return {Float32Array}
     */
    export function sprite_tscale(sp :farray, sv :float, ev :float, time :double|int, transition :TweenTransition,
                                  delay? :float|int, sf? :(obj :any) =>void, ef? :(obj :any) =>void) :farray;

    /**
     * Установить значения спрайтов
     * @param sp спрайты
     * @param func функция обработки спрайтов
     * @returns {Array}
     */
    export function sprites_func(sp :farray[], func :(s :farray) =>void) :farray[];

    /**
     * Установить спрайты по абсолютным координатам
     * @param sp спрайт
     * @param x координата
     * @param y координата
     * @param align точка отсчета
     * @returns {Float32Array}
     */
    export function sprites_pos(sp :farray[], x :pixels, y :pixels, align? :ALIGNS) :farray[];

    /**
     * Установить альфу.
     * @param sp спрайты
     * @param alpha значение альфы
     * @returns {Array}
     */
    export function sprites_alpha(sp :farray[], alpha :float) :farray[];

    /**
     * Установить цвет спрайтов.
     * @param sp спрайт
     * @param color цвет в формате rgb
     * @param alpha альфа
     * @returns {Array}
     */
    export function sprites_color(sp :farray[], color :rgb, alpha? :float) :farray[];

    /**
     * Нарисовать спрайты
     * @param sp спрайты
     */
    export function sprites_draw(sp :farray[]) :void;

    /**
     * Удалить массив спрайтов
     * @param sps массив спрайтов
     * @return {Float32Array|void}
     */
    export function sprites_destroy(sps :farray[]) :farray[];

    /**
     * Твин цвета
     * @param sp спрайты
     * @param sv начальный цвет
     * @param ev конечный цвет
     * @param time время (< 0 в тиках)
     * @param transition функция транзиции
     * @param {=}delay время задержки (< 0 в тиках)
     * @param {=}sf функция, срабатываемая при запуске твина
     * @param {=}ef функция, срабатываемая при окончании твина
     * @return {Float32Array}
     */
    export function sprites_tcolor(sp :farray[], sv :rgb, ev :rgb, time :double|int, transition :TweenTransition,
                                   delay? :float|int, sf? :(obj :any) =>void, ef? :(obj :any) =>void) :farray[];

    /**
     * Твин альфы
     * @param sp спрайты
     * @param sv начальная альфа
     * @param ev конечная альфа
     * @param time время (< 0 в тиках)
     * @param transition функция транзиции
     * @param {=}delay время задержки (< 0 в тиках)
     * @param {=}sf функция, срабатываемая при запуске твина
     * @param {=}ef функция, срабатываемая при окончании твина
     * @return {Float32Array}
     */
    export function sprites_talpha(sp :farray[], sv :float, ev :float, time :double|int, transition :TweenTransition,
                                   delay? :float|int, sf? :(obj :any) =>void, ef? :(obj :any) =>void) :farray[];

    /**
     * Создать спрайты в виде счетчика. Счетчик изначально отформатирован
     * по правому нижнему углу базовой линии шрифта и идут справа налево.
     * Значение счетчика находится в [1][SP.aa], индекс базовой текстуры в [0][SP.aa].
     * @param cid индекс 0 в текстуре созданной по $$abc_symbols("0123456789, %")
     * @param digits количество цифр в счетчике
     * @return {Array}
     */
    export function scounter_create(cid :str, digits :int) :farray[];

    /**
     * Создать спрайты в виде счетчика. Счетчик изначально отформатирован
     * по правому нижнему углу базовой линии шрифта и идут справа налево.
     * Значение счетчика находится в [1][SP.aa], индекс базовой текстуры в [0][SP.aa].
     * @param cn счетчик
     * @param cid индекс 0 в текстуре созданной по $$abc_symbols("0123456789, %")
     * @return {Array}
     */
    export function scounter_init(cn :farray[], cid :str) :farray[];

    /**
     * Значение счетчика.
     * @param cn счетчик
     * @param val значение
     * @return {Float32Array}
     */
    export let scounter_val :(cn :farray[], val :int) =>farray[];

    /**
     * Значение счетчика.
     * @param cn счетчик
     * @return {number}
     */
    export let scounter__val :(cn :farray[]) =>int;

    /**
     * Установить позицию правого нижнего угла базовой лини счетчика
     * @param cn счетчик
     * @param xx координата
     * @param yy координата
     * @param ending выводить конечный символ
     * @return {Array}
     */
    export function scounter_pos(cn :farray[], xx :pixels, yy :pixels, ending? :bool) :farray[];

    /**
     * Выровнять значащие символы счетчика относительно заданной точки.
     * @param cn счетчик
     * @param ending вывод конечного символа (например %)
     * @param xx точка относительно которой производится выравнивание
     * @param yy точка относительно которой производится выравнивание
     * @param align выравнивание
     */
    export function scounter_align(cn :farray[], ending :bool, xx :pixels, yy :pixels, align :ALIGNS) :void;


    //// js/__/web/app.ts


    /**
     * Регистрация базовой функции формирования графических ресурсов.
     * @param func функция формирования графических ресурсов
     */
    export const app_graphics :(func :() =>void) =>void;

    /**
     * Регистрация базовой функции инициализации.
     * @param func функция инициализации
     */
    export const app_init :(func :() =>void) =>void;

    /**
     * Регистрация базовой функции изменения размеров контейнера канваса.
     * @param func функция формирования графических ресурсов
     */
    export const app_resize :(func :() =>void) =>void;

    /**
     * Регистрация базовой функции фреймовой анимации.
     * @param func функция формирования графических ресурсов
     */
    export const app_update :(func :() =>void) =>void;

    /**
     * Регистрация базовой функции обработки тачей.
     * @param func функция формирования графических ресурсов
     */
    export const app_touches :(func :bfunc) =>void;

    /**
     * Регистрация базовой функции обработки мышки.
     * @param func функция формирования графических ресурсов
     */
    export const app_mouse :(func :bfunc) =>void;

    /**
     * Регистрация базовой функции рисования на канвас.
     * @param func функция формирования графических ресурсов
     */
    export const app_draw :(func :() =>void) =>void;

    /**
     * Регистрация базовой функции глобальных сообщений.
     * @param func функция формирования графических ресурсов
     */
    export const app_events :(func :(event :any) =>bool) =>void;


    //// js/__/utils/stats.ts

}

