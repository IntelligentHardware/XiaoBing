import { PropType } from 'vue';
export declare type AddressEditSearchItem = {
    name: string;
    address: string;
};
declare const _default: import("vue").DefineComponent<{
    show: BooleanConstructor;
    value: StringConstructor;
    focused: BooleanConstructor;
    detailRows: (NumberConstructor | StringConstructor)[];
    searchResult: PropType<AddressEditSearchItem[]>;
    errorMessage: StringConstructor;
    detailMaxlength: (NumberConstructor | StringConstructor)[];
    showSearchResult: BooleanConstructor;
}, () => JSX.Element | undefined, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("input" | "blur" | "focus" | "select-search")[], "input" | "blur" | "focus" | "select-search", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    show: boolean;
    focused: boolean;
    showSearchResult: boolean;
} & {
    value?: string | undefined;
    errorMessage?: string | undefined;
    detailRows?: string | number | undefined;
    searchResult?: AddressEditSearchItem[] | undefined;
    detailMaxlength?: string | number | undefined;
}>, {
    show: boolean;
    focused: boolean;
    showSearchResult: boolean;
}>;
export default _default;
