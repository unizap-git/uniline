'use strict';

var React = require('react');

function Devices(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M11.5,21.5h10V2.5H7v5"/>   <path d="M11.5,6.5H2.5c-.6,0-1,.4-1,1v14c0,.6.4,1,1,1h9c.6,0,1-.4,1-1V7.5c0-.6-.4-1-1-1ZM7.5,19.5h-1c-.6,0-1-.4-1-1s.4-1,1-1h1c.6,0,1,.4,1,1s-.4,1-1,1Z"/>   <path d="M14,18.5h1"/>' : '<path d="M23 43H43V5H14V15"/><path d="M5 15H23V43H5L5 15Z"/><path d="M13 37H15"/><path d="M28 37H30"/>';

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

module.exports = Devices;
