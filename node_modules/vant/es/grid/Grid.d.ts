import { PropType, ExtractPropTypes } from 'vue';
export declare const GRID_KEY: unique symbol;
export declare type GridDirection = 'horizontal' | 'vertical';
declare const props: {
    square: BooleanConstructor;
    center: {
        type: BooleanConstructor;
        default: true;
    };
    border: {
        type: BooleanConstructor;
        default: true;
    };
    gutter: (NumberConstructor | StringConstructor)[];
    iconSize: (NumberConstructor | StringConstructor)[];
    direction: PropType<GridDirection>;
    clickable: BooleanConstructor;
    columnNum: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
};
export declare type GridProvide = {
    props: ExtractPropTypes<typeof props>;
};
declare const _default: import("vue").DefineComponent<{
    square: BooleanConstructor;
    center: {
        type: BooleanConstructor;
        default: true;
    };
    border: {
        type: BooleanConstructor;
        default: true;
    };
    gutter: (NumberConstructor | StringConstructor)[];
    iconSize: (NumberConstructor | StringConstructor)[];
    direction: PropType<GridDirection>;
    clickable: BooleanConstructor;
    columnNum: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    center: boolean;
    border: boolean;
    square: boolean;
    clickable: boolean;
    columnNum: string | number;
} & {
    iconSize?: string | number | undefined;
    direction?: GridDirection | undefined;
    gutter?: string | number | undefined;
}>, {
    center: boolean;
    border: boolean;
    square: boolean;
    clickable: boolean;
    columnNum: string | number;
}>;
export default _default;
