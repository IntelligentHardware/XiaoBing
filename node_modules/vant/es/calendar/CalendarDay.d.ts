import { PropType } from 'vue';
export declare type CalendarDayType = '' | 'start' | 'start-end' | 'middle' | 'end' | 'selected' | 'multiple-middle' | 'multiple-selected' | 'disabled' | 'placeholder';
export declare type CalendarDayItem = {
    date?: Date;
    text?: string | number;
    type?: CalendarDayType;
    topInfo?: string;
    className?: unknown;
    bottomInfo?: string;
};
declare const _default: import("vue").DefineComponent<{
    color: StringConstructor;
    index: NumberConstructor;
    rowHeight: StringConstructor;
    offset: {
        type: NumberConstructor;
        default: number;
    };
    item: {
        type: PropType<CalendarDayItem>;
        required: true;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], "click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    offset: number;
    item: CalendarDayItem;
} & {
    color?: string | undefined;
    index?: number | undefined;
    rowHeight?: string | undefined;
}>, {
    offset: number;
}>;
export default _default;
