'use strict';

var React = require('react');

function ExpandLeft(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<g>     <path d="M15,21V3c0-.6.4-1,1-1H4.5c-1.4,0-2.5,1.1-2.5,2.5v15c0,1.4,1.1,2.5,2.5,2.5h11.5c-.6,0-1-.4-1-1ZM10.7,12.7l-2,2c-.2.2-.5.3-.7.3s-.5,0-.7-.3c-.4-.4-.4-1,0-1.4l1.3-1.3-1.3-1.3c-.4-.4-.4-1,0-1.4s1-.4,1.4,0l2,2c.4.4.4,1,0,1.4Z"/>     <path d="M19.5,2h-3.5c.6,0,1,.4,1,1v18c0,.6-.4,1-1,1h3.5c1.4,0,2.5-1.1,2.5-2.5V4.5c0-1.4-1.1-2.5-2.5-2.5Z"/>   </g>   <path d="M19,4h-6c-.6,0-1-.4-1-1s.4-1,1-1h6c.6,0,1,.4,1,1s-.4,1-1,1Z"/>   <path d="M19,22h-6c-.6,0-1-.4-1-1s.4-1,1-1h6c.6,0,1,.4,1,1s-.4,1-1,1Z"/>' : '<path d="M6 9C6 7.34315 7.34315 6 9 6H39C40.6569 6 42 7.34315 42 9V39C42 40.6569 40.6569 42 39 42H9C7.34315 42 6 40.6569 6 39V9Z"/><path d="M32 6V42"/><path d="M16 20L20 24L16 28"/><path d="M26 6H38"/><path d="M26 42H38"/>';

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

module.exports = ExpandLeft;
