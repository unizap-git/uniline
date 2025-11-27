'use strict';

var React = require('react');

function ScaleOne(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M9,7H2.5v-2.5l6.5-2.5h6l6.5,2.5v2.5h-6.5"/>   <path d="M15,1h-6c-.6,0-1,.4-1,1v4c0-.6.4-1,1-1h2c.6,0,1,.4,1,1s-.4,1-1,1h-2c-.6,0-1-.4-1-1v3c0-.6.4-1,1-1h2.5c.6,0,1,.4,1,1s-.4,1-1,1h-2.5c-.6,0-1-.4-1-1v3c0-.6.4-1,1-1h2c.6,0,1,.4,1,1s-.4,1-1,1h-2c-.6,0-1-.4-1-1v3c0-.6.4-1,1-1h2.5c.6,0,1,.4,1,1s-.4,1-1,1h-2.5c-.6,0-1-.4-1-1v3c0-.6.4-1,1-1h2c.6,0,1,.4,1,1s-.4,1-1,1h-2c-.6,0-1-.4-1-1v4c0,.6.4,1,1,1h6c.6,0,1-.4,1-1V2c0-.6-.4-1-1-1Z"/>   <path d="M9,5v14"/>' : '<path d="M18 14L5 14L5 9L18 4L30 4L43 9L43 14L30 14"/><rect x="18" y="4" width="12" height="40"/><path d="M18 12H22"/><path d="M18 30H23"/><path d="M18 18H23"/><path d="M18 24H22"/><path d="M18 36H22"/><path d="M18 10V38"/>';

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

module.exports = ScaleOne;
