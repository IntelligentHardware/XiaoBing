declare const ContactCard: import("../utils").WithInstall<import("vue").DefineComponent<{
    tel: StringConstructor;
    name: StringConstructor;
    addText: StringConstructor;
    editable: {
        type: BooleanConstructor;
        default: true;
    };
    type: {
        type: import("vue").PropType<import("./ContactCard").ContactCardType>;
        default: string;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], "click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    type: import("./ContactCard").ContactCardType;
    editable: boolean;
} & {
    name?: string | undefined;
    tel?: string | undefined;
    addText?: string | undefined;
}>, {
    type: import("./ContactCard").ContactCardType;
    editable: boolean;
}>>;
export default ContactCard;
export { ContactCard };
export type { ContactCardType } from './ContactCard';
