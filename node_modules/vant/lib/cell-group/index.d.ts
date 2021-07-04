declare const CellGroup: import("../utils").WithInstall<import("vue").DefineComponent<{
    title: StringConstructor;
    border: {
        type: BooleanConstructor;
        default: true;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    border: boolean;
} & {
    title?: string | undefined;
}>, {
    border: boolean;
}>>;
export default CellGroup;
export { CellGroup };
