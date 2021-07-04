declare const IndexBar: import("../utils").WithInstall<import("vue").DefineComponent<{
    sticky: {
        type: BooleanConstructor;
        default: true;
    };
    zIndex: (NumberConstructor | StringConstructor)[];
    highlightColor: StringConstructor;
    stickyOffsetTop: {
        type: NumberConstructor;
        default: number;
    };
    indexList: {
        type: import("vue").PropType<string[]>;
        default: () => string[];
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("select" | "change")[], "select" | "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    sticky: boolean;
    stickyOffsetTop: number;
    indexList: string[];
} & {
    zIndex?: string | number | undefined;
    highlightColor?: string | undefined;
}>, {
    sticky: boolean;
    stickyOffsetTop: number;
    indexList: string[];
}>>;
export default IndexBar;
export { IndexBar };
