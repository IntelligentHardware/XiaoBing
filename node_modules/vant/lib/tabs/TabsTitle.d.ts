declare const _default: import("vue").DefineComponent<{
    dot: BooleanConstructor;
    type: StringConstructor;
    color: StringConstructor;
    title: StringConstructor;
    badge: (NumberConstructor | StringConstructor)[];
    isActive: BooleanConstructor;
    disabled: BooleanConstructor;
    scrollable: BooleanConstructor;
    activeColor: StringConstructor;
    renderTitle: FunctionConstructor;
    inactiveColor: StringConstructor;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    dot: boolean;
    disabled: boolean;
    isActive: boolean;
    scrollable: boolean;
} & {
    title?: string | undefined;
    badge?: string | number | undefined;
    color?: string | undefined;
    type?: string | undefined;
    activeColor?: string | undefined;
    inactiveColor?: string | undefined;
    renderTitle?: Function | undefined;
}>, {
    dot: boolean;
    disabled: boolean;
    isActive: boolean;
    scrollable: boolean;
}>;
export default _default;
