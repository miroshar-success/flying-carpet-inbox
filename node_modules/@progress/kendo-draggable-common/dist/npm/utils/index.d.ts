/** @hidden */
export declare const getDocument: (element: HTMLElement) => Document;
/** @hidden */
export declare const getWindow: (element: HTMLElement) => Window;
/** @hidden */
export declare const scrollableRoot: (element: HTMLElement) => HTMLElement;
/** @hidden */
export declare const isScrollable: (el: HTMLElement) => boolean;
/** @hidden */
export declare const getScrollableParent: (el: HTMLElement) => HTMLElement;
/** @hidden */
export declare const autoScrollVelocity: (mouseX: any, mouseY: any, rect: any) => {
    x: number;
    y: number;
};
/** @hidden */
export declare const scrollableViewPort: (el: HTMLElement, window: Window) => {
    top: number;
    left: number;
    bottom: number;
    right: number;
};
/** @hidden */
export declare const isPointerInsideContainer: (x: number, y: number, container: HTMLElement) => boolean;
