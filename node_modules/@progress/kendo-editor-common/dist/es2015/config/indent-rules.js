import { listsTypes } from './list-settings';
/**
 * The object of the Indent tool settings.
 */
export const indentRules = {
    nodes: [{
            node: 'paragraph',
            style: 'margin-left',
            rtlStyle: 'margin-right',
            step: 30,
            unit: 'px'
        }, {
            node: 'heading',
            style: 'margin-left',
            rtlStyle: 'margin-right',
            step: 30,
            unit: 'px'
        }],
    listsTypes: Object.assign({}, listsTypes)
};
/**
 * The object of the Outdent tool settings.
 */
export const outdentRules = {
    nodes: [{
            node: 'paragraph',
            style: 'margin-left',
            rtlStyle: 'margin-right',
            step: -30,
            unit: 'px'
        }, {
            node: 'heading',
            style: 'margin-left',
            rtlStyle: 'margin-right',
            step: -30,
            unit: 'px'
        }],
    listsTypes: Object.assign({}, listsTypes)
};
