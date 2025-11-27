'use strict';

var React = require('react');

function HangerOne(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M24 4L24 44"/><path d="M32 4L24 10"/><path d="M16 9L24 15"/><path d="M16 20L24 26"/><path d="M32 15L24 21"/><path d="M30 44H18"/>' : '<path d="M24 4L24 44"/><path d="M32 4L24 10"/><path d="M16 9L24 15"/><path d="M16 20L24 26"/><path d="M32 15L24 21"/><path d="M30 44H18"/>';

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

module.exports = HangerOne;
