declare const Loading: import("../utils").WithInstall<import("vue").DefineComponent<{
    size: (NumberConstructor | StringConstructor)[];
    color: StringConstructor;
    vertical: BooleanConstructor;
    textSize: (NumberConstructor | StringConstructor)[];
    textColor: StringConstructor;
    type: {
        type: import("vue").PropType<import("./Loading").LoadingType>;
        default: string;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    vertical: boolean;
    type: import("./Loading").LoadingType;
} & {
    color?: string | undefined;
    size?: string | number | undefined;
    textSize?: string | number | undefined;
    textColor?: string | undefined;
}>, {
    vertical: boolean;
    type: import("./Loading").LoadingType;
}>>;
export default Loading;
export { Loading };
export type { LoadingType } from './Loading';
