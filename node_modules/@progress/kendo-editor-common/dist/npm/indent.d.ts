import { EditorState } from 'prosemirror-state';
import { NodeType } from 'prosemirror-model';
import { IndentRule, IndentationRules } from './config/indent-rules';
import { Command } from './types/command';
/**
 * Indenting block elements in the selection.
 *
 * @returns {boolean} - Returns true if any indentation is applied.
 */
export declare const indentBlocks: (actions: Array<IndentRule>, command?: string, dir?: string) => Command;
export declare const isIndented: (state: EditorState, rules: Array<IndentRule>, dir?: string) => boolean;
export declare const canIndentAsListItem: (state: EditorState, nodeType: NodeType) => boolean;
export declare const canOutdentAsListItem: (state: EditorState, rules: IndentationRules) => boolean;
export declare const canBeIndented: (state: EditorState, rules: IndentationRules) => boolean;
export declare const indent: Command;
export declare const outdent: Command;
