'use strict';

var React = require('react');

function AppStore(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M19.5,2H4.5c-1.4,0-2.5,1.1-2.5,2.5v15c0,1.4,1.1,2.5,2.5,2.5h15c1.4,0,2.5-1.1,2.5-2.5V4.5c0-1.4-1.1-2.5-2.5-2.5ZM8.8,17.3l-.4.7c-.2.3-.5.5-.9.5s-.3,0-.5-.1c-.5-.3-.6-.9-.4-1.4l.4-.7c.3-.5.9-.6,1.4-.4.5.3.6.9.4,1.4ZM11.5,15.5h-5.5c-.6,0-1-.4-1-1s.4-1,1-1h2.7l2-3.3-2-3.1c-.3-.5-.2-1.1.3-1.4.5-.3,1.1-.2,1.4.3l1.5,2.3,1.3-2.3c.3-.5.9-.6,1.4-.4.5.3.6.9.4,1.4l-3.8,6.5h.5c.6,0,1,.4,1,1s-.4,1-1,1ZM18,15.5h-1.6l.9,1.5c.3.5.2,1.1-.3,1.4-.2.1-.4.2-.5.2-.3,0-.7-.2-.8-.5l-3.1-4.8c-.3-.5-.2-1.1.3-1.4.5-.3,1.1-.2,1.4.3l.9,1.3h2.9c.6,0,1,.4,1,1s-.4,1-1,1Z"/>' : '<path d="M39 6H9C7.34315 6 6 7.34315 6 9V39C6 40.6569 7.34315 42 9 42H39C40.6569 42 42 40.6569 42 39V9C42 7.34315 40.6569 6 39 6Z"/><path d="M28 13L21.5 24L19.875 26.75L19.0625 28.125"/><path d="M15 35L15.8125 33.625"/><path d="M12 29L23 29"/><path d="M30 29H36"/><path d="M19 13L22.5 18.5L23.375 19.875"/><path d="M33 35L29.5 29.5L27.75 26.75L26.875 25.375"/>';

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

module.exports = AppStore;
