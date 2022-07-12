import * as react from 'react';
import * as reactDom from 'react-dom';
(typeof globalThis !== 'undefined' ? globalThis : window).FullCalendarVDom = {
    Component: react.Component,
    createElement: react.createElement,
    render: reactDom.render,
    createRef: react.createRef,
    Fragment: react.Fragment,
    createContext: react.createContext,
    createPortal: reactDom.createPortal,
    flushToDom: flushToDom,
    unmountComponentAtNode: reactDom.unmountComponentAtNode
};
export function flushToDom() {
    // always sync from top-level
}
//# sourceMappingURL=vdom.js.map