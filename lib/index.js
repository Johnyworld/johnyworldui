"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hello = exports.theme = void 0;
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var Heading = styled_components_1.default.h2(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  /* ", " */\n"], ["\n  /* ", " */\n"])), function (props) { return props.theme.color.primary && "color: " + props.color; });
exports.theme = {
    bg: 'red',
    changeBg: function (color) { return exports.theme.bg = color; },
};
exports.Hello = function (_a) {
    var text = _a.text;
    return (react_1.default.createElement(Heading, { style: { backgroundColor: exports.theme.bg } }, text));
};
var templateObject_1;
//# sourceMappingURL=index.js.map