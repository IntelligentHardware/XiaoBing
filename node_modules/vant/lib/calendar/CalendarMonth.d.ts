import { PropType } from 'vue';
import { CalendarDayItem } from './CalendarDay';
export declare type CalendarType = 'single' | 'range' | 'multiple';
declare const _default: import("vue").DefineComponent<{
    type: PropType<CalendarType>;
    color: StringConstructor;
    showMark: BooleanConstructor;
    rowHeight: (NumberConstructor | StringConstructor)[];
    formatter: PropType<(item: CalendarDayItem) => CalendarDayItem>;
    lazyRender: BooleanConstructor;
    currentDate: PropType<Date | Date[]>;
    allowSameDay: BooleanConstructor;
    showSubtitle: BooleanConstructor;
    showMonthTitle: BooleanConstructor;
    firstDayOfWeek: NumberConstructor;
    date: {
        type: DateConstructor;
        required: true;
    };
    minDate: {
        type: DateConstructor;
        required: true;
    };
    maxDate: {
        type: DateConstructor;
        required: true;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("click" | "update-height")[], "click" | "update-height", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    lazyRender: boolean;
    date: Date;
    showMark: boolean;
    allowSameDay: boolean;
    showSubtitle: boolean;
    showMonthTitle: boolean;
    minDate: Date;
    maxDate: Date;
} & {
    color?: string | undefined;
    type?: CalendarType | undefined;
    formatter?: ((item: CalendarDayItem) => CalendarDayItem) | undefined;
    rowHeight?: string | number | undefined;
    currentDate?: Date | Date[] | ((Date | Date[]) & object) | undefined;
    firstDayOfWeek?: number | undefined;
}>, {
    lazyRender: boolean;
    showMark: boolean;
    allowSameDay: boolean;
    showSubtitle: boolean;
    showMonthTitle: boolean;
}>;
export default _default;
