'use strict';

var React = require('react');

function OnlineMeeting(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M22,3H2c-.6,0-1,.4-1,1v15c0,.6.4,1,1,1h7.1l2.2,2.2c.2.2.5.3.7.3s.5,0,.7-.3l2.2-2.2h7.1c.6,0,1-.4,1-1V4c0-.6-.4-1-1-1ZM7,13.5c0,.6-.4,1-1,1s-1-.4-1-1v-4c0-.6.4-1,1-1s1,.4,1,1v4ZM11,15c0,.6-.4,1-1,1s-1-.4-1-1v-7c0-.6.4-1,1-1s1,.4,1,1v7ZM15,12.5c0,.6-.4,1-1,1s-1-.4-1-1v-2c0-.6.4-1,1-1s1,.4,1,1v2ZM19,13.5c0,.6-.4,1-1,1s-1-.4-1-1v-4c0-.6.4-1,1-1s1,.4,1,1v4Z"/>' : '<path d="M44 8H4V38H19L24 43L29 38H44V8Z"/><path d="M12 19V27"/><path d="M20 16V30"/><path d="M28 21V25"/><path d="M36 19V27"/>';

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

module.exports = OnlineMeeting;
