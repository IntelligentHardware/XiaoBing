declare const Steps: import("../utils").WithInstall<import("vue").DefineComponent<{
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
        type: import("vue").PropType<import("./Steps").StepsDirection>;
        default: string;
    };
    activeIcon: {
        type: StringConstructor;
        default: string;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click-step"[], "click-step", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    active: string | number;
    direction: import("./Steps").StepsDirection;
    activeIcon: string;
} & {
    iconPrefix?: string | undefined;
    activeColor?: string | undefined;
    inactiveColor?: string | undefined;
    finishIcon?: string | undefined;
    inactiveIcon?: string | undefined;
}>, {
    active: string | number;
    direction: import("./Steps").StepsDirection;
    activeIcon: string;
}>>;
export default Steps;
export { Steps };
