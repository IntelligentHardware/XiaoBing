import { PropType } from 'vue';
export declare type ListDirection = 'up' | 'down';
declare const _default: import("vue").DefineComponent<{
    error: BooleanConstructor;
    loading: BooleanConstructor;
    finished: BooleanConstructor;
    errorText: StringConstructor;
    loadingText: StringConstructor;
    finishedText: StringConstructor;
    immediateCheck: {
        type: BooleanConstructor;
        default: true;
    };
    offset: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    direction: {
        type: PropType<ListDirection>;
        default: string;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("load" | "update:error" | "update:loading")[], "load" | "update:error" | "update:loading", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    offset: string | number;
    loading: boolean;
    error: boolean;
    direction: ListDirection;
    finished: boolean;
    immediateCheck: boolean;
} & {
    loadingText?: string | undefined;
    errorText?: string | undefined;
    finishedText?: string | undefined;
}>, {
    offset: string | number;
    loading: boolean;
    error: boolean;
    direction: ListDirection;
    finished: boolean;
    immediateCheck: boolean;
}>;
export default _default;
