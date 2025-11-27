'use strict';

var React = require('react');

function Message(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M12,1C5.9,1,1,5.9,1,12v10c0,.6.4,1,1,1h10c6.1,0,11-4.9,11-11S18.1,1,12,1ZM12,18h-5c-.6,0-1-.4-1-1s.4-1,1-1h5c.6,0,1,.4,1,1s-.4,1-1,1ZM16,14H7c-.6,0-1-.4-1-1s.4-1,1-1h9c.6,0,1,.4,1,1s-.4,1-1,1ZM16,10H7c-.6,0-1-.4-1-1s.4-1,1-1h9c.6,0,1,.4,1,1s-.4,1-1,1Z"/>' : '<path d="M44.0001 24C44.0001 35.0457 35.0458 44 24.0001 44C18.0266 44 4.00006 44 4.00006 44C4.00006 44 4.00006 29.0722 4.00006 24C4.00006 12.9543 12.9544 4 24.0001 4C35.0458 4 44.0001 12.9543 44.0001 24Z"/><path d="M14 18L32 18"/><path d="M14 26H32"/><path d="M14 34H24"/>';

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

module.exports = Message;
