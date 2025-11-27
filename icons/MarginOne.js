'use strict';

var React = require('react');

function MarginOne(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<g>     <path d="M21,8H3c-.6,0-1-.4-1-1v10c0-.6.4-1,1-1h18c.6,0,1,.4,1,1V7c0,.6-.4,1-1,1Z"/>     <path d="M21,18H3c-.6,0-1-.4-1-1v2.5c0,1.4,1.1,2.5,2.5,2.5h15c1.4,0,2.5-1.1,2.5-2.5v-2.5c0,.6-.4,1-1,1Z"/>     <path d="M19.5,2H4.5c-1.4,0-2.5,1.1-2.5,2.5v2.5c0-.6.4-1,1-1h18c.6,0,1,.4,1,1v-2.5c0-1.4-1.1-2.5-2.5-2.5Z"/>   </g>   <path d="M3,9.5c-.6,0-1-.4-1-1v-3c0-.6.4-1,1-1s1,.4,1,1v3c0,.6-.4,1-1,1Z"/>   <path d="M3,19.5c-.6,0-1-.4-1-1v-3c0-.6.4-1,1-1s1,.4,1,1v3c0,.6-.4,1-1,1Z"/>   <path d="M21,19.5c-.6,0-1-.4-1-1v-3c0-.6.4-1,1-1s1,.4,1,1v3c0,.6-.4,1-1,1Z"/>   <path d="M21,9.5c-.6,0-1-.4-1-1v-3c0-.6.4-1,1-1s1,.4,1,1v3c0,.6-.4,1-1,1Z"/>' : '<rect x="6" y="6" width="36" height="36" rx="3"/><path d="M6 34H42"/><path d="M6 14H42"/><path d="M6 11V17"/><path d="M6 31V37"/><path d="M42 31V37"/><path d="M42 11V17"/>';

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

module.exports = MarginOne;
