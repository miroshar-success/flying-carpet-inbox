import { TextSelection, Selection, Transaction, EditorState } from 'prosemirror-state';
import { Node } from 'prosemirror-model';
export interface SearchOptions {
    text: string;
    backward?: boolean;
    matchCyclic?: boolean;
    matchCase?: boolean;
    matchWord?: boolean | ((exec: RegExpExecArray) => boolean);
    useRegExp?: boolean;
}
export declare const findAt: (doc: Node, searchOptions: SearchOptions, start: number, end: number, exit: (result: TextSelection[]) => boolean) => TextSelection[];
export declare const find: (state: EditorState | {
    doc: Node;
    selection: Selection;
}, searchOptions: SearchOptions) => TextSelection | null;
export declare const findAll: (doc: Node, searchOptions: SearchOptions) => TextSelection[];
export declare const replace: (selection: Selection | {
    from: number;
    to: number;
}, text: string, transaction: Transaction) => Transaction;
export declare const replaceAll: (state: EditorState, replaceText: string, searchOptions: SearchOptions) => Transaction | null;
