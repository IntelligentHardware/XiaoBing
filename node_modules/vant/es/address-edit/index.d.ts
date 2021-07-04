declare const AddressEdit: import("../utils").WithInstall<import("vue").DefineComponent<{
    areaList: import("vue").PropType<import("..").AreaList>;
    isSaving: BooleanConstructor;
    isDeleting: BooleanConstructor;
    validator: import("vue").PropType<(key: string, value: string) => string | undefined>;
    showArea: {
        type: BooleanConstructor;
        default: true;
    };
    showDetail: {
        type: BooleanConstructor;
        default: true;
    };
    showDelete: BooleanConstructor;
    showPostal: BooleanConstructor;
    disableArea: BooleanConstructor;
    searchResult: import("vue").PropType<import("./AddressEditDetail").AddressEditSearchItem[]>;
    telMaxlength: (NumberConstructor | StringConstructor)[];
    showSetDefault: BooleanConstructor;
    saveButtonText: StringConstructor;
    areaPlaceholder: StringConstructor;
    deleteButtonText: StringConstructor;
    showSearchResult: BooleanConstructor;
    detailRows: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    detailMaxlength: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    addressInfo: {
        type: import("vue").PropType<Partial<import("./AddressEdit").AddressEditInfo>>;
        default: () => import("./AddressEdit").AddressEditInfo;
    };
    telValidator: {
        type: import("vue").PropType<(val: string) => boolean>;
        default: typeof import("../utils").isMobile;
    };
    postalValidator: {
        type: import("vue").PropType<(val: string) => boolean>;
        default: (value: string) => boolean;
    };
    areaColumnsPlaceholder: {
        type: import("vue").PropType<string[]>;
        default: () => never[];
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("focus" | "select-search" | "save" | "delete" | "click-area" | "change-area" | "change-detail" | "cancel-delete" | "change-default")[], "focus" | "select-search" | "save" | "delete" | "click-area" | "change-area" | "change-detail" | "cancel-delete" | "change-default", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    detailRows: string | number;
    detailMaxlength: string | number;
    showSearchResult: boolean;
    isSaving: boolean;
    isDeleting: boolean;
    showArea: boolean;
    showDetail: boolean;
    showDelete: boolean;
    showPostal: boolean;
    disableArea: boolean;
    showSetDefault: boolean;
    addressInfo: Partial<import("./AddressEdit").AddressEditInfo>;
    telValidator: (val: string) => boolean;
    postalValidator: (val: string) => boolean;
    areaColumnsPlaceholder: string[];
} & {
    areaList?: import("..").AreaList | undefined;
    searchResult?: import("./AddressEditDetail").AddressEditSearchItem[] | undefined;
    validator?: ((key: string, value: string) => string | undefined) | undefined;
    telMaxlength?: string | number | undefined;
    saveButtonText?: string | undefined;
    areaPlaceholder?: string | undefined;
    deleteButtonText?: string | undefined;
}>, {
    detailRows: string | number;
    detailMaxlength: string | number;
    showSearchResult: boolean;
    isSaving: boolean;
    isDeleting: boolean;
    showArea: boolean;
    showDetail: boolean;
    showDelete: boolean;
    showPostal: boolean;
    disableArea: boolean;
    showSetDefault: boolean;
    addressInfo: Partial<import("./AddressEdit").AddressEditInfo>;
    telValidator: (val: string) => boolean;
    postalValidator: (val: string) => boolean;
    areaColumnsPlaceholder: string[];
}>>;
export default AddressEdit;
export { AddressEdit };
export type { AddressEditInfo } from './AddressEdit';
export type { AddressEditSearchItem } from './AddressEditDetail';
