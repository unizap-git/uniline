'use strict';

var React = require('react');

function GameTwo(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M20 15L24 19L28 15V4H20V15Z"/><path d="M20 33L24 29L28 33V44H20V33Z"/><path d="M33 28L29 24L33 20L44 20L44 28L33 28Z"/><path d="M15 20L19 24L15 28L4 28L4 20L15 20Z"/>' : '<path d="M20 15L24 19L28 15V4H20V15Z"/><path d="M20 33L24 29L28 33V44H20V33Z"/><path d="M33 28L29 24L33 20L44 20L44 28L33 28Z"/><path d="M15 20L19 24L15 28L4 28L4 20L15 20Z"/>';

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

module.exports = GameTwo;
