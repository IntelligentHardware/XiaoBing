declare const Icon: import("../utils").WithInstall<import("vue").DefineComponent<{
    dot: BooleanConstructor;
    name: StringConstructor;
    size: (NumberConstructor | StringConstructor)[];
    badge: (NumberConstructor | StringConstructor)[];
    color: StringConstructor;
    tag: {
        type: import("vue").PropType<keyof HTMLElementTagNameMap>;
        default: string;
    };
    classPrefix: {
        type: StringConstructor;
        default: import("../utils/create/bem").Mods;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    dot: boolean;
    tag: keyof HTMLElementTagNameMap;
    classPrefix: string;
} & {
    name?: string | undefined;
    badge?: string | number | undefined;
    color?: string | undefined;
    size?: string | number | undefined;
}>, {
    dot: boolean;
    tag: keyof HTMLElementTagNameMap;
    classPrefix: string;
}>>;
export default Icon;
export { Icon };
