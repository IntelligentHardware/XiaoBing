import { PropType, ExtractPropTypes } from 'vue';
declare function genAlphabet(): string[];
export declare const INDEX_BAR_KEY: unique symbol;
declare const props: {
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
        type: PropType<string[]>;
        default: typeof genAlphabet;
    };
};
export declare type IndexBarProvide = {
    props: ExtractPropTypes<typeof props>;
};
declare const _default: import("vue").DefineComponent<{
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
        type: PropType<string[]>;
        default: typeof genAlphabet;
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
}>;
export default _default;
