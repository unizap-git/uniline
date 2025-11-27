'use strict';

var React = require('react');

function Preschool(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M22,19.5H2c-.6,0-1,.4-1,1s.4,1,1,1h20c.6,0,1-.4,1-1s-.4-1-1-1Z"/>   <path d="M20.5,2.5H3.5c-1.1,0-2,.9-2,2v12c0,1.1.9,2,2,2h17c1.1,0,2-.9,2-2V4.5c0-1.1-.9-2-2-2ZM8,14c0,.6-.4,1-1,1s-1-.4-1-1v-7c0-.6.4-1,1-1s1,.4,1,1v7ZM14,11.5h-1v1c0,.6-.4,1-1,1s-1-.4-1-1v-1h-1c-.6,0-1-.4-1-1s.4-1,1-1h1v-1c0-.6.4-1,1-1s1,.4,1,1v1h1c.6,0,1,.4,1,1s-.4,1-1,1ZM18,14c0,.6-.4,1-1,1s-1-.4-1-1v-7c0-.6.4-1,1-1s1,.4,1,1v7Z"/>' : '<path d="M7 35H41C42.1046 35 43 34.1046 43 33V9C43 7.89543 42.1046 7 41 7H7C5.89543 7 5 7.89543 5 9V33C5 34.1046 5.89543 35 7 35Z"/><path d="M14 14V28"/><path d="M34 14V28"/><path d="M24 17V25"/><path d="M20 21H28"/><path d="M4 41L44 41"/>';

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

module.exports = Preschool;
