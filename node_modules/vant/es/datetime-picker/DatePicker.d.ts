import { PropType } from 'vue';
import { isDate } from '../utils';
import { ColumnType, DatetimePickerType } from './utils';
declare const _default: import("vue").DefineComponent<{
    title: StringConstructor;
    loading: BooleanConstructor;
    readonly: BooleanConstructor;
    allowHtml: BooleanConstructor;
    showToolbar: {
        type: BooleanConstructor;
        default: true;
    };
    cancelButtonText: StringConstructor;
    confirmButtonText: StringConstructor;
    itemHeight: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    visibleItemCount: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    swipeDuration: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
} & {
    filter: PropType<(type: string, values: string[]) => string[]>;
    columnsOrder: PropType<ColumnType[]>;
    formatter: {
        type: PropType<(type: string, value: string) => string>;
        default: (type: string, value: string) => string;
    };
} & {
    modelValue: DateConstructor;
    type: {
        type: PropType<DatetimePickerType>;
        default: string;
    };
    minDate: {
        type: DateConstructor;
        default: () => Date;
        validator: typeof isDate;
    };
    maxDate: {
        type: DateConstructor;
        default: () => Date;
        validator: typeof isDate;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("cancel" | "change" | "confirm" | "update:modelValue")[], "cancel" | "change" | "confirm" | "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    loading: boolean;
    type: DatetimePickerType;
    readonly: boolean;
    allowHtml: boolean;
    itemHeight: string | number;
    swipeDuration: string | number;
    visibleItemCount: string | number;
    showToolbar: boolean;
    formatter: (type: string, value: string) => string;
    minDate: Date;
    maxDate: Date;
} & {
    filter?: ((type: string, values: string[]) => string[]) | undefined;
    title?: string | undefined;
    cancelButtonText?: string | undefined;
    confirmButtonText?: string | undefined;
    modelValue?: Date | undefined;
    columnsOrder?: ColumnType[] | undefined;
}>, {
    loading: boolean;
    type: DatetimePickerType;
    readonly: boolean;
    allowHtml: boolean;
    itemHeight: string | number;
    swipeDuration: string | number;
    visibleItemCount: string | number;
    showToolbar: boolean;
    formatter: (type: string, value: string) => string;
    minDate: Date;
    maxDate: Date;
}>;
export default _default;
