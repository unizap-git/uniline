'use strict';

var React = require('react');

function UTurnLeft(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M14 13H33C39.0751 13 44 17.9249 44 24V24C44 30.0751 39.0751 35 33 35H4"/><path d="M9 40L4 35L9 30"/><circle cx="9" cy="13" r="5"/>' : '<path d="M14 13H33C39.0751 13 44 17.9249 44 24V24C44 30.0751 39.0751 35 33 35H4"/><path d="M9 40L4 35L9 30"/><circle cx="9" cy="13" r="5"/>';

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

module.exports = UTurnLeft;
