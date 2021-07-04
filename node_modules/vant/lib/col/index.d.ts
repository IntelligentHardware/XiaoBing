declare const Col: import("../utils").WithInstall<import("vue").DefineComponent<{
    offset: (NumberConstructor | StringConstructor)[];
    tag: {
        type: import("vue").PropType<keyof HTMLElementTagNameMap>;
        default: string;
    };
    span: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    span: string | number;
    tag: keyof HTMLElementTagNameMap;
} & {
    offset?: string | number | undefined;
}>, {
    span: string | number;
    tag: keyof HTMLElementTagNameMap;
}>>;
export default Col;
export { Col };
