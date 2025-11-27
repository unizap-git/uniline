'use strict';

var React = require('react');

function ProportionalScaling(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<g clip-path="url(#icon-d4d620e90c265e2)"><path d="M22.2679 7C23.0377 5.66667 24.9623 5.66667 25.7321 7L43.0526 37C43.8224 38.3333 42.8601 40 41.3205 40H6.67949C5.13989 40 4.17764 38.3333 4.94744 37L22.2679 7Z"/><path d="M19 40L32 18"/><path d="M32 40L38 29"/></g><defs><clipPath id="icon-d4d620e90c265e2"><rect width="48" height="48"/></clipPath></defs>' : '<g clip-path="url(#icon-41f953b190c265e2)"><path d="M22.2679 7C23.0377 5.66667 24.9623 5.66667 25.7321 7L43.0526 37C43.8224 38.3333 42.8601 40 41.3205 40H6.67949C5.13989 40 4.17764 38.3333 4.94744 37L22.2679 7Z"/><path d="M19 40L32 18"/><path d="M32 40L38 29"/></g><defs><clipPath id="icon-41f953b190c265e2"><rect width="48" height="48"/></clipPath></defs>';

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

module.exports = ProportionalScaling;
