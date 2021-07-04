import { PropType, CSSProperties } from 'vue';
declare const _default: import("vue").DefineComponent<{
    show: BooleanConstructor;
    zIndex: (NumberConstructor | StringConstructor)[];
    duration: (NumberConstructor | StringConstructor)[];
    className: PropType<unknown>;
    lockScroll: {
        type: BooleanConstructor;
        default: true;
    };
    customStyle: PropType<CSSProperties>;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    show: boolean;
    lockScroll: boolean;
} & {
    zIndex?: string | number | undefined;
    duration?: string | number | undefined;
    className?: unknown;
    customStyle?: CSSProperties | undefined;
}>, {
    show: boolean;
    lockScroll: boolean;
}>;
export default _default;
