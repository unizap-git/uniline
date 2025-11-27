'use strict';

var React = require('react');

function Needle(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M19.5,11.5l-7-7"/>   <path d="M22,8.5l-6.5-6.5"/>   <path d="M17.5,9.5l2.5-2.5"/>   <path d="M14.5,6.5l2.5-2.5"/>   <path d="M5.5,18.5l-2.5,2.5"/>   <path d="M14,6l-8,8-.5,4.5,4.5-.5,8-8-4-4Z"/>' : '<g clip-path="url(#icon-ab03b532ccc89db)"><path d="M39 23L25 9"/><path d="M43.9995 17L30.9995 4"/><path d="M34.999 18.999L39.999 13.999"/><path d="M28.999 12.999L33.999 7.99902"/><path d="M11 37L6 42"/><path d="M27.9999 12.0001L11.9999 27.9998L10.9999 37L19.9999 35.9998L35.9999 20.0001L27.9999 12.0001Z"/></g><defs><clipPath id="icon-ab03b532ccc89db"><rect width="48" height="48"/></clipPath></defs>';

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

module.exports = Needle;
