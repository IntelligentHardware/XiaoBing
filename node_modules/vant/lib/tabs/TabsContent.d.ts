declare const _default: import("vue").DefineComponent<{
    inited: BooleanConstructor;
    animated: BooleanConstructor;
    swipeable: BooleanConstructor;
    lazyRender: BooleanConstructor;
    count: {
        type: NumberConstructor;
        required: true;
    };
    duration: {
        type: (NumberConstructor | StringConstructor)[];
        required: true;
    };
    currentIndex: {
        type: NumberConstructor;
        required: true;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "change"[], "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    duration: string | number;
    lazyRender: boolean;
    inited: boolean;
    animated: boolean;
    swipeable: boolean;
    count: number;
    currentIndex: number;
} & {}>, {
    lazyRender: boolean;
    inited: boolean;
    animated: boolean;
    swipeable: boolean;
}>;
export default _default;
