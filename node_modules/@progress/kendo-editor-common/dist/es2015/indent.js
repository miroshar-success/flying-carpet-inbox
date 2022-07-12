import { sinkListItem, liftListItem } from 'prosemirror-schema-list';
import { indentRules, outdentRules } from './config/indent-rules';
import { blockNodes, addStyles, changeTextBlock, hasNode } from './blockNode';
import { findNthParentNodeOfType } from './utils';
import { liftBlockquote } from './blockquote';
/**
 * Indenting block elements in the selection.
 *
 * @returns {boolean} - Returns true if any indentation is applied.
 */
export const indentBlocks = (actions, command, dir) => (state, dispatch) => {
    const blocks = blockNodes(state);
    const tr = state.tr;
    tr.setMeta('commandName', command);
    blocks.forEach(node => {
        if (node.type.isTextblock) {
            let newAttrs;
            const action = actions.find(a => a.node === node.type.name);
            if (action) {
                const style = dir === 'rtl' ? action.rtlStyle : action.style;
                const newStyle = {
                    name: style,
                    value: action.step > 0 ? `${action.step}${action.unit}` : ''
                };
                if (node.attrs.style) {
                    const re = new RegExp(`${style}:\\s?(\\d+)${action.unit}`, 'i');
                    const match = node.attrs.style.match(re);
                    if (match) {
                        let newMargin = parseFloat(match[1]) + action.step;
                        newMargin = newMargin <= 0 ? '' : newMargin;
                        newStyle.value = `${newMargin}${newMargin ? action.unit : ''}`;
                    }
                }
                newAttrs = addStyles(node, [newStyle]);
            }
            if (newAttrs) {
                changeTextBlock(tr, node, node.type, newAttrs);
            }
        }
    });
    const result = tr.docChanged;
    if (result) {
        dispatch(tr.scrollIntoView());
    }
    return result;
};
export const isIndented = (state, rules, dir) => {
    const blocks = blockNodes(state);
    let result = false;
    blocks.forEach(node => {
        if (!result && node.type.isTextblock && node.attrs.style) {
            const action = rules.find(a => a.node === node.type.name);
            if (action) {
                const style = dir === 'rtl' ? action.rtlStyle : action.style;
                const reIndent = new RegExp(`${style}:\\s?\\d+${action.unit}`, 'i');
                result = reIndent.test(node.attrs.style);
            }
        }
    });
    return result;
};
export const canIndentAsListItem = (state, nodeType) => {
    return sinkListItem(nodeType)(state);
};
export const canOutdentAsListItem = (state, rules) => {
    const listItem = state.schema.nodes[rules.listsTypes.listItem];
    const orderedList = state.schema.nodes[rules.listsTypes.orderedList];
    const bulletList = state.schema.nodes[rules.listsTypes.bulletList];
    const isNestedInOL = !!findNthParentNodeOfType(orderedList, 2)(state.selection);
    const isNestedInUL = !!findNthParentNodeOfType(bulletList, 2)(state.selection);
    return (isNestedInOL || isNestedInUL) && liftListItem(listItem)(state);
};
export const canBeIndented = (state, rules) => {
    const nodes = state.schema.nodes;
    const listItem = nodes[indentRules.listsTypes.listItem];
    return ((isIndented(state, rules.nodes) || indentRules.nodes.some(rule => nodes[rule.node] && hasNode(state, nodes[rule.node]))) &&
        !hasNode(state, listItem));
};
export const indent = (state, dispatch) => {
    const listItem = state.schema.nodes[indentRules.listsTypes.listItem];
    const isIndentableBlock = canBeIndented(state, indentRules);
    if (canIndentAsListItem(state, listItem)) {
        sinkListItem(listItem)(state, dispatch);
    }
    else if (isIndentableBlock) {
        indentBlocks(indentRules.nodes)(state, dispatch);
    }
};
export const outdent = (state, dispatch) => {
    const nodes = state.schema.nodes;
    const listItem = nodes[outdentRules.listsTypes.listItem];
    const isIndentableBlock = canBeIndented(state, outdentRules);
    if (hasNode(state, nodes.blockquote)) {
        liftBlockquote(state, dispatch);
    }
    else if (canOutdentAsListItem(state, outdentRules)) {
        liftListItem(listItem)(state, dispatch);
    }
    else if (isIndentableBlock) {
        indentBlocks(outdentRules.nodes)(state, dispatch);
    }
};
