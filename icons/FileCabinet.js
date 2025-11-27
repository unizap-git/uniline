'use strict';

var React = require('react');

function FileCabinet(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M21,1H3c-.6,0-1,.4-1,1v5c0,.6.4,1,1,1h18c.6,0,1-.4,1-1V2c0-.6-.4-1-1-1ZM13.5,5.5h-3c-.6,0-1-.4-1-1s.4-1,1-1h3c.6,0,1,.4,1,1s-.4,1-1,1Z"/>   <path d="M21,8.5H3c-.6,0-1,.4-1,1v5c0,.6.4,1,1,1h18c.6,0,1-.4,1-1v-5c0-.6-.4-1-1-1ZM13.5,13h-3c-.6,0-1-.4-1-1s.4-1,1-1h3c.6,0,1,.4,1,1s-.4,1-1,1Z"/>   <path d="M21,16H3c-.6,0-1,.4-1,1v5c0,.6.4,1,1,1h18c.6,0,1-.4,1-1v-5c0-.6-.4-1-1-1ZM13.5,20.5h-3c-.6,0-1-.4-1-1s.4-1,1-1h3c.6,0,1,.4,1,1s-.4,1-1,1Z"/>' : '<path d="M42 4H6V14H42V4Z"/><path d="M42 19H6V29H42V19Z"/><path d="M42 34H6V44H42V34Z"/><path d="M21 9H27"/><path d="M21 24H27"/><path d="M21 39H27"/>';

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

module.exports = FileCabinet;
