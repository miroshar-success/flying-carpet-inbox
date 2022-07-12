/**
 * The object of the Bold command.
 */
export const bold = {
    mark: 'strong',
    altMarks: ['b'],
    altStyle: { name: 'font-weight', value: /^(bold(er)?|[5-9]\d{2,})$/ }
};
/**
 * The object of the Italic command.
 */
export const italic = {
    mark: 'em',
    altMarks: ['i'],
    altStyle: { name: 'font-style', value: /^italic$/i }
};
/**
 * The object of the Underline command.
 */
export const underline = {
    mark: 'u',
    altStyle: { name: 'text-decoration', value: /^underline$/i }
};
/**
 * The object of the Strikethrough command.
 */
export const strikethrough = {
    mark: 'del',
    altStyle: { name: 'text-decoration', value: /^line-through$/i }
};
/**
 * The object of the Subscript command.
 */
export const subscript = {
    mark: 'sub'
};
/**
 * The object of the Superscript command.
 */
export const superscript = {
    mark: 'sup'
};
/**
 * The object of the Link tool settings.
 */
export const link = {
    mark: 'link'
};
/**
 * The object of the Unlink tool settings.
 */
export const unlink = {
    mark: 'link'
};
