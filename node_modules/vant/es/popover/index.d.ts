declare const Popover: import("../utils").WithInstall<import("vue").DefineComponent<{
    show: BooleanConstructor;
    overlay: BooleanConstructor;
    duration: (NumberConstructor | StringConstructor)[];
    overlayClass: import("vue").PropType<unknown>;
    overlayStyle: import("vue").PropType<import("vue").CSSProperties>;
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
        type: import("vue").PropType<[number, number]>;
        default: () => number[];
    };
    theme: {
        type: import("vue").PropType<import("./Popover").PopoverTheme>;
        default: string;
    };
    trigger: {
        type: import("vue").PropType<import("./Popover").PopoverTrigger>;
        default: string;
    };
    actions: {
        type: import("vue").PropType<import("./Popover").PopoverAction[]>;
        default: () => never[];
    };
    placement: {
        type: import("vue").PropType<import("./Popover").PopoverPlacement>;
        default: string;
    };
    teleport: {
        type: import("vue").PropType<string | import("vue").RendererElement | null | undefined>;
        default: string;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("select" | "touchstart" | "update:show")[], "select" | "touchstart" | "update:show", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    offset: [number, number];
    overlay: boolean;
    show: boolean;
    teleport: string | import("vue").RendererElement | null | undefined;
    closeOnClickOverlay: boolean;
    actions: import("./Popover").PopoverAction[];
    closeOnClickAction: boolean;
    theme: import("./Popover").PopoverTheme;
    closeOnClickOutside: boolean;
    trigger: import("./Popover").PopoverTrigger;
    placement: import("./Popover").PopoverPlacement;
} & {
    duration?: string | number | undefined;
    overlayStyle?: import("vue").CSSProperties | undefined;
    overlayClass?: unknown;
}>, {
    offset: [number, number];
    overlay: boolean;
    show: boolean;
    teleport: string | import("vue").RendererElement | null | undefined;
    closeOnClickOverlay: boolean;
    actions: import("./Popover").PopoverAction[];
    closeOnClickAction: boolean;
    theme: import("./Popover").PopoverTheme;
    closeOnClickOutside: boolean;
    trigger: import("./Popover").PopoverTrigger;
    placement: import("./Popover").PopoverPlacement;
}>>;
export default Popover;
export { Popover };
export type { PopoverTheme, PopoverAction, PopoverTrigger, PopoverPlacement, } from './Popover';
