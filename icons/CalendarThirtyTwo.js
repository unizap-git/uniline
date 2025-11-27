'use strict';

var React = require('react');

function CalendarThirtyTwo(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M8.5,2v4"/>   <path d="M15.5,2v4"/>   <g>     <rect x="15" y="11" width="2" height="5"/>     <path d="M22,3H2c-.6,0-1,.4-1,1v18c0,.6.4,1,1,1h20c.6,0,1-.4,1-1V4c0-.6-.4-1-1-1ZM11,17c0,.6-.4,1-1,1h-4c-.6,0-1-.4-1-1s.4-1,1-1h3v-1.5h-2c-.6,0-1-.4-1-1s.4-1,1-1h2v-1.5h-3c-.6,0-1-.4-1-1s.4-1,1-1h4c.6,0,1,.4,1,1v7ZM19,17c0,.6-.4,1-1,1h-4c-.6,0-1-.4-1-1v-7c0-.6.4-1,1-1h4c.6,0,1,.4,1,1v7Z"/>   </g>' : '<rect x="4" y="8" width="40" height="36"/><path fill-rule="evenodd" clip-rule="evenodd" d="M28 20V34H36V20H28Z"/><path d="M17 4V12"/><path d="M31 4V12"/><path d="M12 20H20V34H12"/><path d="M20 27H14"/>';

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

module.exports = CalendarThirtyTwo;
