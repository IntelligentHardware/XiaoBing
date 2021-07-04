import { PropType } from 'vue';
export declare type StickyPosition = 'top' | 'bottom';
declare const _default: import("vue").DefineComponent<{
    zIndex: (NumberConstructor | StringConstructor)[];
    container: PropType<Element>;
    offsetTop: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    offsetBottom: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    position: {
        type: PropType<StickyPosition>;
        default: string;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("scroll" | "change")[], "scroll" | "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    position: StickyPosition;
    offsetTop: string | number;
    offsetBottom: string | number;
} & {
    zIndex?: string | number | undefined;
    container?: Element | undefined;
}>, {
    position: StickyPosition;
    offsetTop: string | number;
    offsetBottom: string | number;
}>;
export default _default;
