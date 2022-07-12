import { MarkType, NodeType } from 'prosemirror-model';
import { EditorState, Transaction } from 'prosemirror-state';
/**
 * A command which removes the inline formatting, class and style attributes of paragraph and heading elements in the selection.
 */
export declare const cleanFormatting: (options?: CleanFormattingOptions) => (state: EditorState, dispatch?: (tr: Transaction) => void) => boolean;
/**
 * The cleanFormatting command options.
 * Defaults to `{ blocksInSelection: true }`.
 */
export interface CleanFormattingOptions {
    /**
     * If set to `true`, the command will skip the text-block nodes which are partially selected.
     * This option affects the text-block nodes themselves(paragraph, heading) and does not affects marks cleaning.
     */
    blocksInSelection?: boolean;
    /**
     * If specified, the text-block nodes will be changed to that type.
     * Usefull if the command have to change the `heading` nodes to `paragraph`.
     */
    blockNodeType?: NodeType;
    /**
     * Specifies which marks to be exceptional. Empty array will clean all marks.
     * Defaults to `[ state.schema.marks.link ]`.
     */
    exceptMarks?: Array<MarkType>;
}
