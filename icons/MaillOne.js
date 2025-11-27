'use strict';

var React = require('react');

function MaillOne(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<polygon points="14.7 9 9.3 9 12 10.8 14.7 9"/>   <path d="M12,13c-.2,0-.4,0-.6-.2l-4.4-3v5.1h10v-5.1l-4.4,3c-.2.1-.4.2-.6.2Z"/>   <path d="M19.5,2H4.5c-1.4,0-2.5,1.1-2.5,2.5v15c0,1.4,1.1,2.5,2.5,2.5h15c1.4,0,2.5-1.1,2.5-2.5V4.5c0-1.4-1.1-2.5-2.5-2.5ZM19,16c0,.6-.4,1-1,1H6c-.6,0-1-.4-1-1v-8s0,0,0,0c0,0,0-.1,0-.2,0,0,0-.1,0-.2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,.1-.1,0,0,.1,0,.2-.1,0,0,.1,0,.2,0,0,0,.1,0,.2,0,0,0,0,0,0,0h12s0,0,0,0c0,0,.1,0,.2,0,0,0,.1,0,.2,0,0,0,.1,0,.2.1,0,0,0,0,.1.1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,.1,0,.2,0,0,0,.1,0,.2,0,0,0,0,0,0v8Z"/>' : '<path d="M39 6H9C7.34315 6 6 7.34315 6 9V39C6 40.6569 7.34315 42 9 42H39C40.6569 42 42 40.6569 42 39V9C42 7.34315 40.6569 6 39 6Z"/><path d="M36 16H12V32H36V16Z"/><path d="M36 16L24 24L12 16"/>';

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

module.exports = MaillOne;
