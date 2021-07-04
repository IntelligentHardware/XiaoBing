import { PropType, ExtractPropTypes } from 'vue';
export declare const STEPS_KEY: unique symbol;
export declare type StepsDirection = 'horizontal' | 'vertical';
declare const props: {
    iconPrefix: StringConstructor;
    finishIcon: StringConstructor;
    activeColor: StringConstructor;
    inactiveIcon: StringConstructor;
    inactiveColor: StringConstructor;
    active: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    direction: {
        type: PropType<StepsDirection>;
        default: string;
    };
    activeIcon: {
        type: StringConstructor;
        default: string;
    };
};
export declare type StepsProvide = {
    props: ExtractPropTypes<typeof props>;
    onClickStep: (index: number) => void;
};
declare const _default: import("vue").DefineComponent<{
    iconPrefix: StringConstructor;
    finishIcon: StringConstructor;
    activeColor: StringConstructor;
    inactiveIcon: StringConstructor;
    inactiveColor: StringConstructor;
    active: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    direction: {
        type: PropType<StepsDirection>;
        default: string;
    };
    activeIcon: {
        type: StringConstructor;
        default: string;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click-step"[], "click-step", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    active: string | number;
    direction: StepsDirection;
    activeIcon: string;
} & {
    iconPrefix?: string | undefined;
    activeColor?: string | undefined;
    inactiveColor?: string | undefined;
    finishIcon?: string | undefined;
    inactiveIcon?: string | undefined;
}>, {
    active: string | number;
    direction: StepsDirection;
    activeIcon: string;
}>;
export default _default;
