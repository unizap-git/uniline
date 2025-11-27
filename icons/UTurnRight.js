'use strict';

var React = require('react');

function UTurnRight(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M34 13H15C8.92487 13 4 17.9249 4 24V24C4 30.0751 8.92487 35 15 35H44"/><path d="M39 30L44 35L39 40"/><circle cx="39" cy="13" r="5"/>' : '<path d="M34 13H15C8.92487 13 4 17.9249 4 24V24C4 30.0751 8.92487 35 15 35H44"/><path d="M39 30L44 35L39 40"/><circle cx="39" cy="13" r="5"/>';

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

module.exports = UTurnRight;
