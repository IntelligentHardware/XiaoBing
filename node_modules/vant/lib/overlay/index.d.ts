declare const Overlay: import("../utils").WithInstall<import("vue").DefineComponent<{
    show: BooleanConstructor;
    zIndex: (NumberConstructor | StringConstructor)[];
    duration: (NumberConstructor | StringConstructor)[];
    className: import("vue").PropType<unknown>;
    lockScroll: {
        type: BooleanConstructor;
        default: true;
    };
    customStyle: import("vue").PropType<import("vue").CSSProperties>;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    show: boolean;
    lockScroll: boolean;
} & {
    zIndex?: string | number | undefined;
    duration?: string | number | undefined;
    className?: unknown;
    customStyle?: import("vue").CSSProperties | undefined;
}>, {
    show: boolean;
    lockScroll: boolean;
}>>;
export default Overlay;
export { Overlay };
