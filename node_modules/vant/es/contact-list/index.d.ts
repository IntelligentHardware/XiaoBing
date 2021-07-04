declare const ContactList: import("../utils").WithInstall<import("vue").DefineComponent<{
    list: import("vue").PropType<import("./ContactList").ContactListItem[]>;
    addText: StringConstructor;
    modelValue: import("vue").PropType<unknown>;
    defaultTagText: StringConstructor;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("select" | "add" | "update:modelValue" | "edit")[], "select" | "add" | "update:modelValue" | "edit", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{} & {
    modelValue?: unknown;
    defaultTagText?: string | undefined;
    list?: import("./ContactList").ContactListItem[] | undefined;
    addText?: string | undefined;
}>, {}>>;
export default ContactList;
export { ContactList };
export type { ContactListItem } from './ContactList';
