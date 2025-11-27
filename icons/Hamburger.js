'use strict';

var React = require('react');

function Hamburger(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path fill-rule="evenodd" clip-rule="evenodd" d="M44 22C44 12.0589 35.0457 4 24 4C12.9543 4 4 12.0589 4 22H44Z"/><rect x="4" y="38" width="40" height="6"/><path d="M4 28L9.45455 32L16.7273 28L24 32L31.2727 28L38.5455 32L44 28"/>' : '<path fill-rule="evenodd" clip-rule="evenodd" d="M44 22C44 12.0589 35.0457 4 24 4C12.9543 4 4 12.0589 4 22H44Z"/><rect x="4" y="38" width="40" height="6"/><path d="M4 28L9.45455 32L16.7273 28L24 32L31.2727 28L38.5455 32L44 28"/>';

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

module.exports = Hamburger;
