"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.containedStyle = exports.textStyle = void 0;

var _styledComponents = require("styled-components");

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  font-family: ", ";\n  cursor: pointer;\n  color: ", ";\n  text-transform: ", ";\n  text-decoration: none;\n  background: ", ";\n  padding: 20px;\n  border-radius: ", ";\n  display: inline-block;\n  border: none;\n  transition: all 0.4s ease 0s;\n  :hover {\n    background: ", ";\n    color: ", ";\n    letter-spacing: 2px;\n    transition: all 0.4s ease 0s;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  font-family: ", ";\n  cursor: pointer;\n  color: ", ";\n  text-transform: ", ";\n  text-decoration: none;\n  padding: 20px;\n  display: inline-block;\n  border: none;\n  transition: all 0.4s ease 0s;\n  :hover {\n    color: ", ";\n    letter-spacing: 2px;\n    transition: all 0.4s ease 0s;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var textStyle = function textStyle(_ref) {
  var theme = _ref.theme,
      rest = _objectWithoutProperties(_ref, ["theme"]);

  return (0, _styledComponents.css)(_templateObject(), theme.typography.button.fontFamily, function (props) {
    return props.primary ? theme.palette.primary.light : theme.palette.secondary.light;
  }, theme.typography.button.textTransform, function (props) {
    return props.primary ? theme.palette.primary.main : theme.palette.secondary.main;
  });
};

exports.textStyle = textStyle;

var containedStyle = function containedStyle(_ref2) {
  var theme = _ref2.theme,
      rest = _objectWithoutProperties(_ref2, ["theme"]);

  return (0, _styledComponents.css)(_templateObject2(), theme.typography.button.fontFamily, function (props) {
    return props.primary ? theme.palette.primary.contrastText : theme.palette.secondary.contrastText;
  }, theme.typography.button.textTransform, function (props) {
    return props.primary ? theme.palette.primary.dark : theme.palette.secondary.dark;
  }, theme.shape.borderRadius, function (props) {
    return props.primary ? theme.palette.primary.main : theme.palette.secondary.main;
  }, function (props) {
    return props.primaary ? theme.palette.common.black : theme.palette.common.black;
  });
};

exports.containedStyle = containedStyle;

//# sourceMappingURL=Button-style.js.map