'use strict';

var React = require('react');

function BlockThree(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M6 24H18V36H6V24Z"/><path d="M30 24H42V36H30V24Z"/><path d="M6 12H18V24H6V12Z"/><path d="M18 12H30V24H18V12Z"/><path d="M30 12H42V24H30V12Z"/>' : '<path d="M6 24H18V36H6V24Z"/><path d="M30 24H42V36H30V24Z"/><path d="M6 12H18V24H6V12Z"/><path d="M18 12H30V24H18V12Z"/><path d="M30 12H42V24H30V12Z"/>';

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

module.exports = BlockThree;
