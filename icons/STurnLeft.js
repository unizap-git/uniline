'use strict';

var React = require('react');

function STurnLeft(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M42 38L13 38C8.99999 38 5.99999 35 5.99999 31C5.99999 27 8.99999 24 13 24L19 24"/><path d="M19 24L35 24C39 24 42 21 42 17C42 13 39 10 35 10L17 10"/><path d="M37 43L42 38L37 33"/><circle cx="12" cy="9.99994" r="5" transform="rotate(-180 12 9.99994)"/>' : '<path d="M42 38L13 38C8.99999 38 5.99999 35 5.99999 31C5.99999 27 8.99999 24 13 24L19 24"/><path d="M19 24L35 24C39 24 42 21 42 17C42 13 39 10 35 10L17 10"/><path d="M37 43L42 38L37 33"/><circle cx="12" cy="9.99994" r="5" transform="rotate(-180 12 9.99994)"/>';

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

module.exports = STurnLeft;
