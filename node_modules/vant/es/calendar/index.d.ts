declare const Calendar: import("../utils").WithInstall<import("vue").DefineComponent<{
    show: BooleanConstructor;
    title: StringConstructor;
    color: StringConstructor;
    round: {
        type: BooleanConstructor;
        default: true;
    };
    readonly: BooleanConstructor;
    poppable: {
        type: BooleanConstructor;
        default: true;
    };
    teleport: import("vue").PropType<string | import("vue").RendererElement | null | undefined>;
    showMark: {
        type: BooleanConstructor;
        default: true;
    };
    showTitle: {
        type: BooleanConstructor;
        default: true;
    };
    formatter: import("vue").PropType<(item: import("./CalendarDay").CalendarDayItem) => import("./CalendarDay").CalendarDayItem>;
    rowHeight: (NumberConstructor | StringConstructor)[];
    confirmText: StringConstructor;
    rangePrompt: StringConstructor;
    lazyRender: {
        type: BooleanConstructor;
        default: true;
    };
    showConfirm: {
        type: BooleanConstructor;
        default: true;
    };
    defaultDate: any;
    allowSameDay: BooleanConstructor;
    showSubtitle: {
        type: BooleanConstructor;
        default: true;
    };
    closeOnPopstate: {
        type: BooleanConstructor;
        default: true;
    };
    confirmDisabledText: StringConstructor;
    closeOnClickOverlay: {
        type: BooleanConstructor;
        default: true;
    };
    safeAreaInsetBottom: {
        type: BooleanConstructor;
        default: true;
    };
    type: {
        type: import("vue").PropType<import("./CalendarMonth").CalendarType>;
        default: string;
    };
    position: {
        type: import("vue").PropType<import("..").PopupPosition>;
        default: string;
    };
    maxRange: {
        type: (NumberConstructor | StringConstructor)[];
        default: null;
    };
    minDate: {
        type: DateConstructor;
        validator: typeof import("../utils").isDate;
        default: () => Date;
    };
    maxDate: {
        type: DateConstructor;
        validator: typeof import("../utils").isDate;
        default: () => Date;
    };
    firstDayOfWeek: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
        validator: (val: number) => boolean;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("select" | "update:show" | "confirm" | "unselect" | "month-show")[], "select" | "update:show" | "confirm" | "unselect" | "month-show", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    safeAreaInsetBottom: boolean;
    round: boolean;
    type: import("./CalendarMonth").CalendarType;
    show: boolean;
    lazyRender: boolean;
    closeOnClickOverlay: boolean;
    closeOnPopstate: boolean;
    position: import("..").PopupPosition;
    readonly: boolean;
    showMark: boolean;
    allowSameDay: boolean;
    showSubtitle: boolean;
    firstDayOfWeek: string | number;
    minDate: Date;
    maxDate: Date;
    showTitle: boolean;
    poppable: boolean;
    showConfirm: boolean;
    defaultDate: any;
    maxRange: string | number;
} & {
    title?: string | undefined;
    color?: string | undefined;
    teleport?: string | import("vue").RendererElement | null | undefined;
    formatter?: ((item: import("./CalendarDay").CalendarDayItem) => import("./CalendarDay").CalendarDayItem) | undefined;
    rowHeight?: string | number | undefined;
    confirmText?: string | undefined;
    rangePrompt?: string | undefined;
    confirmDisabledText?: string | undefined;
}>, {
    safeAreaInsetBottom: boolean;
    round: boolean;
    type: import("./CalendarMonth").CalendarType;
    show: boolean;
    lazyRender: boolean;
    closeOnClickOverlay: boolean;
    closeOnPopstate: boolean;
    position: import("..").PopupPosition;
    readonly: boolean;
    showMark: boolean;
    allowSameDay: boolean;
    showSubtitle: boolean;
    firstDayOfWeek: string | number;
    minDate: Date;
    maxDate: Date;
    showTitle: boolean;
    poppable: boolean;
    showConfirm: boolean;
    defaultDate: any;
    maxRange: string | number;
}>>;
export default Calendar;
export { Calendar };
export type { CalendarType } from './CalendarMonth';
export type { CalendarDayItem, CalendarDayType } from './CalendarDay';
