'use strict';

var React = require('react');

function MilkOne(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M16,10H3c-.6,0-1,.4-1,1v11c0,.6.4,1,1,1h13c.6,0,1-.4,1-1v-11c0-.6-.4-1-1-1ZM13,19c0,.6-.4,1-1,1s-1-.4-1-1v-2.2l-.7.9c-.4.5-1.2.5-1.5,0l-.7-.9v2.2c0,.6-.4,1-1,1s-1-.4-1-1v-5c0-.4.3-.8.7-.9.4-.1.8,0,1.1.3l1.7,2.1,1.7-2.1c.3-.3.7-.4,1.1-.3.4.1.7.5.7.9v5Z"/>   <path d="M21,10l-6-5"/>   <path d="M10,3v3l5-1v-3l-5,1Z"/>   <path d="M16,11l5-1v10.5l-5,1.5v-11Z"/>   <path d="M9.7,6l-6.7,5h13l-6.3-5Z"/>' : '<rect x="6" y="22" width="26" height="22"/><path d="M14 38V28L19 34L24 28V38"/><path d="M42 20L30 10"/><path d="M20 6V12L30 10V4L20 6Z"/><path d="M32 22L42 20V41L32 44V22Z"/><path d="M19.4815 12L6 22H32L19.4815 12Z"/>';

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

module.exports = MilkOne;
