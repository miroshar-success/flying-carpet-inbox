var detectBrowser = function () {
    var ua = window && window.navigator.userAgent;
    if (!ua) {
        return false;
    }
    var browser = false;
    var match = [];
    var browserRxs = {
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
export var getDocument = function (element) {
    return element ? element.ownerDocument || window.document : window.document;
};
/** @hidden */
export var getWindow = function (element) {
    var document = getDocument(element);
    return document
        ? document.defaultView || window
        : window;
};
/** @hidden */
export var scrollableRoot = function (element) {
    var support = { browser: detectBrowser() };
    var document = getDocument(element);
    return (support.browser.edge || support.browser.safari) ? document.body : document.documentElement;
};
/** @hidden */
export var isScrollable = function (el) {
    if (el && el.className && typeof (el.className) === 'string' && el.className.indexOf('k-auto-scrollable') > -1) {
        return true;
    }
    var overflow = window.getComputedStyle(el, 'overflow').overflow;
    return overflow.indexOf('auto') > -1 || overflow.indexOf('scroll') > -1;
};
/** @hidden */
export var getScrollableParent = function (el) {
    var root = scrollableRoot(el);
    if (!el || el === document.body || el === document.documentElement) {
        return root;
    }
    var parent = el;
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
export var autoScrollVelocity = function (mouseX, mouseY, rect) {
    var velocity = { x: 0, y: 0 };
    var AUTO_SCROLL_AREA = 50;
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
export var scrollableViewPort = function (el, window) {
    var root = scrollableRoot(el);
    if (el === root) {
        return {
            top: root.scrollTop,
            left: root.scrollLeft,
            bottom: root.scrollTop + window.innerHeight,
            right: root.scrollLeft + window.innerWidth
        };
    }
    else {
        var rect = el.getBoundingClientRect();
        return {
            bottom: rect.top + rect.height,
            right: rect.left + rect.width,
            left: rect.left,
            top: rect.top
        };
    }
};
/** @hidden */
export var isPointerInsideContainer = function (x, y, container) {
    var rect = container.getBoundingClientRect();
    return (rect.top <= y &&
        rect.left <= x &&
        y <= rect.bottom &&
        x <= rect.right);
};
