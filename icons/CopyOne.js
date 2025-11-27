'use strict';

var React = require('react');

function CopyOne(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M15,2l5.5,6"/>   <path d="M3.5,10v12h10.5"/>   <path d="M20.5,7h-4.5V2c0-.6-.4-1-1-1H6.5c-.6,0-1,.4-1,1v17c0,.6.4,1,1,1h14c.6,0,1-.4,1-1v-11c0-.6-.4-1-1-1ZM9.5,9h2c.6,0,1,.4,1,1s-.4,1-1,1h-2c-.6,0-1-.4-1-1s.4-1,1-1ZM15.5,15h-6c-.6,0-1-.4-1-1s.4-1,1-1h6c.6,0,1,.4,1,1s-.4,1-1,1Z"/>' : '<path d="M13 38H41V16H30V4H13V38Z"/><path d="M30 4L41 16"/><path d="M7 20V44H28"/><path d="M19 20H23"/><path d="M19 28H31"/>';

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

module.exports = CopyOne;
