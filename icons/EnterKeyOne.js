'use strict';

var React = require('react');

function EnterKeyOne(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M21.5,1.5h-10c-.6,0-1,.4-1,1v8H2.5c-.6,0-1,.4-1,1v10c0,.6.4,1,1,1h19c.6,0,1-.4,1-1V2.5c0-.6-.4-1-1-1ZM17.5,16.5c0,.6-.4,1-1,1h-7.6l.3.3c.4.4.4,1,0,1.4s-.5.3-.7.3-.5,0-.7-.3l-2-2c0,0-.2-.2-.2-.3-.1-.2-.1-.5,0-.8,0-.1.1-.2.2-.3l2-2c.4-.4,1-.4,1.4,0s.4,1,0,1.4l-.3.3h6.6V6.5c0-.6.4-1,1-1s1,.4,1,1v10Z"/>' : '<path d="M23 23V5H43V43H5V23H23Z"/><path d="M33 13V33H13"/><path d="M17 29L13 33L17 37"/>';

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

module.exports = EnterKeyOne;
