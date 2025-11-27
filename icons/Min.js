'use strict';

var React = require('react');

function Min(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M4 4V44H44"/><path d="M10 4C10 4 15.3125 38 27 38C38.6875 38 44 4 44 4"/><path d="M10 38L44 38" stroke-dasharray="2 6"/>' : '<path d="M4 4V44H44"/><path d="M10 4C10 4 15.3125 38 27 38C38.6875 38 44 4 44 4"/><path d="M10 38L44 38" stroke-dasharray="2 6"/>';

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

module.exports = Min;
