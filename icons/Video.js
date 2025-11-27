'use strict';

var React = require('react');

function Video(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M2,11c-.6,0-1-.4-1-1v-2c0-.6.4-1,1-1s1,.4,1,1v2c0,.6-.4,1-1,1Z"/>   <path d="M4.5,4h3"/>   <path d="M4.5,20h3"/>   <path d="M16.5,4h3"/>   <path d="M16.5,20h3"/>   <path d="M2,17c-.6,0-1-.4-1-1v-2c0-.6.4-1,1-1s1,.4,1,1v2c0,.6-.4,1-1,1Z"/>   <path d="M22,17c-.6,0-1-.4-1-1v-2c0-.6.4-1,1-1s1,.4,1,1v2c0,.6-.4,1-1,1Z"/>   <path d="M22,11c-.6,0-1-.4-1-1v-2c0-.6.4-1,1-1s1,.4,1,1v2c0,.6-.4,1-1,1Z"/>   <g>     <path d="M17,20V4c0-.6.4-1,1-1H6c.6,0,1,.4,1,1v16c0,.6-.4,1-1,1h12c-.6,0-1-.4-1-1ZM15,12.8l-4,2.5c-.2.1-.3.2-.5.2s-.3,0-.5-.1c-.3-.2-.5-.5-.5-.9v-5c0-.4.2-.7.5-.9.3-.2.7-.2,1,0l4,2.5c.3.2.5.5.5.8s-.2.7-.5.8Z"/>     <path d="M5,20v-4h-3c-.6,0-1-.4-1-1v4c0,1.1.9,2,2,2h3c-.6,0-1-.4-1-1Z"/>     <path d="M2,14h3v-4h-3c-.6,0-1-.4-1-1v6c0-.6.4-1,1-1Z"/>     <path d="M22,16h-3v4c0,.6-.4,1-1,1h3c1.1,0,2-.9,2-2v-4c0,.6-.4,1-1,1Z"/>     <path d="M21,3h-3c.6,0,1,.4,1,1v4h3c.6,0,1,.4,1,1v-4c0-1.1-.9-2-2-2Z"/>     <path d="M22,10h-3v4h3c.6,0,1,.4,1,1v-6c0,.6-.4,1-1,1Z"/>     <path d="M2,8h3v-4c0-.6.4-1,1-1h-3c-1.1,0-2,.9-2,2v4c0-.6.4-1,1-1Z"/>   </g>' : '<path d="M4 10C4 8.89543 4.89543 8 6 8H42C43.1046 8 44 8.89543 44 10V38C44 39.1046 43.1046 40 42 40H6C4.89543 40 4 39.1046 4 38V10Z"/><path d="M36 8V40"/><path d="M12 8V40"/><path d="M38 18H44"/><path d="M38 30H44"/><path d="M4 18H10"/><path d="M4 16V20"/><path d="M9 8H15"/><path d="M9 40H15"/><path d="M33 8H39"/><path d="M33 40H39"/><path d="M4 30H10"/><path d="M4 28V32"/><path d="M44 28V32"/><path d="M44 16V20"/><path d="M21 19L29 24L21 29V19Z"/>';

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

module.exports = Video;
