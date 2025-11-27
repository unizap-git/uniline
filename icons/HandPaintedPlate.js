'use strict';

var React = require('react');

function HandPaintedPlate(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M9,5h12c.6,0,1,.4,1,1v13c0,.6-.4,1-1,1h-12" stroke-miterlimit="2"/>   <path d="M18.5,8l-6,8.5"/>   <path d="M3,4c-1.1,0-2,.9-2,2v13c0,1.1.9,2,2,2h7V4H3ZM5.5,17.5c-.6,0-1-.4-1-1s.4-1,1-1,1,.4,1,1-.4,1-1,1ZM5.5,14.5c-.6,0-1-.4-1-1s.4-1,1-1,1,.4,1,1-.4,1-1,1ZM6.5,10.5c0,.6-.4,1-1,1s-1-.4-1-1v-2c0-.6.4-1,1-1s1,.4,1,1v2Z"/>' : '<path d="M18 10H42C43.1046 10 44 10.8954 44 12V38C44 39.1046 43.1046 40 42 40H18"/><path d="M4 12C4 10.8954 4.89543 10 6 10H18V40H6C4.89543 40 4 39.1046 4 38V12Z"/><path d="M11 17V21"/><path d="M37 16L25 33"/><rect x="9" y="25" width="4" height="4" rx="2"/><rect x="9" y="31" width="4" height="4" rx="2"/>';

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

module.exports = HandPaintedPlate;
