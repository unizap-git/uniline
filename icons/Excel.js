'use strict';

var React = require('react');

function Excel(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M4,7.5V3c0-.6.4-1,1-1h14c.6,0,1,.4,1,1v18c0,.6-.4,1-1,1H5c-.6,0-1-.4-1-1v-4.5"/>   <path d="M15.5,7.5h1.5" stroke-miterlimit="2"/>   <path d="M14,11.5h3" stroke-miterlimit="2"/>   <path d="M14,15.5h3" stroke-miterlimit="2"/>   <path d="M11,6.5H2c-.6,0-1,.4-1,1v9c0,.6.4,1,1,1h9c.6,0,1-.4,1-1V7.5c0-.6-.4-1-1-1ZM8.7,12.8c.4.4.4,1,0,1.4s-.5.3-.7.3-.5,0-.7-.3l-.8-.8-.8.8c-.2.2-.5.3-.7.3s-.5,0-.7-.3c-.4-.4-.4-1,0-1.4l.8-.8-.8-.8c-.4-.4-.4-1,0-1.4s1-.4,1.4,0l.8.8.8-.8c.4-.4,1-.4,1.4,0s.4,1,0,1.4l-.8.8.8.8Z"/>' : '<path d="M8 15V6C8 4.89543 8.89543 4 10 4H38C39.1046 4 40 4.89543 40 6V42C40 43.1046 39.1046 44 38 44H10C8.89543 44 8 43.1046 8 42V33"/><path d="M31 15H34"/><path d="M28 23H34"/><path d="M28 31H34"/><rect x="4" y="15" width="18" height="18"/><path d="M10 21L16 27"/><path d="M16 21L10 27"/>';

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

module.exports = Excel;
