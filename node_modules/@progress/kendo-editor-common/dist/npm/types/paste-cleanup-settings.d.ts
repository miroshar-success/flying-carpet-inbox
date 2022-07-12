/**
 * The settings passed to the `pasteCleanup` function.
 */
export interface PasteCleanupSettings {
    /**
     * If set to `true`, converts the MS Word lists into HTML lists.
     */
    convertMsLists?: boolean;
    /**
     * Removes the specified tags from the HTML and keeps its child nodes.
     */
    stripTags?: string;
    /**
     * An object containing attributeName/callback pairs.
     * The callback will be called for the corresponding attribute name and the attribute object will be passed as a parameter.
     */
    attributes?: {
        [attributeName: string]: (attr: Attr) => void;
    };
}
