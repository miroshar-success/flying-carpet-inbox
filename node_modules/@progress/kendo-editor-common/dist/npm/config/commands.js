"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unlink = exports.link = exports.superscript = exports.subscript = exports.strikethrough = exports.underline = exports.italic = exports.bold = void 0;
/**
 * The object of the Bold command.
 */
exports.bold = {
    mark: 'strong',
    altMarks: ['b'],
    altStyle: { name: 'font-weight', value: /^(bold(er)?|[5-9]\d{2,})$/ }
};
/**
 * The object of the Italic command.
 */
exports.italic = {
    mark: 'em',
    altMarks: ['i'],
    altStyle: { name: 'font-style', value: /^italic$/i }
};
/**
 * The object of the Underline command.
 */
exports.underline = {
    mark: 'u',
    altStyle: { name: 'text-decoration', value: /^underline$/i }
};
/**
 * The object of the Strikethrough command.
 */
exports.strikethrough = {
    mark: 'del',
    altStyle: { name: 'text-decoration', value: /^line-through$/i }
};
/**
 * The object of the Subscript command.
 */
exports.subscript = {
    mark: 'sub'
};
/**
 * The object of the Superscript command.
 */
exports.superscript = {
    mark: 'sup'
};
/**
 * The object of the Link tool settings.
 */
exports.link = {
    mark: 'link'
};
/**
 * The object of the Unlink tool settings.
 */
exports.unlink = {
    mark: 'link'
};
