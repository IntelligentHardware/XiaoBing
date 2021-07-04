import { PropType } from 'vue';
import { isMobile } from '../utils';
import { AreaList } from '../area';
import { AddressEditSearchItem } from './AddressEditDetail';
export declare type AddressEditInfo = {
    tel: string;
    name: string;
    city: string;
    county: string;
    country: string;
    province: string;
    areaCode: string;
    isDefault?: boolean;
    postalCode?: string;
    addressDetail: string;
};
declare function isPostal(value: string): boolean;
declare const _default: import("vue").DefineComponent<{
    areaList: PropType<AreaList>;
    isSaving: BooleanConstructor;
    isDeleting: BooleanConstructor;
    validator: PropType<(key: string, value: string) => string | undefined>;
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
    searchResult: PropType<AddressEditSearchItem[]>;
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
        type: PropType<Partial<AddressEditInfo>>;
        default: () => AddressEditInfo;
    };
    telValidator: {
        type: PropType<(val: string) => boolean>;
        default: typeof isMobile;
    };
    postalValidator: {
        type: PropType<(val: string) => boolean>;
        default: typeof isPostal;
    };
    areaColumnsPlaceholder: {
        type: PropType<string[]>;
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
    addressInfo: Partial<AddressEditInfo>;
    telValidator: (val: string) => boolean;
    postalValidator: (val: string) => boolean;
    areaColumnsPlaceholder: string[];
} & {
    areaList?: AreaList | undefined;
    searchResult?: AddressEditSearchItem[] | undefined;
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
    addressInfo: Partial<AddressEditInfo>;
    telValidator: (val: string) => boolean;
    postalValidator: (val: string) => boolean;
    areaColumnsPlaceholder: string[];
}>;
export default _default;
