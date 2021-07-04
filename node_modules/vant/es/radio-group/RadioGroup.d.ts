import { ExtractPropTypes } from 'vue';
import { CheckerParent } from '../checkbox/Checker';
export declare const RADIO_KEY: unique symbol;
declare const props: {
    disabled: BooleanConstructor;
    iconSize: (NumberConstructor | StringConstructor)[];
    direction: StringConstructor;
    modelValue: import("vue").PropType<unknown>;
    checkedColor: StringConstructor;
};
export declare type RadioGroupProvide = CheckerParent & {
    props: ExtractPropTypes<typeof props>;
    updateValue: (value: unknown) => void;
};
declare const _default: import("vue").DefineComponent<{
    disabled: BooleanConstructor;
    iconSize: (NumberConstructor | StringConstructor)[];
    direction: StringConstructor;
    modelValue: import("vue").PropType<unknown>;
    checkedColor: StringConstructor;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "update:modelValue")[], "change" | "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    disabled: boolean;
} & {
    modelValue?: unknown;
    iconSize?: string | number | undefined;
    checkedColor?: string | undefined;
    direction?: string | undefined;
}>, {
    disabled: boolean;
}>;
export default _default;
