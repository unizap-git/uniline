'use strict';

var React = require('react');

function LevelNineTitle(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M6 8V40"/><path d="M24 8V40"/><path d="M7 24H23"/><path d="M36.5 21C33.4624 21 31 23.4624 31 26.5C31 29.5376 33.4624 32 36.5 32C39.5376 32 42 29.5376 42 26.5C42 23.4624 39.5376 21 36.5 21Z"/><path d="M31 36C31.8184 38.1932 33.5476 40 36.5 40C39.5376 40 42 37.3137 42 34V27"/>' : '<path d="M6 8V40"/><path d="M24 8V40"/><path d="M7 24H23"/><path d="M36.5 21C33.4624 21 31 23.4624 31 26.5C31 29.5376 33.4624 32 36.5 32C39.5376 32 42 29.5376 42 26.5C42 23.4624 39.5376 21 36.5 21Z"/><path d="M31 36C31.8184 38.1932 33.5476 40 36.5 40C39.5376 40 42 37.3137 42 34V27"/>';

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

module.exports = LevelNineTitle;
