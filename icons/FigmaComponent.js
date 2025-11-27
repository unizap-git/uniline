'use strict';

var React = require('react');

function FigmaComponent(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M17 12L24 5L31 12L24 19L17 12Z"/><path d="M17 36L24 29L31 36L24 43L17 36Z"/><path d="M29 24L36 17L43 24L36 31L29 24Z"/><path d="M5 24L12 17L19 24L12 31L5 24Z"/>' : '<path d="M17 12L24 5L31 12L24 19L17 12Z"/><path d="M17 36L24 29L31 36L24 43L17 36Z"/><path d="M29 24L36 17L43 24L36 31L29 24Z"/><path d="M5 24L12 17L19 24L12 31L5 24Z"/>';

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

module.exports = FigmaComponent;
