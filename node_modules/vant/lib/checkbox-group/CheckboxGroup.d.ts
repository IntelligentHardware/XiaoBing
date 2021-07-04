import { PropType, ExtractPropTypes } from 'vue';
import { CheckerParent, CheckerDirection } from '../checkbox/Checker';
export declare const CHECKBOX_GROUP_KEY: unique symbol;
declare const props: {
    max: (NumberConstructor | StringConstructor)[];
    disabled: BooleanConstructor;
    direction: PropType<CheckerDirection>;
    iconSize: (NumberConstructor | StringConstructor)[];
    checkedColor: StringConstructor;
    modelValue: {
        type: PropType<unknown[]>;
        default: () => never[];
    };
};
export declare type CheckboxGroupToggleAllOptions = boolean | {
    checked?: boolean;
    skipDisabled?: boolean;
};
export declare type CheckboxGroupProvide = CheckerParent & {
    props: ExtractPropTypes<typeof props>;
    updateValue: (value: unknown[]) => void;
};
declare const _default: import("vue").DefineComponent<{
    max: (NumberConstructor | StringConstructor)[];
    disabled: BooleanConstructor;
    direction: PropType<CheckerDirection>;
    iconSize: (NumberConstructor | StringConstructor)[];
    checkedColor: StringConstructor;
    modelValue: {
        type: PropType<unknown[]>;
        default: () => never[];
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "update:modelValue")[], "change" | "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    disabled: boolean;
    modelValue: unknown[];
} & {
    max?: string | number | undefined;
    iconSize?: string | number | undefined;
    checkedColor?: string | undefined;
    direction?: CheckerDirection | undefined;
}>, {
    disabled: boolean;
    modelValue: unknown[];
}>;
export default _default;
