'use strict';

var React = require('react');

function Log(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M17.5,5v-3H4c-.3,0-.5.2-.5.5v16.5h3"/>   <path d="M20.5,4H6.5c-.6,0-1,.4-1,1v17c0,.6.4,1,1,1h14c.6,0,1-.4,1-1V5c0-.6-.4-1-1-1ZM16.5,16h-6c-.6,0-1-.4-1-1s.4-1,1-1h6c.6,0,1,.4,1,1s-.4,1-1,1ZM16.5,12h-6c-.6,0-1-.4-1-1s.4-1,1-1h6c.6,0,1,.4,1,1s-.4,1-1,1Z"/>' : '<rect x="13" y="10" width="28" height="34"/><path d="M35 10V4H8C7.44772 4 7 4.44772 7 5V38H13"/><path d="M21 22H33"/><path d="M21 30H33"/>';

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

module.exports = Log;
