const getRatio = (element, target) => {
    const elementRect = element.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();
    const top = Math.max(targetRect.top, elementRect.top);
    const left = Math.max(targetRect.left, elementRect.left);
    const right = Math.min(targetRect.left + targetRect.width, elementRect.left + elementRect.width);
    const bottom = Math.min(targetRect.top + targetRect.height, elementRect.top + elementRect.height);
    const width = right - left;
    const height = bottom - top;
    if (left < right && top < bottom) {
        const targetArea = targetRect.width * targetRect.height;
        const entryArea = elementRect.width * elementRect.height;
        const intersectionArea = width * height;
        const intersectionRatio = intersectionArea / (targetArea + entryArea - intersectionArea);
        return Number(intersectionRatio.toFixed(4));
    }
    return 0;
};
/** @hidden */
export const intersect = (element, candidates) => {
    let max = 0;
    let result = null;
    candidates.forEach((candidate) => {
        if (candidate && element) {
            const ration = getRatio(element, candidate);
            if (ration > max) {
                max = ration;
                result = candidate;
            }
        }
    });
    return result;
};
