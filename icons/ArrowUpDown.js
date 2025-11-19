'use strict';

var React = require('react');

function ArrowUpDown(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M8,21h-.4c0,0-.2-.1-.3-.2l-4-4c-.4-.4-.4-1,0-1.4s1-.4,1.4,0l2.3,2.3V7c0-.6.4-1,1-1s1,.4,1,1v10.6l2.3-2.3c.4-.4,1-.4,1.4,0s.4,1,0,1.4l-4,4s-.2.2-.3.2h-.4,0ZM16,18c-.6,0-1-.4-1-1V6.4l-2.3,2.3c-.4.4-1,.4-1.4,0s-.4-1,0-1.4l4-4s.2-.2.3-.2h.8c.1,0,.2,0,.3.2l4,4c.4.4.4,1,0,1.4s-1,.4-1.4,0l-2.3-2.3v10.6c0,.6-.4,1-1,1Z"/>' : '<path d="M8 20V7m0 13-4-4m4 4 4-4m4-12v13m0-13 4 4m-4-4-4 4"/>';

  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
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

module.exports = ArrowUpDown;
