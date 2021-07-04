declare const Card: import("../utils").WithInstall<import("vue").DefineComponent<{
    tag: StringConstructor;
    num: (NumberConstructor | StringConstructor)[];
    desc: StringConstructor;
    thumb: StringConstructor;
    title: StringConstructor;
    price: (NumberConstructor | StringConstructor)[];
    centered: BooleanConstructor;
    lazyLoad: BooleanConstructor;
    thumbLink: StringConstructor;
    originPrice: (NumberConstructor | StringConstructor)[];
    currency: {
        type: StringConstructor;
        default: string;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click-thumb"[], "click-thumb", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    lazyLoad: boolean;
    centered: boolean;
    currency: string;
} & {
    title?: string | undefined;
    desc?: string | undefined;
    tag?: string | undefined;
    num?: string | number | undefined;
    thumb?: string | undefined;
    price?: string | number | undefined;
    thumbLink?: string | undefined;
    originPrice?: string | number | undefined;
}>, {
    lazyLoad: boolean;
    centered: boolean;
    currency: string;
}>>;
export default Card;
export { Card };
