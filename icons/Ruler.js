'use strict';

var React = require('react');

function Ruler(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M44 14L34 4L30.25 7.75L26.5 11.5L19 19L11.5 26.5L7.75 30.25L4 34L14 44L44 14Z"/><path d="M30.25 7.75L7.75 30.25"/><path d="M9 29L13 33"/><path d="M14 24L20 30"/><path d="M19 19L23 23"/><path d="M24 14L30 20"/><path d="M29 9L33 13"/>' : '<path d="M44 14L34 4L30.25 7.75L26.5 11.5L19 19L11.5 26.5L7.75 30.25L4 34L14 44L44 14Z"/><path d="M30.25 7.75L7.75 30.25"/><path d="M9 29L13 33"/><path d="M14 24L20 30"/><path d="M19 19L23 23"/><path d="M24 14L30 20"/><path d="M29 9L33 13"/>';

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

module.exports = Ruler;
