"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Fill = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _RadioButtonStyle = require("./RadioButton-style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Root = _styledComponents.default.div([_RadioButtonStyle.RootStyle]);

var Fill = _styledComponents.default.div([_RadioButtonStyle.FillStyle]);

exports.Fill = Fill;

var Input = _styledComponents.default.input([_RadioButtonStyle.InputStyle]);

var RadioButton = function RadioButton(_ref) {
  var onChange = _ref.onChange,
      onClick = _ref.onClick,
      name = _ref.name,
      label = _ref.label,
      value = _ref.value,
      checked = _ref.checked,
      children = _ref.children;
  return /*#__PURE__*/_react.default.createElement(Root, null, /*#__PURE__*/_react.default.createElement("label", null, label, /*#__PURE__*/_react.default.createElement(Input, {
    type: "radio",
    value: value,
    onClick: onClick,
    onChange: onChange,
    name: name,
    checked: checked
  }), /*#__PURE__*/_react.default.createElement(Fill, null)));
};

var _default = RadioButton;
exports.default = _default;