declare const ContactEdit: import("../utils").WithInstall<import("vue").DefineComponent<{
    isEdit: BooleanConstructor;
    isSaving: BooleanConstructor;
    isDeleting: BooleanConstructor;
    showSetDefault: BooleanConstructor;
    setDefaultLabel: StringConstructor;
    contactInfo: {
        type: import("vue").PropType<import("./ContactEdit").ContactEditInfo>;
        default: () => import("./ContactEdit").ContactEditInfo;
    };
    telValidator: {
        type: import("vue").PropType<(val: string) => boolean>;
        default: typeof import("../utils").isMobile;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("save" | "delete" | "change-default")[], "save" | "delete" | "change-default", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    isSaving: boolean;
    isDeleting: boolean;
    showSetDefault: boolean;
    telValidator: (val: string) => boolean;
    isEdit: boolean;
    contactInfo: import("./ContactEdit").ContactEditInfo;
} & {
    setDefaultLabel?: string | undefined;
}>, {
    isSaving: boolean;
    isDeleting: boolean;
    showSetDefault: boolean;
    telValidator: (val: string) => boolean;
    isEdit: boolean;
    contactInfo: import("./ContactEdit").ContactEditInfo;
}>>;
export default ContactEdit;
export { ContactEdit };
export type { ContactEditInfo } from './ContactEdit';
