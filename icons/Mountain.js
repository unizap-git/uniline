'use strict';

var React = require('react');

function Mountain(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M14,14.5l2.8-3.5,5.2,8h-6"/>   <path d="M16.9,18.6l-7-14c-.3-.7-1.5-.7-1.8,0L1.1,18.6c-.2.3-.1.7,0,1s.5.5.9.5h14c.3,0,.7-.2.9-.5s.2-.7,0-1ZM12,12h-6c-.6,0-1-.4-1-1s.4-1,1-1h6c.6,0,1,.4,1,1s-.4,1-1,1Z"/>   <path d="M5,14c-.1,0-.3,0-.4-.1-.5-.2-.7-.8-.4-1.3l2-4c.2-.5.8-.7,1.3-.4.5.2.7.8.4,1.3l-2,4c-.2.4-.5.6-.9.6Z"/>   <path d="M11,9l2,4"/>' : '<path d="M18 10L32 38H4L18 10Z"/><path d="M28 29L33.6471 22L44 38H32"/><path d="M12 22L24 22"/><path d="M14 18L10 26"/><path d="M22 18L26 26"/>';

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

module.exports = Mountain;
