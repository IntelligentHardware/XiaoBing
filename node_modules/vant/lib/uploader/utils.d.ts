import type { ImageFit } from '../image';
import type { Interceptor } from '../utils/interceptor';
declare const name: string, bem: (el?: import("../utils/create/bem").Mods | undefined, mods?: import("../utils/create/bem").Mods | undefined) => import("../utils/create/bem").Mods;
export { name, bem };
export declare type UploaderResultType = 'dataUrl' | 'text' | 'file';
export declare type UploaderFileListItem = {
    url?: string;
    file?: File;
    content?: string;
    isImage?: boolean;
    status?: '' | 'uploading' | 'done' | 'failed';
    message?: string;
    imageFit?: ImageFit;
    deletable?: boolean;
    previewSize?: number | string;
    beforeDelete?: Interceptor;
};
export declare function toArray<T>(item: T | T[]): T[];
export declare function readFileContent(file: File, resultType: UploaderResultType): Promise<string | void>;
export declare function isOversize(items: UploaderFileListItem | UploaderFileListItem[], maxSize: number | string): boolean;
export declare function filterFiles(items: UploaderFileListItem[], maxSize: number | string): {
    valid: UploaderFileListItem[];
    invalid: UploaderFileListItem[];
};
export declare function isImageUrl(url: string): boolean;
export declare function isImageFile(item: UploaderFileListItem): boolean;
