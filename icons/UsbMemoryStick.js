'use strict';

var React = require('react');

function UsbMemoryStick(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M4,11c0-.6.4-1,1-1h14c.6,0,1,.4,1,1v10c0,.6-.4,1-1,1H5c-.6,0-1-.4-1-1v-10Z"/>   <path d="M16.5,1H7.5c-.6,0-1,.4-1,1v8c0,.6.4,1,1,1h9c.6,0,1-.4,1-1V2c0-.6-.4-1-1-1ZM11.5,6c0,.6-.4,1-1,1s-1-.4-1-1v-1c0-.6.4-1,1-1s1,.4,1,1v1ZM14.5,6c0,.6-.4,1-1,1s-1-.4-1-1v-1c0-.6.4-1,1-1s1,.4,1,1v1Z"/>' : '<path d="M8 22C8 20.8954 8.89543 20 10 20H38C39.1046 20 40 20.8954 40 22V42C40 43.1046 39.1046 44 38 44H10C8.89543 44 8 43.1046 8 42V22Z"/><path d="M15 4H33V20H15V4Z"/><path d="M21 10V12"/><path d="M27 10V12"/>';

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

module.exports = UsbMemoryStick;
