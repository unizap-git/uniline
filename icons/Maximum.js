'use strict';

var React = require('react');

function Maximum(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M4 4V44H44"/><path d="M10 38C10 38 15.3125 4 27 4C38.6875 4 44 38 44 38"/><path d="M10 4L44 4" stroke-dasharray="2 6"/>' : '<path d="M4 4V44H44"/><path d="M10 38C10 38 15.3125 4 27 4C38.6875 4 44 38 44 38"/><path d="M10 4L44 4" stroke-dasharray="2 6"/>';

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

module.exports = Maximum;
