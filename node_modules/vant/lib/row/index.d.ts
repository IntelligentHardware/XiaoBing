declare const Row: import("../utils").WithInstall<import("vue").DefineComponent<{
    wrap: {
        type: BooleanConstructor;
        default: true;
    };
    align: import("vue").PropType<import("./Row").RowAlign>;
    justify: import("vue").PropType<import("./Row").RowJustify>;
    tag: {
        type: import("vue").PropType<keyof HTMLElementTagNameMap>;
        default: string;
    };
    gutter: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    tag: keyof HTMLElementTagNameMap;
    wrap: boolean;
    gutter: string | number;
} & {
    justify?: import("./Row").RowJustify | undefined;
    align?: import("./Row").RowAlign | undefined;
}>, {
    tag: keyof HTMLElementTagNameMap;
    wrap: boolean;
    gutter: string | number;
}>>;
export default Row;
export { Row };
export type { RowAlign, RowJustify } from './Row';
