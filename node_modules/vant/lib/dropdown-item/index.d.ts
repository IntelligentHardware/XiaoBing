declare const DropdownItem: import("../utils").WithInstall<import("vue").DefineComponent<{
    title: StringConstructor;
    disabled: BooleanConstructor;
    teleport: import("vue").PropType<string | import("vue").RendererElement | null | undefined>;
    lazyRender: {
        type: BooleanConstructor;
        default: true;
    };
    modelValue: import("vue").PropType<unknown>;
    titleClass: import("vue").PropType<unknown>;
    options: {
        type: import("vue").PropType<import("./DropdownItem").DropdownItemOption[]>;
        default: () => never[];
    };
}, (() => JSX.Element) | undefined, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("open" | "change" | "close" | "opened" | "closed" | "update:modelValue")[], "open" | "change" | "close" | "opened" | "closed" | "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    disabled: boolean;
    lazyRender: boolean;
    options: import("./DropdownItem").DropdownItemOption[];
} & {
    title?: string | undefined;
    teleport?: string | import("vue").RendererElement | null | undefined;
    titleClass?: unknown;
    modelValue?: unknown;
}>, {
    disabled: boolean;
    lazyRender: boolean;
    options: import("./DropdownItem").DropdownItemOption[];
}>>;
export default DropdownItem;
export { DropdownItem };
export type { DropdownItemOption } from './DropdownItem';
