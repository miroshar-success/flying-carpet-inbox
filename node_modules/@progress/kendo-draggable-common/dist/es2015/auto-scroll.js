import { scrollableRoot } from './utils';
/** @hidden */
export const autoScroll = (scrollableParent, vel) => {
    if (!scrollableParent) {
        return;
    }
    let yIsScrollable;
    let xIsScrollable;
    const isRootNode = scrollableParent === scrollableRoot(scrollableParent);
    if (isRootNode) {
        yIsScrollable = document.body.scrollHeight > window.innerHeight;
        xIsScrollable = document.body.scrollWidth > window.innerWidth;
    }
    else {
        yIsScrollable = scrollableParent.offsetHeight <= scrollableParent.scrollHeight;
        xIsScrollable = scrollableParent.offsetWidth <= scrollableParent.scrollWidth;
    }
    let yDelta = scrollableParent.scrollTop + vel.y;
    let yInBounds = yIsScrollable && yDelta > 0 && yDelta < scrollableParent.scrollHeight;
    let xDelta = scrollableParent.scrollLeft + vel.x;
    let xInBounds = xIsScrollable && xDelta > 0 && xDelta < scrollableParent.scrollWidth;
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
