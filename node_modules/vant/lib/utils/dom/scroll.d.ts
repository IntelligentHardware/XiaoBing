export declare type ScrollElement = Element | Window;
export declare function getScrollTop(el: ScrollElement): number;
export declare function setScrollTop(el: ScrollElement, value: number): void;
export declare function getRootScrollTop(): number;
export declare function setRootScrollTop(value: number): void;
export declare function getElementTop(el: ScrollElement, scroller?: ScrollElement): number;
export declare function getVisibleHeight(el: ScrollElement): number;
export declare function getVisibleTop(el: ScrollElement): number;
export declare function resetScroll(): void;
