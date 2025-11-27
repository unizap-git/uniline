'use strict';

var React = require('react');

function AutoWidthOne(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M6 7H42"/><path d="M8 24H40"/><path d="M13.9907 30L8 24.0046L14 18"/><path d="M34.0093 18L40 23.9954L34 30"/><path d="M6 41H42"/>' : '<path d="M6 7H42"/><path d="M8 24H40"/><path d="M13.9907 30L8 24.0046L14 18"/><path d="M34.0093 18L40 23.9954L34 30"/><path d="M6 41H42"/>';

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

module.exports = AutoWidthOne;
