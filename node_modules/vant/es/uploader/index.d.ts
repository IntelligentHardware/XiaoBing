declare const Uploader: import("../utils").WithInstall<import("vue").DefineComponent<{
    capture: StringConstructor;
    multiple: BooleanConstructor;
    disabled: BooleanConstructor;
    lazyLoad: BooleanConstructor;
    uploadText: StringConstructor;
    deletable: {
        type: BooleanConstructor;
        default: true;
    };
    afterRead: import("vue").PropType<import("./Uploader").UploaderAfterRead>;
    showUpload: {
        type: BooleanConstructor;
        default: true;
    };
    beforeRead: import("vue").PropType<import("./Uploader").UploaderBeforeRead>;
    beforeDelete: import("vue").PropType<import("../utils/interceptor").Interceptor>;
    previewSize: (NumberConstructor | StringConstructor)[];
    previewImage: {
        type: BooleanConstructor;
        default: true;
    };
    previewOptions: import("vue").PropType<import("..").ImagePreviewOptions>;
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
        type: import("vue").PropType<import("./utils").UploaderFileListItem[]>;
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
        type: import("vue").PropType<import("..").ImageFit>;
        default: string;
    };
    resultType: {
        type: import("vue").PropType<import("./utils").UploaderResultType>;
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
    modelValue: import("./utils").UploaderFileListItem[];
    lazyLoad: boolean;
    imageFit: import("..").ImageFit;
    deletable: boolean;
    showUpload: boolean;
    previewImage: boolean;
    previewFullImage: boolean;
    accept: string;
    maxSize: string | number;
    maxCount: string | number;
    resultType: import("./utils").UploaderResultType;
    uploadIcon: string;
} & {
    beforeRead?: import("./Uploader").UploaderBeforeRead | undefined;
    afterRead?: import("./Uploader").UploaderAfterRead | undefined;
    previewSize?: string | number | undefined;
    beforeDelete?: import("../utils/interceptor").Interceptor | undefined;
    capture?: string | undefined;
    uploadText?: string | undefined;
    previewOptions?: import("..").ImagePreviewOptions | undefined;
}>, {
    name: string | number;
    multiple: boolean;
    disabled: boolean;
    modelValue: import("./utils").UploaderFileListItem[];
    lazyLoad: boolean;
    imageFit: import("..").ImageFit;
    deletable: boolean;
    showUpload: boolean;
    previewImage: boolean;
    previewFullImage: boolean;
    accept: string;
    maxSize: string | number;
    maxCount: string | number;
    resultType: import("./utils").UploaderResultType;
    uploadIcon: string;
}>>;
export default Uploader;
export { Uploader };
export type { UploaderResultType, UploaderFileListItem } from './utils';
