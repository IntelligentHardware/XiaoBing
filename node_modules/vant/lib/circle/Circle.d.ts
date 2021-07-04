import { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    text: StringConstructor;
    size: (NumberConstructor | StringConstructor)[];
    color: PropType<string | Record<string, string>>;
    clockwise: {
        type: BooleanConstructor;
        default: true;
    };
    layerColor: StringConstructor;
    strokeLinecap: PropType<CanvasLineCap>;
    currentRate: {
        type: NumberConstructor;
        default: number;
    };
    speed: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    fill: {
        type: StringConstructor;
        default: string;
    };
    rate: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    strokeWidth: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:currentRate"[], "update:currentRate", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    fill: string;
    strokeWidth: string | number;
    clockwise: boolean;
    currentRate: number;
    speed: string | number;
    rate: string | number;
} & {
    text?: string | undefined;
    color?: string | Record<string, string> | undefined;
    size?: string | number | undefined;
    strokeLinecap?: CanvasLineCap | undefined;
    layerColor?: string | undefined;
}>, {
    fill: string;
    strokeWidth: string | number;
    clockwise: boolean;
    currentRate: number;
    speed: string | number;
    rate: string | number;
}>;
export default _default;
