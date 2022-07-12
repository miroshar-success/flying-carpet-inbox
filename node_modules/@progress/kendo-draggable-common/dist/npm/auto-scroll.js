"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("./utils");
/** @hidden */
exports.autoScroll = function (scrollableParent, vel) {
    if (!scrollableParent) {
        return;
    }
    var yIsScrollable;
    var xIsScrollable;
    var isRootNode = scrollableParent === utils_1.scrollableRoot(scrollableParent);
    if (isRootNode) {
        yIsScrollable = document.body.scrollHeight > window.innerHeight;
        xIsScrollable = document.body.scrollWidth > window.innerWidth;
    }
    else {
        yIsScrollable = scrollableParent.offsetHeight <= scrollableParent.scrollHeight;
        xIsScrollable = scrollableParent.offsetWidth <= scrollableParent.scrollWidth;
    }
    var yDelta = scrollableParent.scrollTop + vel.y;
    var yInBounds = yIsScrollable && yDelta > 0 && yDelta < scrollableParent.scrollHeight;
    var xDelta = scrollableParent.scrollLeft + vel.x;
    var xInBounds = xIsScrollable && xDelta > 0 && xDelta < scrollableParent.scrollWidth;
    if (yInBounds) {
        scrollableParent.scrollTop += vel.y;
    }
    else if (yIsScrollable && yDelta < 0) {
        scrollableParent.scrollTop = 0;
    }
    if (xInBounds) {
        scrollableParent.scrollLeft += vel.x;
    }
    else if (xIsScrollable && xDelta < 0) {
        scrollableParent.scrollLeft = 0;
    }
};
