'use strict';

var React = require('react');

function Pic(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M20.5,3H3.5c-1.1,0-2,.9-2,2v14c0,1.1.9,2,2,2h17c1.1,0,2-.9,2-2V5c0-1.1-.9-2-2-2ZM20.5,5v10l-6.9-5.3c-.4-.3-1-.3-1.4.1l-2.4,2.8-1.7-1.4c-.4-.3-1-.3-1.3,0l-3.3,3.3V5h17Z"/>   <path d="M7.2,10c1,0,1.8-.8,1.8-1.8s-.8-1.8-1.8-1.8-1.8.8-1.8,1.8.8,1.8,1.8,1.8ZM7.2,8c.1,0,.2.1.2.2,0,.3-.5.3-.5,0s.1-.2.2-.2Z"/>' : '<path fill-rule="evenodd" clip-rule="evenodd" d="M5 10C5 8.89543 5.89543 8 7 8L41 8C42.1046 8 43 8.89543 43 10V38C43 39.1046 42.1046 40 41 40H7C5.89543 40 5 39.1046 5 38V10Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M14.5 18C15.3284 18 16 17.3284 16 16.5C16 15.6716 15.3284 15 14.5 15C13.6716 15 13 15.6716 13 16.5C13 17.3284 13.6716 18 14.5 18Z"/><path d="M15 24L20 28L26 21L43 34V38C43 39.1046 42.1046 40 41 40H7C5.89543 40 5 39.1046 5 38V34L15 24Z"/>';

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

module.exports = Pic;
