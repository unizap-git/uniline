'use strict';

var React = require('react');

function PaperShip(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M4 24L12.5714 42L24 29L4 24Z"/><path d="M44 24L35.4286 42L24 29L44 24Z"/><path d="M13 42L35 42L24 29L13 42Z"/><path d="M12 26L24 4L36 26"/>' : '<path d="M4 24L12.5714 42L24 29L4 24Z"/><path d="M44 24L35.4286 42L24 29L44 24Z"/><path d="M13 42L35 42L24 29L13 42Z"/><path d="M12 26L24 4L36 26"/>';

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

module.exports = PaperShip;
