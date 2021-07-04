import { PropType } from 'vue';
export declare type TagType = 'default' | 'primary' | 'success' | 'warning' | 'danger';
declare const _default: import("vue").DefineComponent<{
    size: StringConstructor;
    mark: BooleanConstructor;
    show: {
        type: BooleanConstructor;
        default: true;
    };
    color: StringConstructor;
    plain: BooleanConstructor;
    round: BooleanConstructor;
    textColor: StringConstructor;
    closeable: BooleanConstructor;
    type: {
        type: PropType<TagType>;
        default: string;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "close"[], "close", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    mark: boolean;
    round: boolean;
    type: TagType;
    show: boolean;
    plain: boolean;
    closeable: boolean;
} & {
    color?: string | undefined;
    size?: string | undefined;
    textColor?: string | undefined;
}>, {
    mark: boolean;
    round: boolean;
    type: TagType;
    show: boolean;
    plain: boolean;
    closeable: boolean;
}>;
export default _default;
