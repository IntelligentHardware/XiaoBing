declare const _default: import("vue").DefineComponent<{
    name: import("vue").PropType<unknown>;
    disabled: BooleanConstructor;
    iconSize: (NumberConstructor | StringConstructor)[];
    modelValue: import("vue").PropType<unknown>;
    checkedColor: StringConstructor;
    labelPosition: import("vue").PropType<import("../checkbox/Checker").CheckerLabelPosition>;
    labelDisabled: BooleanConstructor;
    shape: {
        type: import("vue").PropType<import("../checkbox/Checker").CheckerShape>;
        default: string;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    disabled: boolean;
    labelDisabled: boolean;
    shape: import("../checkbox/Checker").CheckerShape;
} & {
    name?: unknown;
    modelValue?: unknown;
    iconSize?: string | number | undefined;
    checkedColor?: string | undefined;
    labelPosition?: import("../checkbox/Checker").CheckerLabelPosition | undefined;
}>, {
    disabled: boolean;
    labelDisabled: boolean;
    shape: import("../checkbox/Checker").CheckerShape;
}>;
export default _default;
