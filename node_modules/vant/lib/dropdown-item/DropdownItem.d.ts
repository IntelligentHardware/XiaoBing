import { PropType } from 'vue';
export declare type DropdownItemOption = {
    text: string;
    icon?: string;
    value: number | string;
};
declare const _default: import("vue").DefineComponent<{
    title: StringConstructor;
    disabled: BooleanConstructor;
    teleport: PropType<string | import("vue").RendererElement | null | undefined>;
    lazyRender: {
        type: BooleanConstructor;
        default: true;
    };
    modelValue: PropType<unknown>;
    titleClass: PropType<unknown>;
    options: {
        type: PropType<DropdownItemOption[]>;
        default: () => never[];
    };
}, (() => JSX.Element) | undefined, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("open" | "change" | "close" | "opened" | "closed" | "update:modelValue")[], "open" | "change" | "close" | "opened" | "closed" | "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    disabled: boolean;
    lazyRender: boolean;
    options: DropdownItemOption[];
} & {
    title?: string | undefined;
    teleport?: string | import("vue").RendererElement | null | undefined;
    titleClass?: unknown;
    modelValue?: unknown;
}>, {
    disabled: boolean;
    lazyRender: boolean;
    options: DropdownItemOption[];
}>;
export default _default;
