'use strict';

var React = require('react');

function MenuUnfoldOne(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M8 10.5H40"/><path d="M24 19.5H40"/><path d="M24 28.5H40"/><path d="M8 37.5H40"/><path d="M16 19L8 24L16 29V19Z"/>' : '<path d="M8 10.5H40"/><path d="M24 19.5H40"/><path d="M24 28.5H40"/><path d="M8 37.5H40"/><path d="M16 19L8 24L16 29V19Z"/>';

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

module.exports = MenuUnfoldOne;
