"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.FormFieldLabel = exports.FormFieldInput = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Theme = _interopRequireDefault(require("../Theme/Theme"));

var _FormFieldStyle = require("./FormField-style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FormFieldInput = _styledComponents.default.input([_FormFieldStyle.FormFieldInputStyle]);

exports.FormFieldInput = FormFieldInput;

var FormFieldLabel = _styledComponents.default.label([_FormFieldStyle.FormFieldLabelStyle]);

exports.FormFieldLabel = FormFieldLabel;

var FormField = function FormField(_ref) {
  var onChange = _ref.onChange,
      placeholder = _ref.placeholder,
      label = _ref.label,
      name = _ref.name,
      primary = _ref.primary;
  return /*#__PURE__*/_react.default.createElement(_Theme.default, null, /*#__PURE__*/_react.default.createElement(FormFieldInput, {
    primary: primary,
    id: name,
    placeholder: placeholder
  }), /*#__PURE__*/_react.default.createElement(FormFieldLabel, {
    for: name
  }, label));
};

var _default = FormField;
exports.default = _default;

//# sourceMappingURL=FormField.js.map