declare const NumberKeyboard: import("../utils").WithInstall<import("vue").DefineComponent<{
    show: BooleanConstructor;
    title: StringConstructor;
    zIndex: (NumberConstructor | StringConstructor)[];
    teleport: import("vue").PropType<string | import("vue").RendererElement | null | undefined>;
    transition: {
        type: BooleanConstructor;
        default: true;
    };
    blurOnClose: {
        type: BooleanConstructor;
        default: true;
    };
    showDeleteKey: {
        type: BooleanConstructor;
        default: true;
    };
    randomKeyOrder: BooleanConstructor;
    closeButtonText: StringConstructor;
    deleteButtonText: StringConstructor;
    closeButtonLoading: BooleanConstructor;
    hideOnClickOutside: {
        type: BooleanConstructor;
        default: true;
    };
    safeAreaInsetBottom: {
        type: BooleanConstructor;
        default: true;
    };
    theme: {
        type: import("vue").PropType<import("./NumberKeyboard").NumberKeyboardTheme>;
        default: string;
    };
    modelValue: {
        type: StringConstructor;
        default: string;
    };
    extraKey: {
        type: import("vue").PropType<string | string[]>;
        default: string;
    };
    maxlength: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("input" | "hide" | "show" | "blur" | "close" | "update:modelValue" | "delete")[], "input" | "hide" | "show" | "blur" | "close" | "update:modelValue" | "delete", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    safeAreaInsetBottom: boolean;
    show: boolean;
    transition: boolean;
    maxlength: string | number;
    modelValue: string;
    theme: import("./NumberKeyboard").NumberKeyboardTheme;
    blurOnClose: boolean;
    showDeleteKey: boolean;
    randomKeyOrder: boolean;
    closeButtonLoading: boolean;
    hideOnClickOutside: boolean;
    extraKey: string | string[];
} & {
    title?: string | undefined;
    zIndex?: string | number | undefined;
    teleport?: string | import("vue").RendererElement | null | undefined;
    deleteButtonText?: string | undefined;
    closeButtonText?: string | undefined;
}>, {
    safeAreaInsetBottom: boolean;
    show: boolean;
    transition: boolean;
    maxlength: string | number;
    modelValue: string;
    theme: import("./NumberKeyboard").NumberKeyboardTheme;
    blurOnClose: boolean;
    showDeleteKey: boolean;
    randomKeyOrder: boolean;
    closeButtonLoading: boolean;
    hideOnClickOutside: boolean;
    extraKey: string | string[];
}>>;
export default NumberKeyboard;
export { NumberKeyboard };
export type { NumberKeyboardTheme } from './NumberKeyboard';
