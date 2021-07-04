declare const Pagination: import("../utils").WithInstall<import("vue").DefineComponent<{
    prevText: StringConstructor;
    nextText: StringConstructor;
    forceEllipses: BooleanConstructor;
    mode: {
        type: import("vue").PropType<import("./Pagination").PaginationMode>;
        default: string;
    };
    modelValue: {
        type: NumberConstructor;
        default: number;
    };
    pageCount: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    totalItems: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    itemsPerPage: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    showPageSize: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "update:modelValue")[], "change" | "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    modelValue: number;
    mode: import("./Pagination").PaginationMode;
    forceEllipses: boolean;
    pageCount: string | number;
    totalItems: string | number;
    itemsPerPage: string | number;
    showPageSize: string | number;
} & {
    prevText?: string | undefined;
    nextText?: string | undefined;
}>, {
    modelValue: number;
    mode: import("./Pagination").PaginationMode;
    forceEllipses: boolean;
    pageCount: string | number;
    totalItems: string | number;
    itemsPerPage: string | number;
    showPageSize: string | number;
}>>;
export default Pagination;
export { Pagination };
export type { PaginationMode } from './Pagination';
