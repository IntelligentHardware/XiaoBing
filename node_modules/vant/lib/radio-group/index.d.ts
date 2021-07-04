declare const RadioGroup: import("../utils").WithInstall<import("vue").DefineComponent<{
    disabled: BooleanConstructor;
    iconSize: (NumberConstructor | StringConstructor)[];
    direction: StringConstructor;
    modelValue: import("vue").PropType<unknown>;
    checkedColor: StringConstructor;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "update:modelValue")[], "change" | "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    disabled: boolean;
} & {
    modelValue?: unknown;
    iconSize?: string | number | undefined;
    checkedColor?: string | undefined;
    direction?: string | undefined;
}>, {
    disabled: boolean;
}>>;
export default RadioGroup;
export { RadioGroup };
