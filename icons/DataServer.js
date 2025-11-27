'use strict';

var React = require('react');

function DataServer(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<g>     <path d="M22,17H2c-.6,0-1-.4-1-1v4.5c0,1.4,1.1,2.5,2.5,2.5h17c1.4,0,2.5-1.1,2.5-2.5v-4.5c0,.6-.4,1-1,1ZM5.5,20h-.5c-.6,0-1-.4-1-1s.4-1,1-1h.5c.6,0,1,.4,1,1s-.4,1-1,1ZM19,20h-6c-.6,0-1-.4-1-1s.4-1,1-1h6c.6,0,1,.4,1,1s-.4,1-1,1Z"/>     <path d="M20.5,1H3.5c-1.4,0-2.5,1.1-2.5,2.5v12.5c0-.6.4-1,1-1h20c.6,0,1,.4,1,1V3.5c0-1.4-1.1-2.5-2.5-2.5Z"/>   </g>   <path d="M22,19.5c-.6,0-1-.4-1-1v-5c0-.6.4-1,1-1s1,.4,1,1v5c0,.6-.4,1-1,1Z"/>   <path d="M2,19.5c-.6,0-1-.4-1-1v-5c0-.6.4-1,1-1s1,.4,1,1v5c0,.6-.4,1-1,1Z"/>' : '<path d="M41 4H7C5.34315 4 4 5.34315 4 7V41C4 42.6569 5.34315 44 7 44H41C42.6569 44 44 42.6569 44 41V7C44 5.34315 42.6569 4 41 4Z"/><path d="M4 32H44"/><path d="M10 38H11"/><path d="M26 38H38"/><path d="M44 37V27"/><path d="M4 37V27"/>';

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

module.exports = DataServer;
