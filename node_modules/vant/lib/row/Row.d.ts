import { PropType, ComputedRef } from 'vue';
export declare const ROW_KEY: unique symbol;
export declare type RowSpaces = {
    left?: number;
    right: number;
}[];
export declare type RowProvide = {
    spaces: ComputedRef<RowSpaces>;
};
export declare type RowAlign = 'top' | 'center' | 'bottom';
export declare type RowJustify = 'start' | 'end' | 'center' | 'space-around' | 'space-between';
declare const _default: import("vue").DefineComponent<{
    wrap: {
        type: BooleanConstructor;
        default: true;
    };
    align: PropType<RowAlign>;
    justify: PropType<RowJustify>;
    tag: {
        type: PropType<keyof HTMLElementTagNameMap>;
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
    justify?: RowJustify | undefined;
    align?: RowAlign | undefined;
}>, {
    tag: keyof HTMLElementTagNameMap;
    wrap: boolean;
    gutter: string | number;
}>;
export default _default;
