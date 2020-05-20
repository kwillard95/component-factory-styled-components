"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InputStyle = exports.FillStyle = exports.RootStyle = void 0;

var _styledComponents = require("styled-components");

var _RadioButton = require("./RadioButton");

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var RootStyle = function RootStyle(_ref) {
  var theme = _ref.theme,
      rest = _objectWithoutProperties(_ref, ["theme"]);

  return "\n  margin: 5px;\n  cursor: pointer;\n  width: ".concat(theme.typography.radio.size, ";\n  height: ").concat(theme.typography.radio.size, ";\n  position: relative;\n  label {\n    margin-left: 25px;\n    font-family: ").concat(theme.typography.button.fontFamily, ";\n  }\n  &::before {\n    content: \"\";\n    border-radius: 100%;\n    border: 1px solid \n    ").concat(theme.typography.radio.size, ";\n    background: ").concat(theme.typography.radio.background, ";\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    top: 0;\n    box-sizing: border-box;\n    pointer-events: none;\n    z-index: 0;\n  }\n");
};

exports.RootStyle = RootStyle;

var FillStyle = function FillStyle(_ref2) {
  var theme = _ref2.theme,
      rest = _objectWithoutProperties(_ref2, ["theme"]);

  return "\n  background: ".concat(theme.typography.radio.fillColor, ";\n  width: 0;\n  height: 0;\n  border-radius: 100%;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  transition: width 0.2s ease-in, height 0.2s ease-in;\n  pointer-events: none;\n  z-index: 1;\n  &::before {\n    content: \"\";\n    opacity: 0;\n    width: calc(20px - 4px);\n    position: absolute;\n    height: calc(20px - 4px);\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    border: 1px solid\n    ").concat(theme.typography.radio.borderActive, ";\n    border-radius: 100%;\n  }\n");
};

exports.FillStyle = FillStyle;

var InputStyle = function InputStyle(_ref3) {
  var theme = _ref3.theme,
      rest = _objectWithoutProperties(_ref3, ["theme"]);

  return "\nopacity: 0;\nz-index: 2;\nposition: absolute;\ntop: 0;\nwidth: 100%;\nheight: 100%;\nmargin: 0;\ncursor: pointer;\n\n&:focus {\n  outline: none;\n}\n&:checked {\n  & ~ ".concat(_RadioButton.Fill, " {\n    width: calc(100% - 8px);\n    height: calc(100% - 8px);\n    transition: width 0.2s ease-out, height 0.2s ease-out;\n\n    &::before {\n      opacity: 1;\n      transition: opacity 1s ease;\n    }\n  }\n}\n");
};

exports.InputStyle = InputStyle;