import { PropType } from 'vue';
export declare const PICKER_KEY: unique symbol;
export declare type PickerObjectOption = {
    text?: string;
    disabled?: boolean;
    [key: string]: any;
};
export declare type PickerOption = string | PickerObjectOption;
export declare type PickerObjectColumn = {
    values?: PickerOption[];
    children?: PickerColumn;
    className?: unknown;
    defaultIndex?: number;
    [key: string]: any;
};
export declare type PickerColumn = PickerOption[] | PickerObjectColumn;
declare const _default: import("vue").DefineComponent<{
    readonly: BooleanConstructor;
    allowHtml: BooleanConstructor;
    className: PropType<unknown>;
    textKey: {
        type: StringConstructor;
        required: true;
    };
    itemHeight: {
        type: NumberConstructor;
        required: true;
    };
    swipeDuration: {
        type: (NumberConstructor | StringConstructor)[];
        required: true;
    };
    visibleItemCount: {
        type: (NumberConstructor | StringConstructor)[];
        required: true;
    };
    defaultIndex: {
        type: NumberConstructor;
        default: number;
    };
    initialOptions: {
        type: PropType<PickerOption[]>;
        default: () => never[];
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "change"[], "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    readonly: boolean;
    allowHtml: boolean;
    textKey: string;
    itemHeight: number;
    swipeDuration: string | number;
    visibleItemCount: string | number;
    defaultIndex: number;
    initialOptions: PickerOption[];
} & {
    className?: unknown;
}>, {
    readonly: boolean;
    allowHtml: boolean;
    defaultIndex: number;
    initialOptions: PickerOption[];
}>;
export default _default;
