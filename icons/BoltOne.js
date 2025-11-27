'use strict';

var React = require('react');

function BoltOne(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M10,6V2"/>   <path d="M14,6V2"/>   <path d="M17.9,5H6.1c-.6,0-1.1.5-1.1,1.1v5.9c0,3.9,3.1,7,7,7s7-3.1,7-7v-5.9c0-.6-.5-1.1-1.1-1.1ZM13,14.5h-2c-.6,0-1-.4-1-1s.4-1,1-1h2c.6,0,1,.4,1,1s-.4,1-1,1Z"/>   <path d="M12,18v2.5c0,.8.7,1.5,1.5,1.5h5.5"/>' : '<path d="M12 12.2802C12 12.1254 12.1254 12 12.2802 12H35.7198C35.8746 12 36 12.1254 36 12.2802V24C36 30.6274 30.6274 36 24 36C17.3726 36 12 30.6274 12 24V12.2802Z"/><path d="M20 12V4"/><path d="M28 12V4"/><path d="M22 27H26"/><path d="M24 36V41C24 42.6569 25.3431 44 27 44H38"/>';

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

module.exports = BoltOne;
