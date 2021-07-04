import { Ref } from 'vue';
import type { BEM } from '../utils/create/bem';
export declare function usePlaceholder(contentRef: Ref<Element | undefined>, bem: BEM): (renderContent: () => JSX.Element) => JSX.Element;
