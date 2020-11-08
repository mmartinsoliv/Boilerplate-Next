"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.Illustration = exports.Description = exports.Title = exports.Logo = exports.Wrapper = void 0;
var styled_components_1 = require("styled-components");
exports.Wrapper = styled_components_1["default"].main(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background-color: #06092b;\n  color: #fff;\n  width: 100%;\n  height: 100%;\n  padding: 3rem;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"], ["\n  background-color: #06092b;\n  color: #fff;\n  width: 100%;\n  height: 100%;\n  padding: 3rem;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"])));
exports.Logo = styled_components_1["default"].img(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 25rem;\n  margin-bottom: 2rem;\n"], ["\n  width: 25rem;\n  margin-bottom: 2rem;\n"])));
exports.Title = styled_components_1["default"].h1(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  font-size: 2.5rem;\n"], ["\n  font-size: 2.5rem;\n"])));
exports.Description = styled_components_1["default"].h2(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  font-size: 2rem;\n  font-weight: 400;\n"], ["\n  font-size: 2rem;\n  font-weight: 400;\n"])));
exports.Illustration = styled_components_1["default"].img(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  margin-top: 3rem;\n  width: min(30rem, 100%);\n"], ["\n  margin-top: 3rem;\n  width: min(30rem, 100%);\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
