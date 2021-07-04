declare const Coupon: import("../utils").WithInstall<import("vue").DefineComponent<{
    chosen: BooleanConstructor;
    disabled: BooleanConstructor;
    coupon: {
        type: import("vue").PropType<import("./Coupon").CouponInfo>;
        required: true;
    };
    currency: {
        type: StringConstructor;
        default: string;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    disabled: boolean;
    currency: string;
    coupon: import("./Coupon").CouponInfo;
    chosen: boolean;
} & {}>, {
    disabled: boolean;
    currency: string;
    chosen: boolean;
}>>;
export default Coupon;
export { Coupon };
export type { CouponInfo } from './Coupon';
