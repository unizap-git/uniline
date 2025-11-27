'use strict';

var React = require('react');

function Dubai(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M14 4L14 44"/><path d="M14.5 6C14.5 6 28 13 32 22C36 31 33 44 33 44"/><path d="M4 44H44"/><path d="M10 15H32"/><path d="M14 22H22"/><path d="M14 29H26"/><path d="M14 36H27"/>' : '<path d="M14 4L14 44"/><path d="M14.5 6C14.5 6 28 13 32 22C36 31 33 44 33 44"/><path d="M4 44H44"/><path d="M10 15H32"/><path d="M14 22H22"/><path d="M14 29H26"/><path d="M14 36H27"/>';

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

module.exports = Dubai;
