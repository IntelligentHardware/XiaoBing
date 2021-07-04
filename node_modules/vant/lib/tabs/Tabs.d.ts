import { PropType, ComputedRef, ExtractPropTypes } from 'vue';
import { Interceptor } from '../utils/interceptor';
export declare const TABS_KEY: unique symbol;
export declare type TabsType = 'line' | 'card';
declare const props: {
    color: StringConstructor;
    border: BooleanConstructor;
    sticky: BooleanConstructor;
    animated: BooleanConstructor;
    ellipsis: {
        type: BooleanConstructor;
        default: true;
    };
    swipeable: BooleanConstructor;
    scrollspy: BooleanConstructor;
    background: StringConstructor;
    lazyRender: {
        type: BooleanConstructor;
        default: true;
    };
    lineWidth: (NumberConstructor | StringConstructor)[];
    lineHeight: (NumberConstructor | StringConstructor)[];
    beforeChange: PropType<Interceptor>;
    titleActiveColor: StringConstructor;
    titleInactiveColor: StringConstructor;
    type: {
        type: PropType<TabsType>;
        default: string;
    };
    active: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    duration: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    offsetTop: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    swipeThreshold: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
};
export declare type TabsProvide = {
    props: ExtractPropTypes<typeof props>;
    setLine: () => void;
    onRendered: (name: string | number, title?: string) => void;
    scrollIntoView: (immediate?: boolean) => void;
    currentName: ComputedRef<number | string | undefined>;
};
declare const _default: import("vue").DefineComponent<{
    color: StringConstructor;
    border: BooleanConstructor;
    sticky: BooleanConstructor;
    animated: BooleanConstructor;
    ellipsis: {
        type: BooleanConstructor;
        default: true;
    };
    swipeable: BooleanConstructor;
    scrollspy: BooleanConstructor;
    background: StringConstructor;
    lazyRender: {
        type: BooleanConstructor;
        default: true;
    };
    lineWidth: (NumberConstructor | StringConstructor)[];
    lineHeight: (NumberConstructor | StringConstructor)[];
    beforeChange: PropType<Interceptor>;
    titleActiveColor: StringConstructor;
    titleInactiveColor: StringConstructor;
    type: {
        type: PropType<TabsType>;
        default: string;
    };
    active: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    duration: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    offsetTop: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    swipeThreshold: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("scroll" | "disabled" | "click" | "change" | "rendered" | "update:active")[], "scroll" | "disabled" | "click" | "change" | "rendered" | "update:active", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    type: TabsType;
    ellipsis: boolean;
    sticky: boolean;
    border: boolean;
    active: string | number;
    duration: string | number;
    lazyRender: boolean;
    offsetTop: string | number;
    animated: boolean;
    swipeable: boolean;
    scrollspy: boolean;
    swipeThreshold: string | number;
} & {
    color?: string | undefined;
    background?: string | undefined;
    lineWidth?: string | number | undefined;
    lineHeight?: string | number | undefined;
    beforeChange?: Interceptor | undefined;
    titleActiveColor?: string | undefined;
    titleInactiveColor?: string | undefined;
}>, {
    type: TabsType;
    ellipsis: boolean;
    sticky: boolean;
    border: boolean;
    active: string | number;
    duration: string | number;
    lazyRender: boolean;
    offsetTop: string | number;
    animated: boolean;
    swipeable: boolean;
    scrollspy: boolean;
    swipeThreshold: string | number;
}>;
export default _default;
