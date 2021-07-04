declare const Cascader: import("../utils").WithInstall<import("vue").DefineComponent<{
    title: StringConstructor;
    closeable: {
        type: BooleanConstructor;
        default: true;
    };
    swipeable: {
        type: BooleanConstructor;
        default: true;
    };
    modelValue: (NumberConstructor | StringConstructor)[];
    fieldNames: import("vue").PropType<import("./Cascader").CascaderFieldNames>;
    placeholder: StringConstructor;
    activeColor: StringConstructor;
    options: {
        type: import("vue").PropType<import("./Cascader").CascaderOption[]>;
        default: () => never[];
    };
    closeIcon: {
        type: StringConstructor;
        default: string;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "close" | "update:modelValue" | "finish" | "click-tab")[], "change" | "close" | "update:modelValue" | "finish" | "click-tab", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    closeable: boolean;
    closeIcon: string;
    options: import("./Cascader").CascaderOption[];
    swipeable: boolean;
} & {
    title?: string | undefined;
    placeholder?: string | undefined;
    modelValue?: string | number | undefined;
    activeColor?: string | undefined;
    fieldNames?: import("./Cascader").CascaderFieldNames | undefined;
}>, {
    closeable: boolean;
    closeIcon: string;
    options: import("./Cascader").CascaderOption[];
    swipeable: boolean;
}>>;
export default Cascader;
export { Cascader };
export type { CascaderOption, CascaderFieldNames } from './Cascader';
