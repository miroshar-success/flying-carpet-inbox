import { EditorState, Transaction } from 'prosemirror-state';
import { InlineFormatOptions } from './config/commands';
/**
 * Used by FontSize and FontName tools for getting their state.
 */
export declare const getInlineStyles: (state: EditorState, style: {
    name: string;
    value: RegExp;
}) => Array<string>;
/**
 * Used by bold, italic, ... and link commands.
 */
export declare const toggleInlineFormat: (options: InlineFormatOptions, tr?: Transaction, markAttrs?: any) => (state: any, dispatch: any) => boolean;
/**
 * Used by FontSize, FontName, Color and BackColor commands.
 */
export declare const applyInlineStyle: (options: {
    style: string;
    value: string;
}, command?: string) => (state: any, dispatch: any) => boolean;
