'use strict';

var React = require('react');

function GreenHouse(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M42 20V44H24H6V20L24 4L42 20Z"/><path d="M6 24L42 24"/><path d="M13 14L13 44"/><path d="M35 14L35 44"/><rect x="20" y="32" width="8" height="12"/>' : '<path d="M42 20V44H24H6V20L24 4L42 20Z"/><path d="M6 24L42 24"/><path d="M13 14L13 44"/><path d="M35 14L35 44"/><rect x="20" y="32" width="8" height="12"/>';

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

module.exports = GreenHouse;
