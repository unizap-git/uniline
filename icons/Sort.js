'use strict';

var React = require('react');

function Sort(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M8,21h0c-.1,0-.3,0-.4,0-.1,0-.2-.1-.3-.2l-3-3c-.4-.4-.4-1,0-1.4s1-.4,1.4,0l1.3,1.3v-7.6c0-.6.4-1,1-1s1,.4,1,1v7.6l1.3-1.3c.4-.4,1-.4,1.4,0s.4,1,0,1.4l-3,3c0,0-.2.2-.3.2-.1,0-.2,0-.4,0h0ZM16,15c-.6,0-1-.4-1-1v-7.6l-1.3,1.3c-.4.4-1,.4-1.4,0s-.4-1,0-1.4l3-3c0,0,.2-.2.3-.2.1,0,.2,0,.4,0h0c.1,0,.3,0,.4,0,.1,0,.2.1.3.2l3,3c.4.4.4,1,0,1.4s-1,.4-1.4,0l-1.3-1.3v7.6c0,.6-.4,1-1,1Z"/>' : '<path d="M8 20V10m0 10-3-3m3 3 3-3m5-13v10m0-10 3 3m-3-3-3 3"/>';

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

module.exports = Sort;
