import { PropType } from 'vue';
export declare type LoadingType = 'circular' | 'spinner';
declare const _default: import("vue").DefineComponent<{
    size: (NumberConstructor | StringConstructor)[];
    color: StringConstructor;
    vertical: BooleanConstructor;
    textSize: (NumberConstructor | StringConstructor)[];
    textColor: StringConstructor;
    type: {
        type: PropType<LoadingType>;
        default: string;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    vertical: boolean;
    type: LoadingType;
} & {
    color?: string | undefined;
    size?: string | number | undefined;
    textSize?: string | number | undefined;
    textColor?: string | undefined;
}>, {
    vertical: boolean;
    type: LoadingType;
}>;
export default _default;
