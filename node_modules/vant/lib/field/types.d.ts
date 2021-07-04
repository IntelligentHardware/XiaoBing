export declare type FieldType = 'tel' | 'text' | 'digit' | 'number' | 'search' | 'password' | 'textarea';
export declare type FieldTextAlign = 'left' | 'center' | 'right';
export declare type FieldClearTrigger = 'always' | 'focus';
export declare type FieldFormatTrigger = 'onBlur' | 'onChange';
export declare type FieldValidateTrigger = 'onBlur' | 'onChange' | 'onSubmit';
export declare type FieldAutosizeConfig = {
    maxHeight?: number;
    minHeight?: number;
};
export declare type FieldValidateError = {
    name?: string;
    message: string;
};
export declare type FieldRule = {
    pattern?: RegExp;
    trigger?: FieldValidateTrigger;
    message?: string | ((value: any, rule: FieldRule) => string);
    required?: boolean;
    validator?: (value: any, rule: FieldRule) => boolean | string | Promise<boolean | string>;
    formatter?: (value: any, rule: FieldRule) => string;
};
declare global {
    interface EventTarget {
        composing?: boolean;
    }
}
