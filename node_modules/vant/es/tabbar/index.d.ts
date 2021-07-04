declare const Tabbar: import("../utils").WithInstall<import("vue").DefineComponent<{
    route: BooleanConstructor;
    fixed: {
        type: BooleanConstructor;
        default: true;
    };
    border: {
        type: BooleanConstructor;
        default: true;
    };
    zIndex: (NumberConstructor | StringConstructor)[];
    placeholder: BooleanConstructor;
    activeColor: StringConstructor;
    beforeChange: import("vue").PropType<import("../utils/interceptor").Interceptor>;
    inactiveColor: StringConstructor;
    modelValue: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    safeAreaInsetBottom: {
        type: import("vue").PropType<boolean | null>;
        default: null;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "update:modelValue")[], "change" | "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    fixed: boolean;
    safeAreaInsetBottom: boolean | null;
    border: boolean;
    placeholder: boolean;
    modelValue: string | number;
    route: boolean;
} & {
    zIndex?: string | number | undefined;
    activeColor?: string | undefined;
    inactiveColor?: string | undefined;
    beforeChange?: import("../utils/interceptor").Interceptor | undefined;
}>, {
    fixed: boolean;
    safeAreaInsetBottom: boolean | null;
    border: boolean;
    placeholder: boolean;
    modelValue: string | number;
    route: boolean;
}>>;
export default Tabbar;
export { Tabbar };
