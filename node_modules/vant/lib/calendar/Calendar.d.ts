import { PropType } from 'vue';
import { isDate } from '../utils';
import { PopupPosition } from '../popup';
import { CalendarType } from './CalendarMonth';
import type { CalendarDayItem } from './CalendarDay';
declare const _default: import("vue").DefineComponent<{
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
    teleport: PropType<string | import("vue").RendererElement | null | undefined>;
    showMark: {
        type: BooleanConstructor;
        default: true;
    };
    showTitle: {
        type: BooleanConstructor;
        default: true;
    };
    formatter: PropType<(item: CalendarDayItem) => CalendarDayItem>;
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
        type: PropType<CalendarType>;
        default: string;
    };
    position: {
        type: PropType<PopupPosition>;
        default: string;
    };
    maxRange: {
        type: (NumberConstructor | StringConstructor)[];
        default: null;
    };
    minDate: {
        type: DateConstructor;
        validator: typeof isDate;
        default: () => Date;
    };
    maxDate: {
        type: DateConstructor;
        validator: typeof isDate;
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
    type: CalendarType;
    show: boolean;
    lazyRender: boolean;
    closeOnClickOverlay: boolean;
    closeOnPopstate: boolean;
    position: PopupPosition;
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
    formatter?: ((item: CalendarDayItem) => CalendarDayItem) | undefined;
    rowHeight?: string | number | undefined;
    confirmText?: string | undefined;
    rangePrompt?: string | undefined;
    confirmDisabledText?: string | undefined;
}>, {
    safeAreaInsetBottom: boolean;
    round: boolean;
    type: CalendarType;
    show: boolean;
    lazyRender: boolean;
    closeOnClickOverlay: boolean;
    closeOnPopstate: boolean;
    position: PopupPosition;
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
}>;
export default _default;
