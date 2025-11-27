'use strict';

var React = require('react');

function Trend(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M19.5,2H4.5c-1.4,0-2.5,1.1-2.5,2.5v15c0,1.4,1.1,2.5,2.5,2.5h15c1.4,0,2.5-1.1,2.5-2.5V4.5c0-1.4-1.1-2.5-2.5-2.5ZM18,9v4c0,.6-.4,1-1,1s-1-.4-1-1v-1.6l-3.5,3.6c-.2.2-.4.3-.7.3h0c-.3,0-.5-.1-.7-.3l-1.5-1.5-2.1,2.1c-.2.2-.5.3-.7.3s-.5,0-.7-.3c-.4-.4-.4-1,0-1.4l2.8-2.8c.4-.4,1-.4,1.4,0l1.5,1.5,2.9-2.9h-1.6c-.6,0-1-.4-1-1s.4-1,1-1h4s0,0,0,0c.1,0,.2,0,.3,0,.1,0,.2.1.3.2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,.2.2.2.3,0,.1,0,.3,0,.4,0,0,0,0,0,0Z"/>' : '<path d="M39 6H9C7.34315 6 6 7.34315 6 9V39C6 40.6569 7.34315 42 9 42H39C40.6569 42 42 40.6569 42 39V9C42 7.34315 40.6569 6 39 6Z"/><path d="M13.4398 29.8347L19.0967 24.1778L23.4847 28.5555L34 18.0001"/><path d="M26 18H34V26"/>';

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

module.exports = Trend;
