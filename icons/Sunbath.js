'use strict';

var React = require('react');

function Sunbath(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M11 36V40"/><path d="M6 36L40 36"/><path d="M8 30H24"/><path d="M37 11L34 16"/><path d="M35 36V40"/><path d="M44 10L29 36"/><path d="M39 19L44 28"/>' : '<path d="M11 36V40"/><path d="M6 36L40 36"/><path d="M8 30H24"/><path d="M37 11L34 16"/><path d="M35 36V40"/><path d="M44 10L29 36"/><path d="M39 19L44 28"/>';

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

module.exports = Sunbath;
