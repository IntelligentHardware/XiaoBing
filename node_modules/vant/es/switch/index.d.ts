declare const Switch: import("../utils").WithInstall<import("vue").DefineComponent<{
    size: (NumberConstructor | StringConstructor)[];
    loading: BooleanConstructor;
    disabled: BooleanConstructor;
    modelValue: import("vue").PropType<unknown>;
    activeColor: StringConstructor;
    inactiveColor: StringConstructor;
    activeValue: {
        type: import("vue").PropType<unknown>;
        default: unknown;
    };
    inactiveValue: {
        type: import("vue").PropType<unknown>;
        default: unknown;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "update:modelValue")[], "change" | "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    loading: boolean;
    disabled: boolean;
    activeValue: unknown;
    inactiveValue: unknown;
} & {
    size?: string | number | undefined;
    modelValue?: unknown;
    activeColor?: string | undefined;
    inactiveColor?: string | undefined;
}>, {
    loading: boolean;
    disabled: boolean;
    activeValue: unknown;
    inactiveValue: unknown;
}>>;
export default Switch;
export { Switch };
