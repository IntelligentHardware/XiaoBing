declare const Sticky: import("../utils").WithInstall<import("vue").DefineComponent<{
    zIndex: (NumberConstructor | StringConstructor)[];
    container: import("vue").PropType<Element>;
    offsetTop: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    offsetBottom: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    position: {
        type: import("vue").PropType<import("./Sticky").StickyPosition>;
        default: string;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("scroll" | "change")[], "scroll" | "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    position: import("./Sticky").StickyPosition;
    offsetTop: string | number;
    offsetBottom: string | number;
} & {
    zIndex?: string | number | undefined;
    container?: Element | undefined;
}>, {
    position: import("./Sticky").StickyPosition;
    offsetTop: string | number;
    offsetBottom: string | number;
}>>;
export default Sticky;
export { Sticky };
export type { StickyPosition } from './Sticky';
