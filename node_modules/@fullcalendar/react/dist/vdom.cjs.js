'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var reactDom = require('react-dom');

(typeof globalThis !== 'undefined' ? globalThis : window).FullCalendarVDom = {
    Component: React.Component,
    createElement: React.createElement,
    render: reactDom.render,
    createRef: React.createRef,
    Fragment: React.Fragment,
    createContext: React.createContext,
    createPortal: reactDom.createPortal,
    flushToDom: flushToDom,
    unmountComponentAtNode: reactDom.unmountComponentAtNode
};
function flushToDom() {
    // always sync from top-level
}

exports.flushToDom = flushToDom;
