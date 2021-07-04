import { PropType } from 'vue';
export declare type DividerContentPosition = 'left' | 'center' | 'right';
declare const _default: import("vue").DefineComponent<{
    dashed: BooleanConstructor;
    hairline: {
        type: BooleanConstructor;
        default: true;
    };
    contentPosition: {
        type: PropType<DividerContentPosition>;
        default: string;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    dashed: boolean;
    hairline: boolean;
    contentPosition: DividerContentPosition;
} & {}>, {
    dashed: boolean;
    hairline: boolean;
    contentPosition: DividerContentPosition;
}>;
export default _default;
