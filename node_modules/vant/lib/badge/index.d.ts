declare const Badge: import("../utils").WithInstall<import("vue").DefineComponent<{
    dot: BooleanConstructor;
    max: (NumberConstructor | StringConstructor)[];
    color: StringConstructor;
    offset: import("vue").PropType<[string | number, string | number]>;
    content: (NumberConstructor | StringConstructor)[];
    showZero: {
        type: BooleanConstructor;
        default: true;
    };
    tag: {
        type: import("vue").PropType<keyof HTMLElementTagNameMap>;
        default: string;
    };
}, () => JSX.Element | undefined, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    dot: boolean;
    showZero: boolean;
    tag: keyof HTMLElementTagNameMap;
} & {
    max?: string | number | undefined;
    color?: string | undefined;
    offset?: [string | number, string | number] | undefined;
    content?: string | number | undefined;
}>, {
    dot: boolean;
    showZero: boolean;
    tag: keyof HTMLElementTagNameMap;
}>>;
export default Badge;
export { Badge };
