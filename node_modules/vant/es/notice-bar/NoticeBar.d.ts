import { PropType } from 'vue';
export declare type NoticeBarMode = 'closeable' | 'link';
declare const _default: import("vue").DefineComponent<{
    text: StringConstructor;
    mode: PropType<NoticeBarMode>;
    color: StringConstructor;
    leftIcon: StringConstructor;
    wrapable: BooleanConstructor;
    background: StringConstructor;
    scrollable: {
        type: PropType<boolean | null>;
        default: null;
    };
    delay: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    speed: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("close" | "replay")[], "close" | "replay", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    scrollable: boolean | null;
    speed: string | number;
    wrapable: boolean;
    delay: string | number;
} & {
    text?: string | undefined;
    color?: string | undefined;
    leftIcon?: string | undefined;
    background?: string | undefined;
    mode?: NoticeBarMode | undefined;
}>, {
    scrollable: boolean | null;
    speed: string | number;
    wrapable: boolean;
    delay: string | number;
}>;
export default _default;
