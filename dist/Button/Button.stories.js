"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Contained = exports.Default = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _addonActions = require("@storybook/addon-actions");

var _Button = _interopRequireDefault(require("./Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import { MyNewThemedButton } from '../App';
var _default = {
  title: 'Styled Button'
};
exports.default = _default;

var Default = function Default() {
  return /*#__PURE__*/_react.default.createElement(_Button.default, {
    onClick: (0, _addonActions.action)('Styled button clicked'),
    variant: "text"
  }, "Button");
};

exports.Default = Default;

var Contained = function Contained() {
  return /*#__PURE__*/_react.default.createElement(_Button.default, {
    onClick: (0, _addonActions.action)('Styled button clicked'),
    variant: "contained",
    primary: true
  }, "Button");
}; // export const LinkCustomTheme = () => {
//   return (
//     <MyNewThemedButton primary onClick={action('Styled button clicked')}>Styled Button</MyNewThemedButton>
//   )
// }
// export const ContainedCustomTheme = () => {
//   return (
//     <MyNewThemedButton variant="contained" primary onClick={action('Styled button clicked')}>Styled Button</MyNewThemedButton>
//   )
// }


exports.Contained = Contained;