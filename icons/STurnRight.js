'use strict';

var React = require('react');

function STurnRight(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M30 24L13 24C9 24 6 21 6 17C6 13 9 10 13 10L32 10"/><path d="M8 38L35 38C39 38 42 35 42 31C42 27 39 24 35 24L30 24"/><path d="M13 43L8 38L13 33"/><circle cx="37.1758" cy="9.99994" r="5" transform="rotate(-180 37.1758 9.99994)"/>' : '<path d="M30 24L13 24C9 24 6 21 6 17C6 13 9 10 13 10L32 10"/><path d="M8 38L35 38C39 38 42 35 42 31C42 27 39 24 35 24L30 24"/><path d="M13 43L8 38L13 33"/><circle cx="37.1758" cy="9.99994" r="5" transform="rotate(-180 37.1758 9.99994)"/>';

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

module.exports = STurnRight;
