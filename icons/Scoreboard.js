'use strict';

var React = require('react');

function Scoreboard(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M7,3v3"/>   <path d="M17,3v3"/>   <g>     <path d="M11,20V6c0-.6.4-1,1-1H3.5c-1.4,0-2.5,1.1-2.5,2.5v11c0,1.4,1.1,2.5,2.5,2.5h8.5c-.6,0-1-.4-1-1ZM8.5,16.5c0,.6-.4,1-1,1s-1-.4-1-1v-4.5l-.7.7c-.4.4-1,.4-1.4,0-.4-.4-.4-1,0-1.4l2.4-2.5c.3-.3.7-.4,1.1-.2.4.2.6.5.6.9v7Z"/>     <path d="M16.5,13c0,1.2.3,2,.5,2.4.2-.3.5-1.1.5-2.4s-.3-2-.5-2.4c-.2.3-.5,1.1-.5,2.4Z"/>     <path d="M20.5,5h-8.5c.6,0,1,.4,1,1v14c0,.6-.4,1-1,1h8.5c1.4,0,2.5-1.1,2.5-2.5V7.5c0-1.4-1.1-2.5-2.5-2.5ZM17,17.5c-1.5,0-2.5-1.9-2.5-4.5s1-4.5,2.5-4.5,2.5,1.9,2.5,4.5-1,4.5-2.5,4.5Z"/>   </g>   <path d="M10.5,6h3"/>   <path d="M10.5,20h3"/>' : '<rect x="4" y="12" width="40" height="28" rx="3"/><path d="M14 6V12"/><path d="M34 6V12"/><path d="M10.2266 24L15.0006 19.0166V33"/><path d="M24 12V40"/><ellipse cx="34" cy="26" rx="3" ry="7"/><path d="M21 12H27"/><path d="M21 40H27"/>';

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

module.exports = Scoreboard;
