import { PropType } from 'vue';
export declare type CouponInfo = {
    id: string | number;
    name: string;
    endAt: number;
    value: number;
    startAt: number;
    reason?: string;
    discount?: number;
    unitDesc?: string;
    condition?: string;
    valueDesc?: string;
    description: string;
    denominations?: number;
    originCondition?: number;
};
declare const _default: import("vue").DefineComponent<{
    chosen: BooleanConstructor;
    disabled: BooleanConstructor;
    coupon: {
        type: PropType<CouponInfo>;
        required: true;
    };
    currency: {
        type: StringConstructor;
        default: string;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    disabled: boolean;
    currency: string;
    coupon: CouponInfo;
    chosen: boolean;
} & {}>, {
    disabled: boolean;
    currency: string;
    chosen: boolean;
}>;
export default _default;
