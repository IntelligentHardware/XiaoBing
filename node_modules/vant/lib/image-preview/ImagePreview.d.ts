import { PropType, CSSProperties } from 'vue';
import { Interceptor } from '../utils/interceptor';
import { PopupCloseIconPosition } from '../popup';
export declare type ScaleEventParams = {
    scale: number;
    index: number;
};
declare const _default: import("vue").DefineComponent<{
    show: BooleanConstructor;
    loop: {
        type: BooleanConstructor;
        default: true;
    };
    overlay: {
        type: BooleanConstructor;
        default: true;
    };
    closeable: BooleanConstructor;
    showIndex: {
        type: BooleanConstructor;
        default: true;
    };
    className: PropType<unknown>;
    transition: StringConstructor;
    beforeClose: PropType<Interceptor>;
    overlayStyle: PropType<CSSProperties>;
    showIndicators: BooleanConstructor;
    closeOnPopstate: {
        type: BooleanConstructor;
        default: true;
    };
    images: {
        type: PropType<string[]>;
        default: () => never[];
    };
    minZoom: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    maxZoom: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    swipeDuration: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    startPosition: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    closeIcon: {
        type: StringConstructor;
        default: string;
    };
    closeIconPosition: {
        type: PropType<PopupCloseIconPosition>;
        default: string;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "close" | "closed" | "update:show" | "scale")[], "change" | "close" | "closed" | "update:show" | "scale", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    overlay: boolean;
    show: boolean;
    closeable: boolean;
    closeOnPopstate: boolean;
    closeIcon: string;
    closeIconPosition: PopupCloseIconPosition;
    swipeDuration: string | number;
    loop: boolean;
    showIndicators: boolean;
    minZoom: string | number;
    maxZoom: string | number;
    showIndex: boolean;
    images: string[];
    startPosition: string | number;
} & {
    overlayStyle?: CSSProperties | undefined;
    className?: unknown;
    transition?: string | undefined;
    beforeClose?: Interceptor | undefined;
}>, {
    overlay: boolean;
    show: boolean;
    closeable: boolean;
    closeOnPopstate: boolean;
    closeIcon: string;
    closeIconPosition: PopupCloseIconPosition;
    swipeDuration: string | number;
    loop: boolean;
    showIndicators: boolean;
    minZoom: string | number;
    maxZoom: string | number;
    showIndex: boolean;
    images: string[];
    startPosition: string | number;
}>;
export default _default;
