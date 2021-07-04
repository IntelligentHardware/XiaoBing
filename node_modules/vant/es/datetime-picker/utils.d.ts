import { PropType } from 'vue';
export declare type ColumnType = 'year' | 'month' | 'day' | 'hour' | 'minute';
export declare type DatetimePickerType = 'date' | 'time' | 'datetime' | 'datehour' | 'month-day' | 'year-month';
export declare const sharedProps: {
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
    filter: PropType<(type: string, values: string[]) => string[]>;
    columnsOrder: PropType<ColumnType[]>;
    formatter: {
        type: PropType<(type: string, value: string) => string>;
        default: (type: string, value: string) => string;
    };
};
export declare const pickerKeys: ("title" | "loading" | "readonly" | "allowHtml" | "itemHeight" | "swipeDuration" | "visibleItemCount" | "showToolbar" | "cancelButtonText" | "confirmButtonText")[];
export declare function times<T>(n: number, iteratee: (index: number) => T): T[];
export declare function getTrueValue(value: string | undefined): number;
export declare function getMonthEndDay(year: number, month: number): number;
