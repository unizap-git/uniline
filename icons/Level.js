'use strict';

var React = require('react');

function Level(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M22.9,8.8l-2.8-6.2c-.2-.4-.5-.6-.9-.6H4.8c-.4,0-.7.2-.9.6l-2.8,6.2c-.2.4-.1.8.1,1.1l10,11.8c.2.2.5.4.8.4s.6-.1.8-.4l10-11.8c.3-.3.3-.7.1-1.1ZM16.7,9.7l-4,4.5c-.2.2-.5.3-.7.3s-.6-.1-.7-.3l-4-4.5c-.4-.4-.3-1,0-1.4.4-.4,1-.3,1.4,0l3.3,3.7,3.3-3.7c.4-.4,1-.5,1.4,0,.4.4.5,1,0,1.4Z"/>' : '<path d="M24 42L4 18.5L9.69488 6L38.3051 6L44 18.5L24 42Z"/><path d="M32 18L24 27L16 18"/>';

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

module.exports = Level;
