declare const DropdownMenu: import("../utils").WithInstall<import("vue").DefineComponent<{
    overlay: {
        type: BooleanConstructor;
        default: true;
    };
    zIndex: (NumberConstructor | StringConstructor)[];
    activeColor: StringConstructor;
    closeOnClickOutside: {
        type: BooleanConstructor;
        default: true;
    };
    closeOnClickOverlay: {
        type: BooleanConstructor;
        default: true;
    };
    duration: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    direction: {
        type: import("vue").PropType<import("./DropdownMenu").DropdownMenuDirection>;
        default: string;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    overlay: boolean;
    duration: string | number;
    closeOnClickOverlay: boolean;
    direction: import("./DropdownMenu").DropdownMenuDirection;
    closeOnClickOutside: boolean;
} & {
    zIndex?: string | number | undefined;
    activeColor?: string | undefined;
}>, {
    overlay: boolean;
    duration: string | number;
    closeOnClickOverlay: boolean;
    direction: import("./DropdownMenu").DropdownMenuDirection;
    closeOnClickOutside: boolean;
}>>;
export default DropdownMenu;
export { DropdownMenu };
export type { DropdownMenuDirection } from './DropdownMenu';
