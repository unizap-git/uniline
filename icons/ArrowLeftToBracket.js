'use strict';

var React = require('react');

function ArrowLeftToBracket(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M17,21h-2c-.6,0-1-.4-1-1s.4-1,1-1h2c1.1,0,2-.9,2-2V7c0-1.1-.9-2-2-2h-2c-.6,0-1-.4-1-1s.4-1,1-1h2c2.2,0,4,1.8,4,4v10c0,2.2-1.8,4-4,4ZM12,17c-.3,0-.5,0-.7-.3-.4-.4-.4-1,0-1.4l2.3-2.3H4c-.6,0-1-.4-1-1s.4-1,1-1h9.6l-2.3-2.3c-.4-.4-.4-1,0-1.4s1-.4,1.4,0l4,4c0,0,.2.2.2.3,0,.1,0,.2,0,.4h0c0,.1,0,.3,0,.4,0,.1-.1.2-.2.3l-4,4c-.2.2-.5.3-.7.3Z"/>' : '<path d="M16 12H4m12 0-4 4m4-4-4-4m3-4h2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-2"/>';

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

module.exports = ArrowLeftToBracket;
