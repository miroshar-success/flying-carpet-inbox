var getRatio = function (element, target) {
    var elementRect = element.getBoundingClientRect();
    var targetRect = target.getBoundingClientRect();
    var top = Math.max(targetRect.top, elementRect.top);
    var left = Math.max(targetRect.left, elementRect.left);
    var right = Math.min(targetRect.left + targetRect.width, elementRect.left + elementRect.width);
    var bottom = Math.min(targetRect.top + targetRect.height, elementRect.top + elementRect.height);
    var width = right - left;
    var height = bottom - top;
    if (left < right && top < bottom) {
        var targetArea = targetRect.width * targetRect.height;
        var entryArea = elementRect.width * elementRect.height;
        var intersectionArea = width * height;
        var intersectionRatio = intersectionArea / (targetArea + entryArea - intersectionArea);
        return Number(intersectionRatio.toFixed(4));
    }
    return 0;
};
/** @hidden */
export var intersect = function (element, candidates) {
    var max = 0;
    var result = null;
    candidates.forEach(function (candidate) {
        if (candidate && element) {
            var ration = getRatio(element, candidate);
            if (ration > max) {
                max = ration;
                result = candidate;
            }
        }
    });
    return result;
};
