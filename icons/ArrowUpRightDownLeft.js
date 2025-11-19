'use strict';

var React = require('react');

function ArrowUpRightDownLeft(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M8,21H4c-.1,0-.3,0-.4,0-.1,0-.2-.1-.3-.2s-.2-.2-.2-.3c0-.1,0-.2,0-.4h0v-4c0-.6.4-1,1-1s1,.4,1,1v1.6l3.3-3.3c.4-.4,1-.4,1.4,0s.4,1,0,1.4l-3.3,3.3h1.6c.6,0,1,.4,1,1s-.4,1-1,1ZM15,10c-.3,0-.5,0-.7-.3-.4-.4-.4-1,0-1.4l3.3-3.3h-1.6c-.6,0-1-.4-1-1s.4-1,1-1h4c.1,0,.3,0,.4,0,.1,0,.2.1.3.2s.2.2.2.3c0,.1,0,.2,0,.4h0v4c0,.6-.4,1-1,1s-1-.4-1-1v-1.6l-3.3,3.3c-.2.2-.5.3-.7.3Z"/>' : '<path d="M16 4h4m0 0v4m0-4-5 5M8 20H4m0 0v-4m0 4 5-5"/>';

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

module.exports = ArrowUpRightDownLeft;
