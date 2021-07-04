declare const List: import("../utils").WithInstall<import("vue").DefineComponent<{
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
        type: import("vue").PropType<import("./List").ListDirection>;
        default: string;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("load" | "update:error" | "update:loading")[], "load" | "update:error" | "update:loading", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    offset: string | number;
    loading: boolean;
    error: boolean;
    direction: import("./List").ListDirection;
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
    direction: import("./List").ListDirection;
    finished: boolean;
    immediateCheck: boolean;
}>>;
export default List;
export { List };
export type { ListDirection } from './List';
