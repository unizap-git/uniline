'use strict';

var React = require('react');

function TurnOffBluetooth(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M20.6719 11.7778V4L35.2563 15.1111L28.0771 19.5556M32.4996 35.9744L20.6751 44V29.6275L32.4996 35.9744Z"/><path d="M4 12.5L44 35.5"/><path d="M7.44434 33.9999L20.6751 29.6274"/>' : '<path d="M20.6719 11.7778V4L35.2563 15.1111L28.0771 19.5556M32.4996 35.9744L20.6751 44V29.6275L32.4996 35.9744Z"/><path d="M4 12.5L44 35.5"/><path d="M7.44434 33.9999L20.6751 29.6274"/>';

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

module.exports = TurnOffBluetooth;
