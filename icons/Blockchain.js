'use strict';

var React = require('react');

function Blockchain(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M40 30V15L27.5 7.96875M20.5 7.96875L8 15V30M11 34.6875L24 42L32 37.5L37 34.6875"/><path d="M21 18.75L18 20.5V24V27.5L21 29.25L24 31L27 29.25L30 27.5V24V20.5L27 18.75L24 17L21 18.75Z"/><path d="M24 17V10"/><path d="M30 27L37 31"/><path d="M18 27L11 31"/><circle cx="24" cy="7" r="3"/><circle cx="8" cy="33" r="3"/><circle cx="40" cy="33" r="3"/>' : '<path d="M40 30V15L27.5 7.96875M20.5 7.96875L8 15V30M11 34.6875L24 42L32 37.5L37 34.6875"/><path d="M21 18.75L18 20.5V24V27.5L21 29.25L24 31L27 29.25L30 27.5V24V20.5L27 18.75L24 17L21 18.75Z"/><path d="M24 17V10"/><path d="M30 27L37 31"/><path d="M18 27L11 31"/><circle cx="24" cy="7" r="3"/><circle cx="8" cy="33" r="3"/><circle cx="40" cy="33" r="3"/>';

  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 48 48',
    fill: fill ? color : 'none',
    stroke: fill ? 'none' : color,
    strokeWidth: fill ? 0 : strokeWidth,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    className: className,
    style: style,
    dangerouslySetInnerHTML: { __html: svgContent }
  });
}

module.exports = Blockchain;
