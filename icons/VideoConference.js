'use strict';

var React = require('react');

function VideoConference(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M22.4,5.6c-.3-.2-.7-.1-1,0l-2.4,1.8v-2.5c0-1.1-.9-2-2-2H3c-1.1,0-2,.9-2,2v14c0,1.1.9,2,2,2h14c1.1,0,2-.9,2-2v-2l2.4,1.8c.3.2.7.3,1,0,.3-.2.6-.5.6-.9V6.5c0-.4-.2-.7-.6-.9ZM6,10c0,.6-.4,1-1,1s-1-.4-1-1v-2c0-.6.4-1,1-1s1,.4,1,1v2ZM8.5,11c0,.6-.4,1-1,1s-1-.4-1-1v-4c0-.6.4-1,1-1s1,.4,1,1v4ZM11,10c0,.6-.4,1-1,1s-1-.4-1-1v-2c0-.6.4-1,1-1s1,.4,1,1v2Z"/>' : '<path d="M4 10C4 8.89543 4.89543 8 6 8H34C35.1046 8 36 8.89543 36 10V19L44 13V36L36 30V38C36 39.1046 35.1046 40 34 40H6C4.89543 40 4 39.1046 4 38V10Z"/><path d="M10 16V20"/><path d="M15 14V22"/><path d="M20 16V20"/>';

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

module.exports = VideoConference;
