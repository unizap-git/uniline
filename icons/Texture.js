'use strict';

var React = require('react');

function Texture(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M12 6L6 12"/><path d="M42 36L36 42"/><path d="M22 6L6 22"/><path d="M32 6L6 32"/><path d="M42 6L6 42"/><path d="M42 16L16 42"/><path d="M42 26L26 42"/>' : '<path d="M12 6L6 12"/><path d="M42 36L36 42"/><path d="M22 6L6 22"/><path d="M32 6L6 32"/><path d="M42 6L6 42"/><path d="M42 16L16 42"/><path d="M42 26L26 42"/>';

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

module.exports = Texture;
