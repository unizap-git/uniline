'use strict';

var React = require('react');

function SortAmountDown(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M23 8H43"/><path d="M14 41L6 33"/><path d="M14 7V41"/><path d="M23 18H39"/><path d="M23 28H35"/><path d="M23 38H31"/>' : '<path d="M23 8H43"/><path d="M14 41L6 33"/><path d="M14 7V41"/><path d="M23 18H39"/><path d="M23 28H35"/><path d="M23 38H31"/>';

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

module.exports = SortAmountDown;
