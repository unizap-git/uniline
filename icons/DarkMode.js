'use strict';

var React = require('react');

function DarkMode(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M22.7,11.3l-2.3-2.3v-4.3c0-.6-.4-1-1-1h-4.3l-2.3-2.3c-.4-.4-1-.4-1.4,0l-2.3,2.3h-4.3c-.6,0-1,.4-1,1v4.3l-2.3,2.3c-.4.4-.4,1,0,1.4l2.3,2.3v4.3c0,.6.4,1,1,1h4.3l2.3,2.3c.2.2.5.3.7.3s.5,0,.7-.3l2.3-2.3h4.3c.6,0,1-.4,1-1v-4.3l2.3-2.3c.4-.4.4-1,0-1.4ZM15.1,15.8c-.9.7-2,1-3,1s-1.5-.2-2.3-.5c-1.4-.7-2.3-2-2.3-3.3s.4-1,1-1c2.6,0,4-.6,4-3.5s.4-1,1-1c1.3,0,2.6,1.2,3.1,2.9.7,2.1,0,4.2-1.6,5.4Z"/>' : '<path d="M24.0033 4L29.2737 9.27038H38.7296V18.7263L44 23.9967L38.7296 29.2737V38.7296H29.2737L24.0033 44L18.7264 38.7296H9.27036V29.2737L4 23.9967L9.27036 18.7263V9.27038H18.7264L24.0033 4Z" stroke-miterlimit="10"/><path d="M27 17C27 25 22 26 17 26C17 30 23.5 34 29 30C34.5 26 31 17 27 17Z" stroke-miterlimit="10"/>';

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

module.exports = DarkMode;
