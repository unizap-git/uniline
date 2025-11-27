'use strict';

var React = require('react');

function Appointment(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<circle cx="12" cy="5.5" r="3.5"/>   <path d="M2,20.5c0-4.4,4-8,9-8"/>   <path d="M17,11.5c-3,0-5.5,2.5-5.5,5.5s2.5,5.5,5.5,5.5,5.5-2.5,5.5-5.5-2.5-5.5-5.5-5.5ZM18.5,18.5h-2c-.6,0-1-.4-1-1v-2c0-.6.4-1,1-1s1,.4,1,1v1h1c.6,0,1,.4,1,1s-.4,1-1,1Z"/>' : '<circle cx="24" cy="11" r="7"/><path d="M4 41C4 32.1634 12.0589 25 22 25"/><circle cx="34" cy="34" r="9"/><path d="M33 31V35H37"/>';

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

module.exports = Appointment;
