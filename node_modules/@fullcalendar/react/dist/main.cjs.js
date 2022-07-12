'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
require('./vdom.cjs');
var React = require('react');
var common = require('@fullcalendar/common');

var FullCalendar = /** @class */ (function (_super) {
    tslib.__extends(FullCalendar, _super);
    function FullCalendar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._calendarApi = new common.CalendarApi();
        return _this;
    }
    FullCalendar.prototype.render = function () {
        return (React.createElement(common.CalendarDataProvider, { optionOverrides: this.props, calendarApi: this._calendarApi }, function (data) { return (React.createElement(common.CalendarRoot, { options: data.calendarOptions, theme: data.theme, emitter: data.emitter }, function (classNames, height, isHeightAuto, forPrint) { return (React.createElement("div", { className: classNames.join(' '), style: { height: height } },
            React.createElement(common.CalendarContent, tslib.__assign({ isHeightAuto: isHeightAuto, forPrint: forPrint }, data)))); })); }));
    };
    FullCalendar.prototype.getApi = function () {
        return this._calendarApi;
    };
    return FullCalendar;
}(React.Component));

Object.keys(common).forEach(function (k) {
    if (k !== 'default') Object.defineProperty(exports, k, {
        enumerable: true,
        get: function () {
            return common[k];
        }
    });
});
exports.default = FullCalendar;
