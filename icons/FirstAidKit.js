'use strict';

var React = require('react');

function FirstAidKit(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M8 20V38C8 39.1046 8.89543 40 10 40H38C39.1046 40 40 39.1046 40 38V20"/><path d="M5 14H43V20H5V14Z"/><path d="M31 8H17V14H31V8Z"/><path d="M20 30L28 30"/><path d="M24 26V34"/>' : '<path d="M8 20V38C8 39.1046 8.89543 40 10 40H38C39.1046 40 40 39.1046 40 38V20"/><path d="M5 14H43V20H5V14Z"/><path d="M31 8H17V14H31V8Z"/><path d="M20 30L28 30"/><path d="M24 26V34"/>';

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

module.exports = FirstAidKit;
