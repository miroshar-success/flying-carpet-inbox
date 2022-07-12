import { Plugin, Transaction } from 'prosemirror-state';
declare class ResizeState {
    activeHandle: string;
    dragging: {
        startX: number;
        startY: number;
    } | null;
    nodePosition: number;
    constructor(activeHandle: string, dragging: {
        startX: number;
        startY: number;
    } | null, nodePosition: number);
    apply(tr: Transaction): ResizeState;
}
export declare const tableResizing: (options?: {
    node: string;
}) => Plugin<ResizeState>;
export {};
