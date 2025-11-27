'use strict';

var React = require('react');

function HospitalFour(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M21,11h-7c-.6,0-1,.4-1,1v9c0,.6.4,1,1,1h7c1.1,0,2-.9,2-2v-7c0-1.1-.9-2-2-2ZM19,19h-2c-.6,0-1-.4-1-1s.4-1,1-1h2c.6,0,1,.4,1,1s-.4,1-1,1ZM19,16h-2c-.6,0-1-.4-1-1s.4-1,1-1h2c.6,0,1,.4,1,1s-.4,1-1,1Z"/>   <path d="M13,2H3c-1.1,0-2,.9-2,2v16c0,1.1.9,2,2,2h11c.6,0,1-.4,1-1V4c0-1.1-.9-2-2-2ZM6,8h1v-1c0-.6.4-1,1-1s1,.4,1,1v1h1c.6,0,1,.4,1,1s-.4,1-1,1h-1v1c0,.6-.4,1-1,1s-1-.4-1-1v-1h-1c-.6,0-1-.4-1-1s.4-1,1-1ZM11.5,21h-2v-4.5c0-.3-.2-.5-.5-.5h-2c-.3,0-.5.2-.5.5v4.5h-2v-4.5c0-1.4,1.1-2.5,2.5-2.5h2c1.4,0,2.5,1.1,2.5,2.5v4.5Z"/>   <path d="M3.5,21h9"/>' : '<path d="M4 8C4 6.89543 4.89543 6 6 6H26C27.1046 6 28 6.89543 28 8V42H6C4.89543 42 4 41.1046 4 40V8Z"/><path d="M21 42V33C21 31.3431 19.6569 30 18 30H14C12.3431 30 11 31.3431 11 33V42"/><path d="M28 24H42C43.1046 24 44 24.8954 44 26V40C44 41.1046 43.1046 42 42 42H28V24Z"/><path d="M12 18H20"/><path d="M34 30H38"/><path d="M34 36H38"/><path d="M16 14V22"/><path d="M7 42H25"/>';

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

module.exports = HospitalFour;
