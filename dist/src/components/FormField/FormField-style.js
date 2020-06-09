"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormFieldInputStyle = exports.FormFieldLabelStyle = void 0;

var _styledComponents = require("styled-components");

var _FormField = require("./FormField");

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  font-family: ", ";\n  color: ", ";\n  font-size: 1.2rem;\n  margin: 0 auto;\n  padding: 1.5rem 2rem;\n  border-radius: 0.2rem;\n  background-color: ", ";\n  border: none;\n  width: 150px;\n  display: block;\n  border-bottom: 0.3rem solid transparent;\n  transition: all 0.3s;\n\n  :placeholder-shown + ", " {\n    opacity: 0;\n    visibility: hidden;\n    -webkit-transform: translateY(-4rem);\n    transform: translateY(-4rem);\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  font-family: ", ";\n  font-size: 1.2rem;\n  margin-left: 2rem;\n  margin-top: 0.7rem;\n  display: block;\n  transition: all 0.3s;\n  transform: translateY(0rem);\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var FormFieldLabelStyle = function FormFieldLabelStyle(_ref) {
  var theme = _ref.theme,
      rest = _objectWithoutProperties(_ref, ["theme"]);

  return (0, _styledComponents.css)(_templateObject(), theme.typography.button.fontFamily);
};

exports.FormFieldLabelStyle = FormFieldLabelStyle;

var FormFieldInputStyle = function FormFieldInputStyle(_ref2) {
  var theme = _ref2.theme,
      rest = _objectWithoutProperties(_ref2, ["theme"]);

  return (0, _styledComponents.css)(_templateObject2(), theme.typography.button.fontFamily, function (props) {
    return props.primary ? theme.palette.primary.dark : theme.palette.secondary.dark;
  }, function (props) {
    return props.primary ? theme.palette.primary.light : theme.palette.secondary.light;
  }, _FormField.FormFieldLabel);
};

exports.FormFieldInputStyle = FormFieldInputStyle;

//# sourceMappingURL=FormField-style.js.map