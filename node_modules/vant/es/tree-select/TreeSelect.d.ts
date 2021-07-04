import { PropType } from 'vue';
export declare type TreeSelectChild = {
    id: number | string;
    text: string;
    disabled?: boolean;
};
export declare type TreeSelectItem = {
    dot?: boolean;
    text: string;
    badge?: number | string;
    children?: TreeSelectChild[];
    disabled?: boolean;
    className?: unknown;
};
declare const _default: import("vue").DefineComponent<{
    max: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    items: {
        type: PropType<TreeSelectItem[]>;
        default: () => never[];
    };
    height: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    activeId: {
        type: PropType<string | number | (string | number)[]>;
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
    items: TreeSelectItem[];
    activeId: string | number | (string | number)[];
    selectedIcon: string;
    mainActiveIndex: string | number;
} & {}>, {
    max: string | number;
    height: string | number;
    items: TreeSelectItem[];
    activeId: string | number | (string | number)[];
    selectedIcon: string;
    mainActiveIndex: string | number;
}>;
export default _default;
