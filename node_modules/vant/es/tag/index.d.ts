declare const Tag: import("../utils").WithInstall<import("vue").DefineComponent<{
    size: StringConstructor;
    mark: BooleanConstructor;
    show: {
        type: BooleanConstructor;
        default: true;
    };
    color: StringConstructor;
    plain: BooleanConstructor;
    round: BooleanConstructor;
    textColor: StringConstructor;
    closeable: BooleanConstructor;
    type: {
        type: import("vue").PropType<import("./Tag").TagType>;
        default: string;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "close"[], "close", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    mark: boolean;
    round: boolean;
    type: import("./Tag").TagType;
    show: boolean;
    plain: boolean;
    closeable: boolean;
} & {
    color?: string | undefined;
    size?: string | undefined;
    textColor?: string | undefined;
}>, {
    mark: boolean;
    round: boolean;
    type: import("./Tag").TagType;
    show: boolean;
    plain: boolean;
    closeable: boolean;
}>>;
export default Tag;
export { Tag };
