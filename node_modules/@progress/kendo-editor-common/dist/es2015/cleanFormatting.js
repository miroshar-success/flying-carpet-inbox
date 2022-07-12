import { cleanTextBlockFormatting } from './blockNode';
import { cleanMarks } from './mark';
/**
 * A command which removes the inline formatting, class and style attributes of paragraph and heading elements in the selection.
 */
export const cleanFormatting = (options = { blocksInSelection: true }) => (state, dispatch) => {
    const tr = state.tr;
    const { blocksInSelection, blockNodeType, exceptMarks } = options;
    const except = (exceptMarks || [state.schema.marks.link]).filter(Boolean);
    cleanMarks(tr, { except });
    cleanTextBlockFormatting(tr, { blocksInSelection, blockNodeType });
    const result = tr.docChanged;
    if (result && dispatch) {
        dispatch(tr);
    }
    return result;
};
