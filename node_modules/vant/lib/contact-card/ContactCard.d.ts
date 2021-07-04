import { PropType } from 'vue';
export declare type ContactCardType = 'add' | 'edit';
declare const _default: import("vue").DefineComponent<{
    tel: StringConstructor;
    name: StringConstructor;
    addText: StringConstructor;
    editable: {
        type: BooleanConstructor;
        default: true;
    };
    type: {
        type: PropType<ContactCardType>;
        default: string;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], "click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    type: ContactCardType;
    editable: boolean;
} & {
    name?: string | undefined;
    tel?: string | undefined;
    addText?: string | undefined;
}>, {
    type: ContactCardType;
    editable: boolean;
}>;
export default _default;
