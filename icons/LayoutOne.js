'use strict';

var React = require('react');

function LayoutOne(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M3,10.5c-.6,0-1-.4-1-1v-3c0-.6.4-1,1-1s1,.4,1,1v3c0,.6-.4,1-1,1Z"/>   <path d="M21,11c-.6,0-1-.4-1-1v-3c0-.6.4-1,1-1s1,.4,1,1v3c0,.6-.4,1-1,1Z"/>   <g>     <path d="M21,9h-4v12c0,.6-.4,1-1,1h3.5c1.4,0,2.5-1.1,2.5-2.5v-11.5c0,.6-.4,1-1,1Z"/>     <path d="M15,21v-12H3c-.6,0-1-.4-1-1v11.5c0,1.4,1.1,2.5,2.5,2.5h11.5c-.6,0-1-.4-1-1Z"/>     <path d="M19.5,2H4.5c-1.4,0-2.5,1.1-2.5,2.5v3.5c0-.6.4-1,1-1h18c.6,0,1,.4,1,1v-3.5c0-1.4-1.1-2.5-2.5-2.5Z"/>   </g>   <path d="M17.5,22h-3c-.6,0-1-.4-1-1s.4-1,1-1h3c.6,0,1,.4,1,1s-.4,1-1,1Z"/>' : '<rect x="6" y="6" width="36" height="36" rx="3"/><path d="M6 16H42"/><path d="M6 13V19"/><path d="M42 14V20"/><path d="M32 16V42"/><path d="M29 42H35"/>';

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

module.exports = LayoutOne;
