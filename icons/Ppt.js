'use strict';

var React = require('react');

function Ppt(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M2,4h20"/>   <path d="M20,3H4c-.6,0-1,.4-1,1v13c0,.6.4,1,1,1h16c.6,0,1-.4,1-1V4c0-.6-.4-1-1-1ZM14.2,11.2l-2.5,2.5c-.2.2-.5.3-.7.3s-.5,0-.7-.3c-.4-.4-.4-1,0-1.4l1.8-1.8-1.8-1.8c-.4-.4-.4-1,0-1.4s1-.4,1.4,0l2.5,2.5c.4.4.4,1,0,1.4Z"/>   <path d="M8,21l4-4,4,4"/>' : '<path d="M4 8H44"/><path fill-rule="evenodd" clip-rule="evenodd" d="M8 8H40V34H8V8Z"/><path d="M22 16L27 21L22 26"/><path d="M16 42L24 34L32 42"/>';

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

module.exports = Ppt;
