declare const TreeSelect: import("../utils").WithInstall<import("vue").DefineComponent<{
    max: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    items: {
        type: import("vue").PropType<import("./TreeSelect").TreeSelectItem[]>;
        default: () => never[];
    };
    height: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    activeId: {
        type: import("vue").PropType<string | number | (string | number)[]>;
        default: number;
    };
    selectedIcon: {
        type: StringConstructor;
        default: string;
    };
    mainActiveIndex: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("click-item" | "click-nav" | "update:activeId" | "update:mainActiveIndex")[], "click-item" | "click-nav" | "update:activeId" | "update:mainActiveIndex", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    max: string | number;
    height: string | number;
    items: import("./TreeSelect").TreeSelectItem[];
    activeId: string | number | (string | number)[];
    selectedIcon: string;
    mainActiveIndex: string | number;
} & {}>, {
    max: string | number;
    height: string | number;
    items: import("./TreeSelect").TreeSelectItem[];
    activeId: string | number | (string | number)[];
    selectedIcon: string;
    mainActiveIndex: string | number;
}>>;
export default TreeSelect;
export { TreeSelect };
export type { TreeSelectItem, TreeSelectChild } from './TreeSelect';
