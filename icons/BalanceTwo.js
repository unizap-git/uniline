'use strict';

var React = require('react');

function BalanceTwo(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M16 22L10 12L4 22"/><path fill-rule="evenodd" clip-rule="evenodd" d="M10 28C13.3137 28 16 25.3137 16 22H4C4 25.3137 6.68629 28 10 28Z"/><path d="M44 22L38 12L32 22"/><path fill-rule="evenodd" clip-rule="evenodd" d="M38 28C41.3137 28 44 25.3137 44 22H32C32 25.3137 34.6863 28 38 28Z"/><path d="M24 6V42"/><path d="M10 12H24H38"/><path d="M10 12H24H38"/><path d="M38 42H24H10"/>' : '<path d="M16 22L10 12L4 22"/><path fill-rule="evenodd" clip-rule="evenodd" d="M10 28C13.3137 28 16 25.3137 16 22H4C4 25.3137 6.68629 28 10 28Z"/><path d="M44 22L38 12L32 22"/><path fill-rule="evenodd" clip-rule="evenodd" d="M38 28C41.3137 28 44 25.3137 44 22H32C32 25.3137 34.6863 28 38 28Z"/><path d="M24 6V42"/><path d="M10 12H24H38"/><path d="M10 12H24H38"/><path d="M38 42H24H10"/>';

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

module.exports = BalanceTwo;
