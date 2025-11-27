'use strict';

var React = require('react');

function GuideBoard(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M24 4V41"/><path d="M24 8H39.5455L42 12L39.5455 16H24V8Z"/><path d="M24 22H8.45455L6 26L8.45455 30H24V22Z"/><path d="M16 42H32"/>' : '<path d="M24 4V41"/><path d="M24 8H39.5455L42 12L39.5455 16H24V8Z"/><path d="M24 22H8.45455L6 26L8.45455 30H24V22Z"/><path d="M16 42H32"/>';

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

module.exports = GuideBoard;
