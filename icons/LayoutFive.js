'use strict';

var React = require('react');

function LayoutFive(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M3,10.5c-.6,0-1-.4-1-1v-3c0-.6.4-1,1-1s1,.4,1,1v3c0,.6-.4,1-1,1Z"/>   <path d="M21,10.5c-.6,0-1-.4-1-1v-3c0-.6.4-1,1-1s1,.4,1,1v3c0,.6-.4,1-1,1Z"/>   <g>     <path d="M21,16h-11.5v5c0,.6-.4,1-1,1h11c1.4,0,2.5-1.1,2.5-2.5v-4.5c0,.6-.4,1-1,1Z"/>     <path d="M21,9h-11.5v5h11.5c.6,0,1,.4,1,1v-7c0,.6-.4,1-1,1Z"/>     <path d="M7.5,21v-12H3c-.6,0-1-.4-1-1v11.5c0,1.4,1.1,2.5,2.5,2.5h4c-.6,0-1-.4-1-1Z"/>     <path d="M19.5,2H4.5c-1.4,0-2.5,1.1-2.5,2.5v3.5c0-.6.4-1,1-1h18c.6,0,1,.4,1,1v-3.5c0-1.4-1.1-2.5-2.5-2.5Z"/>   </g>   <path d="M10,22h-3c-.6,0-1-.4-1-1s.4-1,1-1h3c.6,0,1,.4,1,1s-.4,1-1,1Z"/>   <path d="M21,17.5c-.6,0-1-.4-1-1v-3c0-.6.4-1,1-1s1,.4,1,1v3c0,.6-.4,1-1,1Z"/>' : '<rect x="6" y="6" width="36" height="36" rx="3"/><path d="M6 16H42"/><path d="M6 13V19"/><path d="M42 13V19"/><path d="M17 30L42 30"/><path d="M17 16V42"/><path d="M14 42H20"/><path d="M42 27V33"/>';

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

module.exports = LayoutFive;
