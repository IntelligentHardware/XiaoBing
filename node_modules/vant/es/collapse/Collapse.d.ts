import { PropType } from 'vue';
export declare const COLLAPSE_KEY: unique symbol;
export declare type CollapseProvide = {
    toggle: (name: number | string, expanded: boolean) => void;
    isExpanded: (name: number | string) => boolean;
};
declare const _default: import("vue").DefineComponent<{
    border: {
        type: BooleanConstructor;
        default: true;
    };
    accordion: BooleanConstructor;
    modelValue: {
        type: PropType<string | number | (string | number)[]>;
        default: string;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "update:modelValue")[], "change" | "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    border: boolean;
    modelValue: string | number | (string | number)[];
    accordion: boolean;
} & {}>, {
    border: boolean;
    modelValue: string | number | (string | number)[];
    accordion: boolean;
}>;
export default _default;
