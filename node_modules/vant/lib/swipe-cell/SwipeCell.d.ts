import { PropType } from 'vue';
import { Interceptor } from '../utils/interceptor';
export declare type SwipeCellSide = 'left' | 'right';
export declare type SwipeCellPosition = SwipeCellSide | 'cell' | 'outside';
declare const _default: import("vue").DefineComponent<{
    disabled: BooleanConstructor;
    leftWidth: (NumberConstructor | StringConstructor)[];
    rightWidth: (NumberConstructor | StringConstructor)[];
    beforeClose: PropType<Interceptor>;
    stopPropagation: BooleanConstructor;
    name: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("open" | "click" | "close")[], "open" | "click" | "close", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    name: string | number;
    disabled: boolean;
    stopPropagation: boolean;
} & {
    beforeClose?: Interceptor | undefined;
    leftWidth?: string | number | undefined;
    rightWidth?: string | number | undefined;
}>, {
    name: string | number;
    disabled: boolean;
    stopPropagation: boolean;
}>;
export default _default;
