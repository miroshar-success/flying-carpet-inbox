/**
 * The setting of the IndentAction tool.
 */
export interface IndentRule {
    node: string;
    style: string;
    rtlStyle: string;
    step: number;
    unit: string;
}
/**
 * The settings of the tool which applies indentation.
 */
export interface IndentationRules {
    nodes: Array<IndentRule>;
    /**
     * The list node types of the Indent and Outdent tools.
     */
    listsTypes: {
        orderedList: string;
        bulletList: string;
        listItem: string;
    };
}
/**
 * The object of the Indent tool settings.
 */
export declare const indentRules: IndentationRules;
/**
 * The object of the Outdent tool settings.
 */
export declare const outdentRules: IndentationRules;
