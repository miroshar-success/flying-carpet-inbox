import { EditorState, Transaction } from 'prosemirror-state';
export declare const blockquote: (state: EditorState, dispatch?: (tr: Transaction) => void) => boolean;
export declare const liftBlockquote: (state: EditorState, dispatch?: (tr: Transaction) => void) => boolean;
