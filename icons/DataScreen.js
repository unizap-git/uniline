'use strict';

var React = require('react');

function DataScreen(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M12,18v3.5"/>   <path d="M5,21.5h14"/>   <path d="M20.5,2H3.5c-1.4,0-2.5,1.1-2.5,2.5v12c0,1.4,1.1,2.5,2.5,2.5h17c1.4,0,2.5-1.1,2.5-2.5V4.5c0-1.4-1.1-2.5-2.5-2.5ZM5,8.5c0-1.4,1.1-2.5,2.5-2.5s2.5,1.1,2.5,2.5-1.1,2.5-2.5,2.5-2.5-1.1-2.5-2.5ZM8,15c-.3,0-.6-.1-.8-.3-.4-.4-.3-1,0-1.4l8-7c.4-.4,1-.3,1.4,0,.4.4.3,1,0,1.4l-8,7c-.2.2-.4.2-.7.2ZM16.5,15c-1.4,0-2.5-1.1-2.5-2.5s1.1-2.5,2.5-2.5,2.5,1.1,2.5,2.5-1.1,2.5-2.5,2.5Z"/>' : '<rect x="4" y="6" width="40" height="30" rx="3"/><path d="M24 36V43"/><path d="M32 14L16 28"/><path d="M10 43H38"/><circle cx="15" cy="17" r="3"/><circle cx="33" cy="25" r="3"/>';

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

module.exports = DataScreen;
