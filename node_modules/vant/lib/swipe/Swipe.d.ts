import { ComputedRef, ExtractPropTypes } from 'vue';
export declare const SWIPE_KEY: unique symbol;
declare const props: {
    loop: {
        type: BooleanConstructor;
        default: true;
    };
    width: (NumberConstructor | StringConstructor)[];
    height: (NumberConstructor | StringConstructor)[];
    vertical: BooleanConstructor;
    touchable: {
        type: BooleanConstructor;
        default: true;
    };
    lazyRender: BooleanConstructor;
    indicatorColor: StringConstructor;
    showIndicators: {
        type: BooleanConstructor;
        default: true;
    };
    stopPropagation: {
        type: BooleanConstructor;
        default: true;
    };
    autoplay: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    duration: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    initialSwipe: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
};
export declare type SwipeToOptions = {
    immediate?: boolean;
};
export declare type SwipeProvide = {
    props: ExtractPropTypes<typeof props>;
    size: ComputedRef<number>;
    count: ComputedRef<number>;
    activeIndicator: ComputedRef<number>;
};
declare const _default: import("vue").DefineComponent<{
    loop: {
        type: BooleanConstructor;
        default: true;
    };
    width: (NumberConstructor | StringConstructor)[];
    height: (NumberConstructor | StringConstructor)[];
    vertical: BooleanConstructor;
    touchable: {
        type: BooleanConstructor;
        default: true;
    };
    lazyRender: BooleanConstructor;
    indicatorColor: StringConstructor;
    showIndicators: {
        type: BooleanConstructor;
        default: true;
    };
    stopPropagation: {
        type: BooleanConstructor;
        default: true;
    };
    autoplay: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    duration: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    initialSwipe: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "change"[], "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    vertical: boolean;
    duration: string | number;
    lazyRender: boolean;
    loop: boolean;
    touchable: boolean;
    showIndicators: boolean;
    stopPropagation: boolean;
    autoplay: string | number;
    initialSwipe: string | number;
} & {
    width?: string | number | undefined;
    height?: string | number | undefined;
    indicatorColor?: string | undefined;
}>, {
    vertical: boolean;
    duration: string | number;
    lazyRender: boolean;
    loop: boolean;
    touchable: boolean;
    showIndicators: boolean;
    stopPropagation: boolean;
    autoplay: string | number;
    initialSwipe: string | number;
}>;
export default _default;
