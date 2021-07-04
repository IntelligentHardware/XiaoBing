declare const CountDown: import("../utils").WithInstall<import("vue").DefineComponent<{
    autoStart: {
        type: BooleanConstructor;
        default: true;
    };
    millisecond: BooleanConstructor;
    time: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    format: {
        type: StringConstructor;
        default: string;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "finish")[], "change" | "finish", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    time: string | number;
    autoStart: boolean;
    millisecond: boolean;
    format: string;
} & {}>, {
    time: string | number;
    autoStart: boolean;
    millisecond: boolean;
    format: string;
}>>;
export default CountDown;
export { CountDown };
