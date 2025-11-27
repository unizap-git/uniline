'use strict';

var React = require('react');

function Passport(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M5,5l11-3v3"/>   <g>     <circle cx="12" cy="12" r="1"/>     <path d="M19,4H5c-.6,0-1,.4-1,1v17c0,.6.4,1,1,1h14c.6,0,1-.4,1-1V5c0-.6-.4-1-1-1ZM14,18h-4c-.6,0-1-.4-1-1s.4-1,1-1h4c.6,0,1,.4,1,1s-.4,1-1,1ZM12,15c-1.7,0-3-1.3-3-3s1.3-3,3-3,3,1.3,3,3-1.3,3-3,3Z"/>   </g>' : '<path d="M10 10H32H38V44H10V10Z"/><path d="M10 10L32 4V10"/><circle cx="24" cy="24" r="4"/><path d="M20 34H28"/>';

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

module.exports = Passport;
