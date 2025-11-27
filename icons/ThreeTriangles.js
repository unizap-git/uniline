'use strict';

var React = require('react');

function ThreeTriangles(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M17.0001 7L24.0001 19.1244L29.9905 29.5H4.00977L17.0001 7Z"/><path d="M31.0001 7L43.9905 29.5H18.0098L24.0001 19.1244L31.0001 7Z"/><path d="M11.0098 41.5H36.9905L29.9905 29.5H18.0098L11.0098 41.5Z"/><path d="M29.9905 29.5L24.0001 19.1244M18.0098 29.5L11.0098 41.5H36.9905L29.9905 29.5H18.0098ZM18.0098 29.5H43.9905L31.0001 7L24.0001 19.1244L18.0098 29.5ZM18.0098 29.5L24.0001 19.1244L18.0098 29.5ZM18.0098 29.5H29.9905H18.0098ZM29.9905 29.5H4.00977L17.0001 7L24.0001 19.1244L29.9905 29.5Z"/>' : '<path d="M17.0001 7L24.0001 19.1244L29.9905 29.5H4.00977L17.0001 7Z"/><path d="M31.0001 7L43.9905 29.5H18.0098L24.0001 19.1244L31.0001 7Z"/><path d="M11.0098 41.5H36.9905L29.9905 29.5H18.0098L11.0098 41.5Z"/><path d="M29.9905 29.5L24.0001 19.1244M18.0098 29.5L11.0098 41.5H36.9905L29.9905 29.5H18.0098ZM18.0098 29.5H43.9905L31.0001 7L24.0001 19.1244L18.0098 29.5ZM18.0098 29.5L24.0001 19.1244L18.0098 29.5ZM18.0098 29.5H29.9905H18.0098ZM29.9905 29.5H4.00977L17.0001 7L24.0001 19.1244L29.9905 29.5Z"/>';

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

module.exports = ThreeTriangles;
