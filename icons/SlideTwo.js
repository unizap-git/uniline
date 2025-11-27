'use strict';

var React = require('react');

function SlideTwo(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M2,4h20"/>   <path d="M20,3H4c-.6,0-1,.4-1,1v13c0,.6.4,1,1,1h16c.6,0,1-.4,1-1V4c0-.6-.4-1-1-1ZM9.2,11.3c.4.4.4,1,0,1.4s-.5.3-.7.3-.5,0-.7-.3l-1.5-1.5c-.4-.4-.4-1,0-1.4l1.5-1.5c.4-.4,1-.4,1.4,0s.4,1,0,1.4l-.8.8.8.8ZM17.7,11.2l-1.5,1.5c-.2.2-.5.3-.7.3s-.5,0-.7-.3c-.4-.4-.4-1,0-1.4l.8-.8-.8-.8c-.4-.4-.4-1,0-1.4s1-.4,1.4,0l1.5,1.5c.4.4.4,1,0,1.4Z"/>   <path d="M8,21l4-4,4,4"/>' : '<path d="M4 8H44"/><path fill-rule="evenodd" clip-rule="evenodd" d="M8 8H40V34H8V8Z"/><path d="M31 18L34 21L31 24"/><path d="M17 24L14 21L17 18"/><path d="M16 42L24 34L32 42"/>';

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

module.exports = SlideTwo;
