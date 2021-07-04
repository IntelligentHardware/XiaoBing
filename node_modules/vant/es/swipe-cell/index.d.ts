declare const SwipeCell: import("../utils").WithInstall<import("vue").DefineComponent<{
    disabled: BooleanConstructor;
    leftWidth: (NumberConstructor | StringConstructor)[];
    rightWidth: (NumberConstructor | StringConstructor)[];
    beforeClose: import("vue").PropType<import("../utils/interceptor").Interceptor>;
    stopPropagation: BooleanConstructor;
    name: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("open" | "click" | "close")[], "open" | "click" | "close", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    name: string | number;
    disabled: boolean;
    stopPropagation: boolean;
} & {
    beforeClose?: import("../utils/interceptor").Interceptor | undefined;
    leftWidth?: string | number | undefined;
    rightWidth?: string | number | undefined;
}>, {
    name: string | number;
    disabled: boolean;
    stopPropagation: boolean;
}>>;
export default SwipeCell;
export { SwipeCell };
