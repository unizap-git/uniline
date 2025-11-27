'use strict';

var React = require('react');

function NestedArrows(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M30 17V4H4V30H17"/><path d="M43 43V17H17V43H43Z"/><path d="M33 30H17M33 30L28 25L33 30ZM33 30L28 35L33 30Z"/><path d="M17 17V43"/>' : '<path d="M30 17V4H4V30H17"/><path d="M43 43V17H17V43H43Z"/><path d="M33 30H17M33 30L28 25L33 30ZM33 30L28 35L33 30Z"/><path d="M17 17V43"/>';

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

module.exports = NestedArrows;
