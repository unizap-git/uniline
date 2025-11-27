'use strict';

var React = require('react');

function Asterisk(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M12,1C5.9,1,1,5.9,1,12s4.9,11,11,11,11-4.9,11-11S18.1,1,12,1ZM16.5,13h-2.8l1.4,2.4c.3.5.1,1.1-.4,1.4-.2,0-.3.1-.5.1-.3,0-.7-.2-.9-.5l-1.4-2.4-1.4,2.4c-.2.3-.5.5-.9.5s-.3,0-.5-.1c-.5-.3-.6-.9-.4-1.4l1.4-2.4h-2.8c-.6,0-1-.4-1-1s.4-1,1-1h2.8l-1.4-2.4c-.3-.5-.1-1.1.4-1.4.5-.3,1.1-.1,1.4.4l1.4,2.4,1.4-2.4c.3-.5.9-.6,1.4-.4.5.3.6.9.4,1.4l-1.4,2.4h2.8c.6,0,1,.4,1,1s-.4,1-1,1Z"/>' : '<path d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"/><path d="M15 24H33"/><path d="M19.5 16.2056L28.5 31.794"/><path d="M28.5 16.2056L19.5 31.794"/>';

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

module.exports = Asterisk;
