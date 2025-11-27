'use strict';

var React = require('react');

function BridgeTwo(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M8 13C8 13 14 23 24 23C34 23 40 13 40 13"/><path d="M8 10V38"/><path d="M40 10V38"/><path d="M4 30.5C4 30.5 16.1877 29.9026 24 30C31.8196 30.0975 44 31 44 31"/><path d="M16 21V30"/><path d="M24 23L24 30"/><path d="M32 21L32 30"/><path d="M8 13L4 18"/><path d="M44 18L40 13"/>' : '<path d="M8 13C8 13 14 23 24 23C34 23 40 13 40 13"/><path d="M8 10V38"/><path d="M40 10V38"/><path d="M4 30.5C4 30.5 16.1877 29.9026 24 30C31.8196 30.0975 44 31 44 31"/><path d="M16 21V30"/><path d="M24 23L24 30"/><path d="M32 21L32 30"/><path d="M8 13L4 18"/><path d="M44 18L40 13"/>';

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

module.exports = BridgeTwo;
