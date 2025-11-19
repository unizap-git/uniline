'use strict';

var React = require('react');

function ArrowLeft(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M9,17c-.3,0-.5,0-.7-.3l-4-4c0,0-.2-.2-.2-.3,0-.1,0-.2,0-.4h0c0-.1,0-.3,0-.4,0-.1.1-.2.2-.3l4-4c.4-.4,1-.4,1.4,0s.4,1,0,1.4l-2.3,2.3h11.6c.6,0,1,.4,1,1s-.4,1-1,1H7.4l2.3,2.3c.4.4.4,1,0,1.4s-.5.3-.7.3Z"/>' : '<path d="M5 12h14M5 12l4-4m-4 4 4 4"/>';

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

module.exports = ArrowLeft;
