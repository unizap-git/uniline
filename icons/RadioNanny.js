'use strict';

var React = require('react');

function RadioNanny(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M12,4c-2,0-3.7.7-5,2v-4c0-.6-.4-1-1-1s-1,.4-1,1v8c0,0,0,.1,0,.2,0,.2,0,.5,0,.7v10.2c0,1.1.9,2,2,2h10c1.1,0,2-.9,2-2v-10.2c0-3.9-3-6.8-7-6.8ZM12,8.5c1.7,0,3,1.3,3,3s-1.3,3-3,3-3-1.3-3-3,1.3-3,3-3ZM10,18h-1c-.6,0-1-.4-1-1s.4-1,1-1h1c.6,0,1,.4,1,1s-.4,1-1,1ZM15,20h-2c-.6,0-1-.4-1-1s.4-1,1-1h2c.6,0,1,.4,1,1s-.4,1-1,1Z"/>' : '<path d="M36 42.0012V21.6875C36 15.3125 31.0909 10 24 10C16.9091 10 12 15.3125 12 21.6875V42.0012C12 43.1058 12.8954 44 14 44H34C35.1046 44 36 43.1058 36 42.0012Z"/><circle cx="24" cy="23" r="4"/><path d="M18 34H20"/><path d="M26 38H30"/><path d="M12 20V4"/>';

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

module.exports = RadioNanny;
