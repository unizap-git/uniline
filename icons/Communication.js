'use strict';

var React = require('react');

function Communication(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M16.5,19h-5.5v-4h7v-4h4v8h-2.5l-1.5,1.5-1.5-1.5Z"/>   <path d="M18,2H2c-.6,0-1,.4-1,1v12c0,.6.4,1,1,1h2.1l1.7,1.7c.2.2.5.3.7.3s.5,0,.7-.3l1.7-1.7h9.1c.6,0,1-.4,1-1V3c0-.6-.4-1-1-1ZM6.5,10h-.5c-.6,0-1-.4-1-1s.4-1,1-1h.5c.6,0,1,.4,1,1s-.4,1-1,1ZM10,10h-.5c-.6,0-1-.4-1-1s.4-1,1-1h.5c.6,0,1,.4,1,1s-.4,1-1,1ZM13.5,10h-.5c-.6,0-1-.4-1-1s.4-1,1-1h.5c.6,0,1,.4,1,1s-.4,1-1,1Z"/>' : '<path d="M33 38H22V30H36V22H44V38H39L36 41L33 38Z"/><path d="M4 6H36V30H17L13 34L9 30H4V6Z"/><path d="M19 18H20"/><path d="M26 18H27"/><path d="M12 18H13"/>';

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

module.exports = Communication;
