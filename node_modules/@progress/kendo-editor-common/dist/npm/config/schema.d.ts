import { NodeSpec, MarkSpec } from 'prosemirror-model';
declare const marks: {
    [mark: string]: MarkSpec;
};
export declare const parseStrColgroup: (colgroup: string) => HTMLTableColElement;
declare const nodes: {
    [node: string]: NodeSpec;
};
export { nodes, marks };
