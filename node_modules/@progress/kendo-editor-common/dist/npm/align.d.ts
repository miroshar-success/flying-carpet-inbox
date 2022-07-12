import { EditorState } from 'prosemirror-state';
import { AlignRule } from './config/align-rules';
import { Command } from './types/command';
/**
 * Aligning block elements in the selection.
 *
 * @returns {boolean} - Returns true if any alignment is applied.
 */
export declare const alignBlocks: (actions: Array<AlignRule>, commandName?: string) => Command;
export declare const isAligned: (state: EditorState, actions: Array<AlignRule>) => boolean;
