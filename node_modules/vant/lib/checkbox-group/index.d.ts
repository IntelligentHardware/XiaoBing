declare const CheckboxGroup: import("../utils").WithInstall<import("vue").DefineComponent<{
    max: (NumberConstructor | StringConstructor)[];
    disabled: BooleanConstructor;
    direction: import("vue").PropType<import("../checkbox/Checker").CheckerDirection>;
    iconSize: (NumberConstructor | StringConstructor)[];
    checkedColor: StringConstructor;
    modelValue: {
        type: import("vue").PropType<unknown[]>;
        default: () => never[];
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "update:modelValue")[], "change" | "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    disabled: boolean;
    modelValue: unknown[];
} & {
    max?: string | number | undefined;
    iconSize?: string | number | undefined;
    checkedColor?: string | undefined;
    direction?: import("../checkbox/Checker").CheckerDirection | undefined;
}>, {
    disabled: boolean;
    modelValue: unknown[];
}>>;
export default CheckboxGroup;
export { CheckboxGroup };
export type { CheckboxGroupToggleAllOptions } from './CheckboxGroup';
