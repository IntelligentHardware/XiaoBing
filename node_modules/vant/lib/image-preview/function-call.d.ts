import { App, CSSProperties, TeleportProps } from 'vue';
import { ComponentInstance } from '../utils';
import { Interceptor } from '../utils/interceptor';
import { PopupCloseIconPosition } from '../popup';
export declare type ImagePreviewOptions = {
    loop?: boolean;
    images: string[];
    maxZoom?: number;
    minZoom?: number;
    teleport?: TeleportProps['to'];
    className?: unknown;
    showIndex?: boolean;
    closeable?: boolean;
    closeIcon?: string;
    transition?: string;
    beforeClose?: Interceptor;
    overlayStyle?: CSSProperties;
    swipeDuration?: number;
    startPosition?: number;
    showIndicators?: boolean;
    closeOnPopstate?: boolean;
    closeIconPosition?: PopupCloseIconPosition;
    onClose?(): void;
    onScale?(args: {
        scale: number;
        index: number;
    }): void;
    onChange?(index: number): void;
};
declare const ImagePreview: {
    (images: string[] | ImagePreviewOptions, startPosition?: number): ComponentInstance | undefined;
    Component: import("../utils").WithInstall<import("vue").DefineComponent<{
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
        className: import("vue").PropType<unknown>;
        transition: StringConstructor;
        beforeClose: import("vue").PropType<Interceptor>;
        overlayStyle: import("vue").PropType<CSSProperties>;
        showIndicators: BooleanConstructor;
        closeOnPopstate: {
            type: BooleanConstructor;
            default: true;
        };
        images: {
            type: import("vue").PropType<string[]>;
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
            type: import("vue").PropType<PopupCloseIconPosition>;
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
    }>>;
    install(app: App): void;
};
export { ImagePreview };
