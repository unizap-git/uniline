'use strict';

var React = require('react');

function ArrowsRepeatCount(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M8,21c-.3,0-.5,0-.7-.3l-3-3c-.3-.3-.4-.7-.2-1.1s.5-.6.9-.6h13v-2c0-.6.4-1,1-1s1,.4,1,1v3c0,.6-.4,1-1,1H7.4l1.3,1.3c.4.4.4,1,0,1.4s-.5.3-.7.3ZM12,15c-.6,0-1-.4-1-1v-2l-.4.3c-.4.3-1.1.2-1.4-.2-.3-.4-.2-1.1.2-1.4l2-1.5c.3-.2.7-.3,1,0s.6.5.6.9v4c0,.6-.4,1-1,1ZM5,11c-.6,0-1-.4-1-1v-3c0-.6.4-1,1-1h11.6l-1.3-1.3c-.4-.4-.4-1,0-1.4s1-.4,1.4,0l3,3c.3.3.4.7.2,1.1-.2.4-.5.6-.9.6H6v2c0,.6-.4,1-1,1Z"/>' : '<path d="m16 4 3 3H5v3m3 10-3-3h14v-3m-9-2.5 2-1.5v4"/>';

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

module.exports = ArrowsRepeatCount;
