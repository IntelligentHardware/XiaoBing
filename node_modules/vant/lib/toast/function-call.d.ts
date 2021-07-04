import { App, TeleportProps } from 'vue';
import { ComponentInstance } from '../utils';
import { ToastType, ToastPosition } from './Toast';
import type { LoadingType } from '../loading';
export declare type ToastOptions = {
    icon?: string;
    type?: ToastType;
    mask?: boolean;
    message?: string | number;
    onClose?: () => void;
    onOpened?: () => void;
    overlay?: boolean;
    duration?: number;
    teleport?: TeleportProps['to'];
    iconSize?: number | string;
    position?: ToastPosition;
    className?: unknown;
    transition?: string;
    iconPrefix?: string;
    loadingType?: LoadingType;
    forbidClick?: boolean;
    closeOnClick?: boolean;
    overlayClass?: unknown;
    overlayStyle?: Record<string, any>;
    closeOnClickOverlay?: boolean;
};
declare function Toast(options?: string | ToastOptions): ComponentInstance;
declare namespace Toast {
    var loading: (options: string | ToastOptions) => ComponentInstance;
    var success: (options: string | ToastOptions) => ComponentInstance;
    var fail: (options: string | ToastOptions) => ComponentInstance;
    var clear: (all?: boolean | undefined) => void;
    var setDefaultOptions: {
        (options: ToastOptions): void;
        (type: ToastType, options: ToastOptions): void;
    };
    var resetDefaultOptions: (type?: ToastType | undefined) => void;
    var allowMultiple: (value?: boolean) => void;
    var install: (app: App<any>) => void;
}
export { Toast };
