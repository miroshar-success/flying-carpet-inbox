import { MarkType, Mark } from 'prosemirror-model';
import { EditorState, Transaction } from 'prosemirror-state';
import { InlineFormatOptions } from './config/commands';
import { Command } from './types/command';
import { ActiveMarks } from './types/active-marks';
export declare const markApplies: (doc: any, ranges: any, type: any) => boolean;
export declare const toggleMark: (markType: MarkType, attrs: any, tr: Transaction) => (state: any, dispatch: any) => boolean;
export declare const removeMark: (tr: any, from: any, to: any, mark: any) => any;
export declare const removeMarks: (marks: any, state: any, dispatch: any, tr: any) => boolean;
export declare const removeAllMarks: ({ except }?: {
    except?: MarkType | MarkType[];
}) => Command;
/**
 * Removes the marks from the selection base on the passed parameter.
 * Requires to dispatch the transaction.
 *
 * @example
 * See `removeAllMarks` or `cleanFormatting` function.
 */
export declare const cleanMarks: (tr: Transaction, { except }: {
    except?: MarkType[];
}) => void;
/**
 * Checks if a mark exists in the selection.
 * Used for checking the state of bold, italic, ... and unlink tools.
 */
export declare const hasMark: (state: EditorState, options: InlineFormatOptions) => boolean;
export declare const styleValue: (mark: Mark | undefined, style: {
    name: string;
    value: RegExp;
}) => string | null;
/**
 * Returns the marks of a specific type for every inline node in the selection.
 */
export declare const selectionMarks: (state: EditorState, markType: MarkType) => Array<Mark | undefined>;
/**
 * Returns the specified mark which wraps the selection.
 * Used by link tools.
 */
export declare const getMark: (state: EditorState, markType: MarkType) => Mark | undefined;
/**
 * **Deprecated.** Use `selectionMarks` function instead.
 */
export declare const getActiveMarks: (state: EditorState, markType: MarkType) => ActiveMarks;
