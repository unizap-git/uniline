'use strict';

var React = require('react');

function CooperativeHandshake(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M24 40L36 28L32 32L28 36L24 40ZM24 40L4 20L16 8L24 16"/><path d="M17 23L32 8L44 20L36 28L28 20L22 26L17 23ZM17 23L24 16"/><path d="M28 36L25 33"/><path d="M32 32L29 29"/>' : '<path d="M24 40L36 28L32 32L28 36L24 40ZM24 40L4 20L16 8L24 16"/><path d="M17 23L32 8L44 20L36 28L28 20L22 26L17 23ZM17 23L24 16"/><path d="M28 36L25 33"/><path d="M32 32L29 29"/>';

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

module.exports = CooperativeHandshake;
