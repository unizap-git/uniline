'use strict';

var React = require('react');

function Tomato(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M24 43.9999C35.0457 43.9999 44 36.6126 44 27.4999C44 21.0579 39.5252 15.7014 33 12.9841L29.5 14.4999L30 19.9999L23.5 17.9999L17 19.9999V14.4999L14 12.9841C8.02199 15.837 4 21.3926 4 27.4999C4 36.6126 12.9543 43.9999 24 43.9999Z"/><path d="M23.5 4L27.3088 9.11672L36 9.90983L29.6628 14.4833L31.5 21L23.5 18L15.5 21L17.3371 14.4833L11 9.90983L19.6911 9.11672L23.5 4Z"/>' : '<path d="M24 43.9999C35.0457 43.9999 44 36.6126 44 27.4999C44 21.0579 39.5252 15.7014 33 12.9841L29.5 14.4999L30 19.9999L23.5 17.9999L17 19.9999V14.4999L14 12.9841C8.02199 15.837 4 21.3926 4 27.4999C4 36.6126 12.9543 43.9999 24 43.9999Z"/><path d="M23.5 4L27.3088 9.11672L36 9.90983L29.6628 14.4833L31.5 21L23.5 18L15.5 21L17.3371 14.4833L11 9.90983L19.6911 9.11672L23.5 4Z"/>';

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

module.exports = Tomato;
