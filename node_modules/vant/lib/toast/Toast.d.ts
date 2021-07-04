import { PropType, CSSProperties } from 'vue';
import { LoadingType } from '../loading';
export declare type ToastType = 'text' | 'loading' | 'success' | 'fail' | 'html';
export declare type ToastPosition = 'top' | 'middle' | 'bottom';
declare const _default: import("vue").DefineComponent<{
    icon: StringConstructor;
    show: BooleanConstructor;
    overlay: BooleanConstructor;
    message: (NumberConstructor | StringConstructor)[];
    iconSize: (NumberConstructor | StringConstructor)[];
    className: PropType<unknown>;
    iconPrefix: StringConstructor;
    loadingType: PropType<LoadingType>;
    forbidClick: BooleanConstructor;
    overlayClass: PropType<unknown>;
    overlayStyle: PropType<CSSProperties>;
    closeOnClick: BooleanConstructor;
    closeOnClickOverlay: BooleanConstructor;
    type: {
        type: PropType<ToastType>;
        default: string;
    };
    duration: {
        type: NumberConstructor;
        default: number;
    };
    position: {
        type: PropType<ToastPosition>;
        default: string;
    };
    transition: {
        type: StringConstructor;
        default: string;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:show"[], "update:show", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    type: ToastType;
    overlay: boolean;
    show: boolean;
    duration: number;
    closeOnClickOverlay: boolean;
    transition: string;
    position: ToastPosition;
    forbidClick: boolean;
    closeOnClick: boolean;
} & {
    icon?: string | undefined;
    iconPrefix?: string | undefined;
    loadingType?: LoadingType | undefined;
    overlayStyle?: CSSProperties | undefined;
    overlayClass?: unknown;
    className?: unknown;
    message?: string | number | undefined;
    iconSize?: string | number | undefined;
}>, {
    type: ToastType;
    overlay: boolean;
    show: boolean;
    duration: number;
    closeOnClickOverlay: boolean;
    transition: string;
    position: ToastPosition;
    forbidClick: boolean;
    closeOnClick: boolean;
}>;
export default _default;
