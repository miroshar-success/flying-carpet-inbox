const detectBrowser = () => {
    const ua = window && window.navigator.userAgent;
    if (!ua) {
        return false;
    }
    let browser = false;
    let match = [];
    let browserRxs = {
        edge: /(edge)[ \/]([\w.]+)/i,
        webkit: /(chrome|crios)[ \/]([\w.]+)/i,
        safari: /(webkit)[ \/]([\w.]+)/i,
        opera: /(opera)(?:.*version|)[ \/]([\w.]+)/i,
        msie: /(msie\s|trident.*? rv:)([\w.]+)/i,
        mozilla: /(mozilla)(?:.*? rv:([\w.]+)|)/i
    };
    for (var agent in browserRxs) {
        if (browserRxs.hasOwnProperty(agent)) {
            match = ua.match(browserRxs[agent]);
            if (match) {
                browser = {};
                browser[agent] = true;
                browser[match[1].toLowerCase().split(" ")[0].split("/")[0]] = true;
                browser.version = parseInt(document.DOCUMENT_NODE || match[2], 10);
                break;
            }
        }
    }
    return browser;
};
/** @hidden */
export const getDocument = (element) => {
    return element ? element.ownerDocument || window.document : window.document;
};
/** @hidden */
export const getWindow = (element) => {
    const document = getDocument(element);
    return document
        ? document.defaultView || window
        : window;
};
/** @hidden */
export const scrollableRoot = (element) => {
    const support = { browser: detectBrowser() };
    const document = getDocument(element);
    return (support.browser.edge || support.browser.safari) ? document.body : document.documentElement;
};
/** @hidden */
export const isScrollable = (el) => {
    if (el && el.className && typeof (el.className) === 'string' && el.className.indexOf('k-auto-scrollable') > -1) {
        return true;
    }
    let overflow = window.getComputedStyle(el, 'overflow').overflow;
    return overflow.indexOf('auto') > -1 || overflow.indexOf('scroll') > -1;
};
/** @hidden */
export const getScrollableParent = (el) => {
    const root = scrollableRoot(el);
    if (!el || el === document.body || el === document.documentElement) {
        return root;
    }
    let parent = el;
    while (parent
        && parent !== document.body
        && parent.nodeType !== Node.DOCUMENT_FRAGMENT_NODE
        && parent.nodeType !== Node.DOCUMENT_NODE
        && !isScrollable(parent)) {
        parent = parent.parentNode;
    }
    if (parent && (parent === document.body || parent.nodeType === Node.DOCUMENT_FRAGMENT_NODE)) {
        return root;
    }
    return parent;
};
/** @hidden */
export const autoScrollVelocity = (mouseX, mouseY, rect) => {
    let velocity = { x: 0, y: 0 };
    let AUTO_SCROLL_AREA = 50;
    if (mouseX - rect.left < AUTO_SCROLL_AREA) {
        velocity.x = -(AUTO_SCROLL_AREA - (mouseX - rect.left));
    }
    else if (rect.right - mouseX < AUTO_SCROLL_AREA) {
        velocity.x = AUTO_SCROLL_AREA - (rect.right - mouseX);
    }
    if (mouseY - rect.top < AUTO_SCROLL_AREA) {
        velocity.y = -(AUTO_SCROLL_AREA - (mouseY - rect.top));
    }
    else if (rect.bottom - mouseY < AUTO_SCROLL_AREA) {
        velocity.y = AUTO_SCROLL_AREA - (rect.bottom - mouseY);
    }
    return velocity;
};
/** @hidden */
export const scrollableViewPort = (el, window) => {
    let root = scrollableRoot(el);
    if (el === root) {
        return {
            top: root.scrollTop,
            left: root.scrollLeft,
            bottom: root.scrollTop + window.innerHeight,
            right: root.scrollLeft + window.innerWidth
        };
    }
    else {
        const rect = el.getBoundingClientRect();
        return {
            bottom: rect.top + rect.height,
            right: rect.left + rect.width,
            left: rect.left,
            top: rect.top
        };
    }
};
/** @hidden */
export const isPointerInsideContainer = (x, y, container) => {
    const rect = container.getBoundingClientRect();
    return (rect.top <= y &&
        rect.left <= x &&
        y <= rect.bottom &&
        x <= rect.right);
};
