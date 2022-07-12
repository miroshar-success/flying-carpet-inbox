/**
 * The settings of the tool which toggles lists.
 */
export interface ListSettings {
    /**
     * The list type of the tool.
     */
    listType: string;
    /**
     * The types of the list nodes that are used by the tool.
     */
    types: {
        orderedList: string;
        bulletList: string;
        listItem: string;
    };
}
export declare const listsTypes: {
    orderedList: string;
    bulletList: string;
    listItem: string;
};
/**
 * The object of the OrderedList tool settings.
 */
export declare const orderedList: ListSettings;
/**
 * The object of the UnorderedList tool settings.
 */
export declare const bulletList: ListSettings;
