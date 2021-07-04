declare const _default: import("vue").DefineComponent<{
    size: (NumberConstructor | StringConstructor)[];
    color: StringConstructor;
    gutter: (NumberConstructor | StringConstructor)[];
    readonly: BooleanConstructor;
    disabled: BooleanConstructor;
    allowHalf: BooleanConstructor;
    voidColor: StringConstructor;
    touchable: {
        type: BooleanConstructor;
        default: true;
    };
    iconPrefix: StringConstructor;
    disabledColor: StringConstructor;
    modelValue: {
        type: NumberConstructor;
        default: number;
    };
    icon: {
        type: StringConstructor;
        default: string;
    };
    voidIcon: {
        type: StringConstructor;
        default: string;
    };
    count: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "update:modelValue")[], "change" | "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    icon: string;
    disabled: boolean;
    readonly: boolean;
    modelValue: number;
    touchable: boolean;
    count: string | number;
    allowHalf: boolean;
    voidIcon: string;
} & {
    color?: string | undefined;
    size?: string | number | undefined;
    iconPrefix?: string | undefined;
    gutter?: string | number | undefined;
    voidColor?: string | undefined;
    disabledColor?: string | undefined;
}>, {
    icon: string;
    disabled: boolean;
    readonly: boolean;
    modelValue: number;
    touchable: boolean;
    count: string | number;
    allowHalf: boolean;
    voidIcon: string;
}>;
export default _default;
