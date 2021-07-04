import { PropType } from 'vue';
import { UploaderResultType, UploaderFileListItem } from './utils';
import { ImagePreviewOptions } from '../image-preview';
import type { ImageFit } from '../image';
import type { Interceptor } from '../utils/interceptor';
declare type PromiseOrNot<T> = T | Promise<T>;
export declare type UploaderBeforeRead = (file: File | File[], detail: {
    name: string | number;
    index: number;
}) => PromiseOrNot<File | File[] | undefined>;
export declare type UploaderAfterRead = (items: UploaderFileListItem | UploaderFileListItem[], detail: {
    name: string | number;
    index: number;
}) => void;
declare const _default: import("vue").DefineComponent<{
    capture: StringConstructor;
    multiple: BooleanConstructor;
    disabled: BooleanConstructor;
    lazyLoad: BooleanConstructor;
    uploadText: StringConstructor;
    deletable: {
        type: BooleanConstructor;
        default: true;
    };
    afterRead: PropType<UploaderAfterRead>;
    showUpload: {
        type: BooleanConstructor;
        default: true;
    };
    beforeRead: PropType<UploaderBeforeRead>;
    beforeDelete: PropType<Interceptor>;
    previewSize: (NumberConstructor | StringConstructor)[];
    previewImage: {
        type: BooleanConstructor;
        default: true;
    };
    previewOptions: PropType<ImagePreviewOptions>;
    previewFullImage: {
        type: BooleanConstructor;
        default: true;
    };
    name: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    accept: {
        type: StringConstructor;
        default: string;
    };
    modelValue: {
        type: PropType<UploaderFileListItem[]>;
        default: () => never[];
    };
    maxSize: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    maxCount: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    imageFit: {
        type: PropType<ImageFit>;
        default: string;
    };
    resultType: {
        type: PropType<UploaderResultType>;
        default: string;
    };
    uploadIcon: {
        type: StringConstructor;
        default: string;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "delete" | "oversize" | "close-preview" | "click-preview")[], "update:modelValue" | "delete" | "oversize" | "close-preview" | "click-preview", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    name: string | number;
    multiple: boolean;
    disabled: boolean;
    modelValue: UploaderFileListItem[];
    lazyLoad: boolean;
    imageFit: ImageFit;
    deletable: boolean;
    showUpload: boolean;
    previewImage: boolean;
    previewFullImage: boolean;
    accept: string;
    maxSize: string | number;
    maxCount: string | number;
    resultType: UploaderResultType;
    uploadIcon: string;
} & {
    beforeRead?: UploaderBeforeRead | undefined;
    afterRead?: UploaderAfterRead | undefined;
    previewSize?: string | number | undefined;
    beforeDelete?: Interceptor | undefined;
    capture?: string | undefined;
    uploadText?: string | undefined;
    previewOptions?: ImagePreviewOptions | undefined;
}>, {
    name: string | number;
    multiple: boolean;
    disabled: boolean;
    modelValue: UploaderFileListItem[];
    lazyLoad: boolean;
    imageFit: ImageFit;
    deletable: boolean;
    showUpload: boolean;
    previewImage: boolean;
    previewFullImage: boolean;
    accept: string;
    maxSize: string | number;
    maxCount: string | number;
    resultType: UploaderResultType;
    uploadIcon: string;
}>;
export default _default;
