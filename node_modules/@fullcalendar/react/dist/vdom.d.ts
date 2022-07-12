import * as react from 'react';
import * as reactDom from 'react-dom';
import ReactJSX = JSX;
export declare type ReactComponentChild = react.ReactNode | object | string | number | boolean | null | undefined;
declare global {
    namespace FullCalendarVDom {
        export import Ref = react.Ref;
        export import RefObject = react.RefObject;
        export import ComponentType = react.ComponentType;
        export import VNode = react.ReactNode;
        export import Context = react.Context;
        export import Component = react.Component;
        type ComponentChild = ReactComponentChild;
        type ComponentChildren = ReactComponentChild | ReactComponentChild[];
        export import createElement = react.createElement;
        export import render = reactDom.render;
        export import createRef = react.createRef;
        export import Fragment = react.Fragment;
        export import createContext = react.createContext;
        export import createPortal = reactDom.createPortal;
        type VUIEvent = react.UIEvent;
        function flushToDom(): void;
        function unmountComponentAtNode(node: HTMLElement): void;
    }
    namespace createElement {
        export import JSX = ReactJSX;
    }
}
export declare function flushToDom(): void;
