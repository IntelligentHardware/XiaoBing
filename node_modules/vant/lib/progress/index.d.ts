declare const Progress: import("../utils").WithInstall<import("vue").DefineComponent<{
    color: StringConstructor;
    inactive: BooleanConstructor;
    pivotText: StringConstructor;
    textColor: StringConstructor;
    showPivot: {
        type: BooleanConstructor;
        default: true;
    };
    pivotColor: StringConstructor;
    trackColor: StringConstructor;
    strokeWidth: (NumberConstructor | StringConstructor)[];
    percentage: {
        type: (NumberConstructor | StringConstructor)[];
        required: true;
        validator: (value: string | number) => boolean;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    inactive: boolean;
    showPivot: boolean;
    percentage: string | number;
} & {
    color?: string | undefined;
    textColor?: string | undefined;
    strokeWidth?: string | number | undefined;
    pivotText?: string | undefined;
    pivotColor?: string | undefined;
    trackColor?: string | undefined;
}>, {
    inactive: boolean;
    showPivot: boolean;
}>>;
export default Progress;
export { Progress };
