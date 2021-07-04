import { PropType, ExtractPropTypes } from 'vue';
import { Interceptor } from '../utils/interceptor';
export declare const TABBAR_KEY: unique symbol;
declare const props: {
    route: BooleanConstructor;
    fixed: {
        type: BooleanConstructor;
        default: true;
    };
    border: {
        type: BooleanConstructor;
        default: true;
    };
    zIndex: (NumberConstructor | StringConstructor)[];
    placeholder: BooleanConstructor;
    activeColor: StringConstructor;
    beforeChange: PropType<Interceptor>;
    inactiveColor: StringConstructor;
    modelValue: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    safeAreaInsetBottom: {
        type: PropType<boolean | null>;
        default: null;
    };
};
export declare type TabbarProvide = {
    props: ExtractPropTypes<typeof props>;
    setActive: (active: number | string) => void;
};
declare const _default: import("vue").DefineComponent<{
    route: BooleanConstructor;
    fixed: {
        type: BooleanConstructor;
        default: true;
    };
    border: {
        type: BooleanConstructor;
        default: true;
    };
    zIndex: (NumberConstructor | StringConstructor)[];
    placeholder: BooleanConstructor;
    activeColor: StringConstructor;
    beforeChange: PropType<Interceptor>;
    inactiveColor: StringConstructor;
    modelValue: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    safeAreaInsetBottom: {
        type: PropType<boolean | null>;
        default: null;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "update:modelValue")[], "change" | "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    fixed: boolean;
    safeAreaInsetBottom: boolean | null;
    border: boolean;
    placeholder: boolean;
    modelValue: string | number;
    route: boolean;
} & {
    zIndex?: string | number | undefined;
    activeColor?: string | undefined;
    inactiveColor?: string | undefined;
    beforeChange?: Interceptor | undefined;
}>, {
    fixed: boolean;
    safeAreaInsetBottom: boolean | null;
    border: boolean;
    placeholder: boolean;
    modelValue: string | number;
    route: boolean;
}>;
export default _default;
