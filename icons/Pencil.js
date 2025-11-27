'use strict';

var React = require('react');

function Pencil(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<g clip-path="url(#icon-5215fb7152696ccc)"><path d="M30.9995 8.99902L38.9995 16.999"/><path d="M7.99953 31.999L35.9994 4L43.9995 11.999L15.9995 39.999L5.99951 41.999L7.99953 31.999Z"/><path d="M30.9995 8.99902L38.9995 16.999"/><path d="M8.99951 31.999L15.9995 38.999"/><path d="M12.9995 34.999L34.9995 12.999"/></g><defs><clipPath id="icon-5215fb7152696ccc"><rect width="48" height="48"/></clipPath></defs>' : '<g clip-path="url(#icon-e39a0de52696ccc)"><path d="M30.9995 8.99902L38.9995 16.999"/><path d="M7.99953 31.999L35.9994 4L43.9995 11.999L15.9995 39.999L5.99951 41.999L7.99953 31.999Z"/><path d="M30.9995 8.99902L38.9995 16.999"/><path d="M8.99951 31.999L15.9995 38.999"/><path d="M12.9995 34.999L34.9995 12.999"/></g><defs><clipPath id="icon-e39a0de52696ccc"><rect width="48" height="48"/></clipPath></defs>';

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

module.exports = Pencil;
