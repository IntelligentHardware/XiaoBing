import { PropType } from 'vue';
declare type SliderValue = number | number[];
declare const _default: import("vue").DefineComponent<{
    range: BooleanConstructor;
    disabled: BooleanConstructor;
    readonly: BooleanConstructor;
    vertical: BooleanConstructor;
    barHeight: (NumberConstructor | StringConstructor)[];
    buttonSize: (NumberConstructor | StringConstructor)[];
    activeColor: StringConstructor;
    inactiveColor: StringConstructor;
    min: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    max: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    step: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    modelValue: {
        type: PropType<SliderValue>;
        default: number;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "update:modelValue" | "drag-end" | "drag-start")[], "change" | "update:modelValue" | "drag-end" | "drag-start", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    max: string | number;
    vertical: boolean;
    range: boolean;
    disabled: boolean;
    readonly: boolean;
    modelValue: SliderValue;
    min: string | number;
    step: string | number;
} & {
    activeColor?: string | undefined;
    inactiveColor?: string | undefined;
    barHeight?: string | number | undefined;
    buttonSize?: string | number | undefined;
}>, {
    max: string | number;
    vertical: boolean;
    range: boolean;
    disabled: boolean;
    readonly: boolean;
    modelValue: SliderValue;
    min: string | number;
    step: string | number;
}>;
export default _default;
