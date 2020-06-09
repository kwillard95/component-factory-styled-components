"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Default = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _addonActions = require("@storybook/addon-actions");

var _FormField = _interopRequireDefault(require("./FormField"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'Form Field'
};
exports.default = _default;

var Default = function Default() {
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_FormField.default, {
    placeholder: "Full Name",
    label: "Full Name",
    name: "name",
    primary: true
  }), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_FormField.default, {
    placeholder: "Full Name",
    label: "Full Name",
    name: "name"
  }));
};

exports.Default = Default;

//# sourceMappingURL=FormField.stories.js.map