'use strict';

var React = require('react');

function BlockNine(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M18 14H30V26H18V14Z"/><path d="M18 26H30V38H18V26Z"/><path d="M30 14H42V26H30V14Z"/><path d="M6 26H18V38H6V26Z"/>' : '<path d="M18 14H30V26H18V14Z"/><path d="M18 26H30V38H18V26Z"/><path d="M30 14H42V26H30V14Z"/><path d="M6 26H18V38H6V26Z"/>';

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

module.exports = BlockNine;
