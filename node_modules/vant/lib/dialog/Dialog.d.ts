import { PropType } from 'vue';
import { Interceptor } from '../utils/interceptor';
export declare type DialogTheme = 'default' | 'round-button';
export declare type DialogAction = 'confirm' | 'cancel';
export declare type DialogMessage = string | (() => JSX.Element);
export declare type DialogMessageAlign = 'left' | 'center' | 'right';
declare const _default: import("vue").DefineComponent<{
    show: BooleanConstructor;
    zIndex: (NumberConstructor | StringConstructor)[];
    overlay: {
        type: BooleanConstructor;
        default: true;
    };
    duration: (NumberConstructor | StringConstructor)[];
    teleport: PropType<string | import("vue").RendererElement | null | undefined>;
    lockScroll: {
        type: BooleanConstructor;
        default: true;
    };
    lazyRender: {
        type: BooleanConstructor;
        default: true;
    };
    overlayStyle: PropType<import("vue").CSSProperties>;
    overlayClass: PropType<unknown>;
    transitionAppear: BooleanConstructor;
    closeOnClickOverlay: {
        type: BooleanConstructor;
        default: true;
    };
} & {
    title: StringConstructor;
    theme: PropType<DialogTheme>;
    width: (NumberConstructor | StringConstructor)[];
    message: PropType<DialogMessage>;
    callback: PropType<(action?: DialogAction | undefined) => void>;
    allowHtml: BooleanConstructor;
    className: PropType<unknown>;
    beforeClose: PropType<Interceptor>;
    messageAlign: PropType<DialogMessageAlign>;
    closeOnPopstate: {
        type: BooleanConstructor;
        default: true;
    };
    showCancelButton: BooleanConstructor;
    cancelButtonText: StringConstructor;
    cancelButtonColor: StringConstructor;
    confirmButtonText: StringConstructor;
    confirmButtonColor: StringConstructor;
    showConfirmButton: {
        type: BooleanConstructor;
        default: true;
    };
    closeOnClickOverlay: BooleanConstructor;
    transition: {
        type: StringConstructor;
        default: string;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("cancel" | "update:show" | "confirm")[], "cancel" | "update:show" | "confirm", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    overlay: boolean;
    show: boolean;
    lockScroll: boolean;
    lazyRender: boolean;
    transitionAppear: boolean;
    closeOnClickOverlay: boolean;
    transition: string;
    closeOnPopstate: boolean;
    allowHtml: boolean;
    showCancelButton: boolean;
    showConfirmButton: boolean;
} & {
    title?: string | undefined;
    zIndex?: string | number | undefined;
    duration?: string | number | undefined;
    teleport?: string | import("vue").RendererElement | null | undefined;
    overlayStyle?: import("vue").CSSProperties | undefined;
    overlayClass?: unknown;
    className?: unknown;
    callback?: ((action?: DialogAction | undefined) => void) | undefined;
    cancelButtonText?: string | undefined;
    confirmButtonText?: string | undefined;
    message?: DialogMessage | undefined;
    theme?: DialogTheme | undefined;
    width?: string | number | undefined;
    beforeClose?: Interceptor | undefined;
    messageAlign?: DialogMessageAlign | undefined;
    cancelButtonColor?: string | undefined;
    confirmButtonColor?: string | undefined;
}>, {
    overlay: boolean;
    show: boolean;
    lockScroll: boolean;
    lazyRender: boolean;
    transitionAppear: boolean;
    closeOnClickOverlay: boolean;
    transition: string;
    closeOnPopstate: boolean;
    allowHtml: boolean;
    showCancelButton: boolean;
    showConfirmButton: boolean;
}>;
export default _default;
