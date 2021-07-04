export declare const SIDEBAR_KEY: unique symbol;
export declare type SidebarProvide = {
    getActive: () => number;
    setActive: (value: number) => void;
};
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "update:modelValue")[], "change" | "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    modelValue: string | number;
} & {}>, {
    modelValue: string | number;
}>;
export default _default;
