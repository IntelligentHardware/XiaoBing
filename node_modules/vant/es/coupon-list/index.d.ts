declare const CouponList: import("../utils").WithInstall<import("vue").DefineComponent<{
    showCount: {
        type: BooleanConstructor;
        default: true;
    };
    enabledTitle: StringConstructor;
    disabledTitle: StringConstructor;
    showExchangeBar: {
        type: BooleanConstructor;
        default: true;
    };
    showCloseButton: {
        type: BooleanConstructor;
        default: true;
    };
    closeButtonText: StringConstructor;
    inputPlaceholder: StringConstructor;
    exchangeButtonText: StringConstructor;
    exchangeButtonLoading: BooleanConstructor;
    exchangeButtonDisabled: BooleanConstructor;
    code: {
        type: StringConstructor;
        default: string;
    };
    exchangeMinLength: {
        type: NumberConstructor;
        default: number;
    };
    chosenCoupon: {
        type: NumberConstructor;
        default: number;
    };
    coupons: {
        type: import("vue").PropType<import("..").CouponInfo[]>;
        default: () => never[];
    };
    disabledCoupons: {
        type: import("vue").PropType<import("..").CouponInfo[]>;
        default: () => never[];
    };
    displayedCouponIndex: {
        type: NumberConstructor;
        default: number;
    };
    currency: {
        type: StringConstructor;
        default: string;
    };
    emptyImage: {
        type: StringConstructor;
        default: string;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "exchange" | "update:code")[], "change" | "exchange" | "update:code", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    code: string;
    currency: string;
    coupons: import("..").CouponInfo[];
    chosenCoupon: number;
    showCount: boolean;
    showExchangeBar: boolean;
    showCloseButton: boolean;
    exchangeButtonLoading: boolean;
    exchangeButtonDisabled: boolean;
    exchangeMinLength: number;
    disabledCoupons: import("..").CouponInfo[];
    displayedCouponIndex: number;
    emptyImage: string;
} & {
    enabledTitle?: string | undefined;
    disabledTitle?: string | undefined;
    closeButtonText?: string | undefined;
    inputPlaceholder?: string | undefined;
    exchangeButtonText?: string | undefined;
}>, {
    code: string;
    currency: string;
    coupons: import("..").CouponInfo[];
    chosenCoupon: number;
    showCount: boolean;
    showExchangeBar: boolean;
    showCloseButton: boolean;
    exchangeButtonLoading: boolean;
    exchangeButtonDisabled: boolean;
    exchangeMinLength: number;
    disabledCoupons: import("..").CouponInfo[];
    displayedCouponIndex: number;
    emptyImage: string;
}>>;
export default CouponList;
export { CouponList };
