"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Theme = _interopRequireDefault(require("../Theme/Theme"));

var _ButtonStyle = require("./Button-style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TextButton = _styledComponents.default.a([_ButtonStyle.textStyle]);

var ContainedButton = _styledComponents.default.button([_ButtonStyle.containedStyle]);

var Button = function Button(_ref) {
  var onClick = _ref.onClick,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? "text" : _ref$variant,
      primary = _ref.primary,
      children = _ref.children;

  if (variant === "text") {
    return /*#__PURE__*/_react.default.createElement(_Theme.default, null, /*#__PURE__*/_react.default.createElement(TextButton, {
      onClick: onClick,
      primary: primary,
      variant: variant
    }, children));
  }

  if (variant === "contained") {
    return /*#__PURE__*/_react.default.createElement(_Theme.default, null, /*#__PURE__*/_react.default.createElement(ContainedButton, {
      onClick: onClick,
      primary: primary,
      variant: variant
    }, children));
  }
};

var _default = Button;
exports.default = _default;

//# sourceMappingURL=Button.js.map