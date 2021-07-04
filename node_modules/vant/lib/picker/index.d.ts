declare const Picker: import("../utils").WithInstall<import("vue").DefineComponent<{
    title: StringConstructor;
    loading: BooleanConstructor;
    readonly: BooleanConstructor;
    allowHtml: BooleanConstructor;
    showToolbar: {
        type: BooleanConstructor;
        default: true;
    };
    cancelButtonText: StringConstructor;
    confirmButtonText: StringConstructor;
    itemHeight: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    visibleItemCount: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    swipeDuration: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
} & {
    columnsFieldNames: import("vue").PropType<import("./Picker").PickerFieldNames>;
    columns: {
        type: import("vue").PropType<import("./PickerColumn").PickerOption[] | import("./PickerColumn").PickerColumn[]>;
        default: () => never[];
    };
    defaultIndex: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    toolbarPosition: {
        type: import("vue").PropType<import("./Picker").PickerToolbarPosition>;
        default: string;
    };
    valueKey: {
        type: StringConstructor;
        default: string;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("cancel" | "change" | "confirm")[], "cancel" | "change" | "confirm", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    loading: boolean;
    readonly: boolean;
    allowHtml: boolean;
    itemHeight: string | number;
    swipeDuration: string | number;
    visibleItemCount: string | number;
    defaultIndex: string | number;
    showToolbar: boolean;
    columns: import("./PickerColumn").PickerOption[] | import("./PickerColumn").PickerColumn[];
    toolbarPosition: import("./Picker").PickerToolbarPosition;
    valueKey: string;
} & {
    title?: string | undefined;
    cancelButtonText?: string | undefined;
    confirmButtonText?: string | undefined;
    columnsFieldNames?: import("./Picker").PickerFieldNames | undefined;
}>, {
    loading: boolean;
    readonly: boolean;
    allowHtml: boolean;
    itemHeight: string | number;
    swipeDuration: string | number;
    visibleItemCount: string | number;
    defaultIndex: string | number;
    showToolbar: boolean;
    columns: import("./PickerColumn").PickerOption[] | import("./PickerColumn").PickerColumn[];
    toolbarPosition: import("./Picker").PickerToolbarPosition;
    valueKey: string;
}>>;
export default Picker;
export { Picker };
export type { PickerColumn, PickerOption, PickerFieldNames, PickerObjectColumn, PickerObjectOption, PickerToolbarPosition, } from './Picker';
