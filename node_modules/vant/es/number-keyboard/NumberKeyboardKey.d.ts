import { PropType } from 'vue';
export declare type KeyType = '' | 'delete' | 'extra' | 'close';
declare const _default: import("vue").DefineComponent<{
    type: PropType<KeyType>;
    text: (NumberConstructor | StringConstructor)[];
    color: StringConstructor;
    wider: BooleanConstructor;
    large: BooleanConstructor;
    loading: BooleanConstructor;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "press"[], "press", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    loading: boolean;
    large: boolean;
    wider: boolean;
} & {
    text?: string | number | undefined;
    color?: string | undefined;
    type?: KeyType | undefined;
}>, {
    loading: boolean;
    large: boolean;
    wider: boolean;
}>;
export default _default;
