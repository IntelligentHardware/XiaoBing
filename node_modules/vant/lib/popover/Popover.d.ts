import { PropType, CSSProperties } from 'vue';
export declare type PopoverTheme = 'light' | 'dark';
export declare type PopoverTrigger = 'manual' | 'click';
export declare type PopoverPlacement = 'top' | 'top-start' | 'top-end' | 'left' | 'left-start' | 'left-end' | 'right' | 'right-start' | 'right-end' | 'bottom' | 'bottom-start' | 'bottom-end';
export declare type PopoverAction = {
    text: string;
    icon?: string;
    color?: string;
    disabled?: boolean;
    className?: string;
};
declare const _default: import("vue").DefineComponent<{
    show: BooleanConstructor;
    overlay: BooleanConstructor;
    duration: (NumberConstructor | StringConstructor)[];
    overlayClass: PropType<unknown>;
    overlayStyle: PropType<CSSProperties>;
    closeOnClickAction: {
        type: BooleanConstructor;
        default: true;
    };
    closeOnClickOverlay: {
        type: BooleanConstructor;
        default: true;
    };
    closeOnClickOutside: {
        type: BooleanConstructor;
        default: true;
    };
    offset: {
        type: PropType<[number, number]>;
        default: () => number[];
    };
    theme: {
        type: PropType<PopoverTheme>;
        default: string;
    };
    trigger: {
        type: PropType<PopoverTrigger>;
        default: string;
    };
    actions: {
        type: PropType<PopoverAction[]>;
        default: () => never[];
    };
    placement: {
        type: PropType<PopoverPlacement>;
        default: string;
    };
    teleport: {
        type: PropType<string | import("vue").RendererElement | null | undefined>;
        default: string;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("select" | "touchstart" | "update:show")[], "select" | "touchstart" | "update:show", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    offset: [number, number];
    overlay: boolean;
    show: boolean;
    teleport: string | import("vue").RendererElement | null | undefined;
    closeOnClickOverlay: boolean;
    actions: PopoverAction[];
    closeOnClickAction: boolean;
    theme: PopoverTheme;
    closeOnClickOutside: boolean;
    trigger: PopoverTrigger;
    placement: PopoverPlacement;
} & {
    duration?: string | number | undefined;
    overlayStyle?: CSSProperties | undefined;
    overlayClass?: unknown;
}>, {
    offset: [number, number];
    overlay: boolean;
    show: boolean;
    teleport: string | import("vue").RendererElement | null | undefined;
    closeOnClickOverlay: boolean;
    actions: PopoverAction[];
    closeOnClickAction: boolean;
    theme: PopoverTheme;
    closeOnClickOutside: boolean;
    trigger: PopoverTrigger;
    placement: PopoverPlacement;
}>;
export default _default;
