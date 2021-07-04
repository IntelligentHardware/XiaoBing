import { PropType } from 'vue';
export declare type ContactListItem = {
    id?: number | string;
    tel: number | string;
    name: string;
    isDefault?: boolean;
};
declare const _default: import("vue").DefineComponent<{
    list: PropType<ContactListItem[]>;
    addText: StringConstructor;
    modelValue: PropType<unknown>;
    defaultTagText: StringConstructor;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("select" | "add" | "update:modelValue" | "edit")[], "select" | "add" | "update:modelValue" | "edit", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{} & {
    modelValue?: unknown;
    defaultTagText?: string | undefined;
    list?: ContactListItem[] | undefined;
    addText?: string | undefined;
}>, {}>;
export default _default;
