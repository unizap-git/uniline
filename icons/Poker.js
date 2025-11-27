'use strict';

var React = require('react');

function Poker(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M2,5.9l4-.9v17L2,5.9Z"/>   <path d="M21,1H6c-.6,0-1,.4-1,1v20c0,.6.4,1,1,1h15c.6,0,1-.4,1-1V2c0-.6-.4-1-1-1ZM10,7c0,.6-.4,1-1,1s-1-.4-1-1v-2c0-.6.4-1,1-1s1,.4,1,1v2ZM14.3,15.6c-.2.2-.5.4-.8.4s-.6-.1-.8-.4l-2.5-3c-.3-.4-.3-.9,0-1.3l2.5-3c.4-.5,1.2-.5,1.5,0l2.5,3c.3.4.3.9,0,1.3l-2.5,3ZM19,19c0,.6-.4,1-1,1s-1-.4-1-1v-2c0-.6.4-1,1-1s1,.4,1,1v2Z"/>' : '<path d="M42 4H12V44H42V4Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M4 11.7895L12 10V44L4 11.7895Z"/><path d="M27 18L22 24L27 30L32 24L27 18Z"/><path d="M18 10V14"/><path d="M36 34V38"/>';

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

module.exports = Poker;
