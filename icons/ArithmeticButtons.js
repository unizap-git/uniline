'use strict';

var React = require('react');

function ArithmeticButtons(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<g>     <path d="M22,13h-9v9c0,.6-.4,1-1,1h8.5c1.4,0,2.5-1.1,2.5-2.5v-8.5c0,.6-.4,1-1,1ZM19,19.5h-4c-.6,0-1-.4-1-1s.4-1,1-1h4c.6,0,1,.4,1,1s-.4,1-1,1ZM19,16.5h-4c-.6,0-1-.4-1-1s.4-1,1-1h4c.6,0,1,.4,1,1s-.4,1-1,1Z"/>     <path d="M2,11h9V2c0-.6.4-1,1-1H3.5c-1.4,0-2.5,1.1-2.5,2.5v8.5c0-.6.4-1,1-1ZM5,6h1v-1c0-.6.4-1,1-1s1,.4,1,1v1h1c.6,0,1,.4,1,1s-.4,1-1,1h-1v1c0,.6-.4,1-1,1s-1-.4-1-1v-1h-1c-.6,0-1-.4-1-1s.4-1,1-1Z"/>     <path d="M11,22v-9H2c-.6,0-1-.4-1-1v8.5c0,1.4,1.1,2.5,2.5,2.5h8.5c-.6,0-1-.4-1-1ZM9.2,17.8c.4.4.4,1,0,1.4s-.5.3-.7.3-.5,0-.7-.3l-.8-.8-.8.8c-.2.2-.5.3-.7.3s-.5,0-.7-.3c-.4-.4-.4-1,0-1.4l.8-.8-.8-.8c-.4-.4-.4-1,0-1.4s1-.4,1.4,0l.8.8.8-.8c.4-.4,1-.4,1.4,0s.4,1,0,1.4l-.8.8.8.8Z"/>     <path d="M20.5,1h-8.5c.6,0,1,.4,1,1v9h9c.6,0,1,.4,1,1V3.5c0-1.4-1.1-2.5-2.5-2.5ZM19,8h-4c-.6,0-1-.4-1-1s.4-1,1-1h4c.6,0,1,.4,1,1s-.4,1-1,1Z"/>   </g>   <path d="M15,3h-6c-.6,0-1-.4-1-1s.4-1,1-1h6c.6,0,1,.4,1,1s-.4,1-1,1Z"/>   <path d="M15,23h-6c-.6,0-1-.4-1-1s.4-1,1-1h6c.6,0,1,.4,1,1s-.4,1-1,1Z"/>   <path d="M2,15c-.6,0-1-.4-1-1v-4c0-.6.4-1,1-1s1,.4,1,1v4c0,.6-.4,1-1,1Z"/>   <path d="M22,15c-.6,0-1-.4-1-1v-4c0-.6.4-1,1-1s1,.4,1,1v4c0,.6-.4,1-1,1Z"/>' : '<path d="M41 4H7C5.34315 4 4 5.34315 4 7V41C4 42.6569 5.34315 44 7 44H41C42.6569 44 44 42.6569 44 41V7C44 5.34315 42.6569 4 41 4Z"/><path d="M10 14H18"/><path d="M10 14H18"/><path d="M11 37L17 31"/><path d="M14 18V10"/><path d="M17 37L11 31"/><path d="M30 14H38"/><path d="M30 31H38"/><path d="M30 37H38"/><path d="M24 4V44"/><path d="M4 24H44"/><path d="M30 4H18"/><path d="M30 44H18"/><path d="M4 28V20"/><path d="M44 28V20"/>';

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

module.exports = ArithmeticButtons;
