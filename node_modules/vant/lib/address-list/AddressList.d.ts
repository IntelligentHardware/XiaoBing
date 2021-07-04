import { PropType } from 'vue';
import { AddressListAddress } from './AddressListItem';
declare const _default: import("vue").DefineComponent<{
    modelValue: (NumberConstructor | StringConstructor)[];
    switchable: {
        type: BooleanConstructor;
        default: true;
    };
    disabledText: StringConstructor;
    addButtonText: StringConstructor;
    defaultTagText: StringConstructor;
    list: {
        type: PropType<AddressListAddress[]>;
        default: () => never[];
    };
    disabledList: {
        type: PropType<AddressListAddress[]>;
        default: () => never[];
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("select" | "add" | "update:modelValue" | "edit" | "click-item" | "edit-disabled" | "select-disabled")[], "select" | "add" | "update:modelValue" | "edit" | "click-item" | "edit-disabled" | "select-disabled", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    switchable: boolean;
    list: AddressListAddress[];
    disabledList: AddressListAddress[];
} & {
    modelValue?: string | number | undefined;
    defaultTagText?: string | undefined;
    disabledText?: string | undefined;
    addButtonText?: string | undefined;
}>, {
    switchable: boolean;
    list: AddressListAddress[];
    disabledList: AddressListAddress[];
}>;
export default _default;
