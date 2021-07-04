declare const Search: import("../utils").WithInstall<import("vue").DefineComponent<{
    formatter: import("vue").PropType<(value: string) => string>;
    leftIcon: StringConstructor;
    rightIcon: StringConstructor;
    autofocus: BooleanConstructor;
    clearable: BooleanConstructor;
    maxlength: (NumberConstructor | StringConstructor)[];
    inputAlign: import("vue").PropType<import("..").FieldTextAlign>;
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
        type: import("vue").PropType<import("..").FieldClearTrigger>;
        default: string;
    };
    formatTrigger: {
        type: import("vue").PropType<import("..").FieldFormatTrigger>;
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
        type: import("vue").PropType<import("./Search").SearchShape>;
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
    clearTrigger: import("..").FieldClearTrigger;
    formatTrigger: import("..").FieldFormatTrigger;
    shape: import("./Search").SearchShape;
    showAction: boolean;
} & {
    label?: string | undefined;
    formatter?: ((value: string) => string) | undefined;
    rightIcon?: string | undefined;
    maxlength?: string | number | undefined;
    inputAlign?: import("..").FieldTextAlign | undefined;
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
    clearTrigger: import("..").FieldClearTrigger;
    formatTrigger: import("..").FieldFormatTrigger;
    shape: import("./Search").SearchShape;
    showAction: boolean;
}>>;
export default Search;
export { Search };
export type { SearchShape } from './Search';
