declare const PullRefresh: import("../utils").WithInstall<import("vue").DefineComponent<{
    disabled: BooleanConstructor;
    successText: StringConstructor;
    pullingText: StringConstructor;
    loosingText: StringConstructor;
    loadingText: StringConstructor;
    pullDistance: (NumberConstructor | StringConstructor)[];
    modelValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    successDuration: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    animationDuration: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    headHeight: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "refresh")[], "update:modelValue" | "refresh", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    disabled: boolean;
    animationDuration: string | number;
    modelValue: boolean;
    successDuration: string | number;
    headHeight: string | number;
} & {
    loadingText?: string | undefined;
    successText?: string | undefined;
    pullingText?: string | undefined;
    loosingText?: string | undefined;
    pullDistance?: string | number | undefined;
}>, {
    disabled: boolean;
    animationDuration: string | number;
    modelValue: boolean;
    successDuration: string | number;
    headHeight: string | number;
}>>;
export default PullRefresh;
export { PullRefresh };
