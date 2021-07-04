import { PropType } from 'vue';
export declare type SearchShape = 'square' | 'round';
declare const _default: import("vue").DefineComponent<{
    formatter: PropType<(value: string) => string>;
    leftIcon: StringConstructor;
    rightIcon: StringConstructor;
    autofocus: BooleanConstructor;
    clearable: BooleanConstructor;
    maxlength: (NumberConstructor | StringConstructor)[];
    inputAlign: PropType<import("../field").FieldTextAlign>;
    placeholder: StringConstructor;
    errorMessage: StringConstructor;
    error: {
        type: BooleanConstructor;
        default: null;
    };
    disabled: {
        type: BooleanConstructor;
        default: null;
    };
    readonly: {
        type: BooleanConstructor;
        default: null;
    };
    clearIcon: {
        type: StringConstructor;
        default: string;
    };
    modelValue: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    clearTrigger: {
        type: PropType<import("../field").FieldClearTrigger>;
        default: string;
    };
    formatTrigger: {
        type: PropType<import("../field").FieldFormatTrigger>;
        default: string;
    };
} & {
    label: StringConstructor;
    clearable: {
        type: BooleanConstructor;
        default: true;
    };
    actionText: StringConstructor;
    background: StringConstructor;
    showAction: BooleanConstructor;
    shape: {
        type: PropType<SearchShape>;
        default: string;
    };
    leftIcon: {
        type: StringConstructor;
        default: string;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("cancel" | "search" | "update:modelValue")[], "search" | "cancel" | "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    disabled: boolean;
    error: boolean;
    readonly: boolean;
    leftIcon: string;
    autofocus: boolean;
    clearable: boolean;
    clearIcon: string;
    modelValue: string | number;
    clearTrigger: import("../field").FieldClearTrigger;
    formatTrigger: import("../field").FieldFormatTrigger;
    shape: SearchShape;
    showAction: boolean;
} & {
    label?: string | undefined;
    formatter?: ((value: string) => string) | undefined;
    rightIcon?: string | undefined;
    maxlength?: string | number | undefined;
    inputAlign?: import("../field").FieldTextAlign | undefined;
    placeholder?: string | undefined;
    errorMessage?: string | undefined;
    background?: string | undefined;
    actionText?: string | undefined;
}>, {
    disabled: boolean;
    error: boolean;
    readonly: boolean;
    leftIcon: string;
    autofocus: boolean;
    clearable: boolean;
    clearIcon: string;
    modelValue: string | number;
    clearTrigger: import("../field").FieldClearTrigger;
    formatTrigger: import("../field").FieldFormatTrigger;
    shape: SearchShape;
    showAction: boolean;
}>;
export default _default;
