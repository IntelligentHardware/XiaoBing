import { PropType } from 'vue';
import { UploaderFileListItem } from './utils';
import { Interceptor } from '../utils/interceptor';
import { ImageFit } from '../image';
declare const _default: import("vue").DefineComponent<{
    name: (NumberConstructor | StringConstructor)[];
    index: NumberConstructor;
    imageFit: PropType<ImageFit>;
    lazyLoad: BooleanConstructor;
    deletable: BooleanConstructor;
    previewSize: (NumberConstructor | StringConstructor)[];
    beforeDelete: PropType<Interceptor>;
    item: {
        type: PropType<UploaderFileListItem>;
        required: true;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("delete" | "preview")[], "delete" | "preview", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    item: UploaderFileListItem;
    lazyLoad: boolean;
    deletable: boolean;
} & {
    name?: string | number | undefined;
    index?: number | undefined;
    imageFit?: ImageFit | undefined;
    previewSize?: string | number | undefined;
    beforeDelete?: Interceptor | undefined;
}>, {
    lazyLoad: boolean;
    deletable: boolean;
}>;
export default _default;
