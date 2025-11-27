'use strict';

var React = require('react');

function DamageMap(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M20.5,3h-1.5c-.3,0-.6.2-.8.4l-2,3c-.2.3-.2.7,0,1.1l.9,1.5-3.5,1.5c-.4.2-.6.6-.6,1l.4,3.1-2.7.8c-.5.2-.8.7-.7,1.2l1,3.5c.1.4.5.7,1,.7h8.5c1.1,0,2-.9,2-2V5c0-1.1-.9-2-2-2Z"/>   <path d="M15.9,3.5c-.2-.3-.5-.5-.9-.5H3.5c-1.1,0-2,.9-2,2v14c0,1.1.9,2,2,2h5.5c.3,0,.6-.1.8-.4.2-.2.3-.6.2-.9l-1.2-4.5,2.6-.7c.5-.1.8-.6.7-1.1l-.4-2.8,3.4-1.7c.3-.1.4-.4.5-.6,0-.3,0-.6-.1-.8l-.6-1,1.2-2c.2-.3.2-.7,0-1ZM7.2,10c-1,0-1.8-.8-1.8-1.8s.8-1.8,1.8-1.8,1.8.8,1.8,1.8-.8,1.8-1.8,1.8Z"/>' : '<path d="M5 10V38C5 39.1046 5.89543 40 7 40H14H18L15 29L22 27L21 20L29 16L27 13L30 8H7C5.89543 8 5 8.89543 5 10Z"/><path d="M43 38V10C43 8.89543 42.1046 8 41 8H38L34 14L37 19L28 23L29 31L22 33L24 40H41C42.1046 40 43 39.1046 43 38Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M14.5 18C15.3284 18 16 17.3284 16 16.5C16 15.6716 15.3284 15 14.5 15C13.6716 15 13 15.6716 13 16.5C13 17.3284 13.6716 18 14.5 18Z"/>';

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

module.exports = DamageMap;
