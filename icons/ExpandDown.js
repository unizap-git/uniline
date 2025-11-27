'use strict';

var React = require('react');

function ExpandDown(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<g>     <path d="M21,17H3c-.6,0-1-.4-1-1v3c0,1.7,1.3,3,3,3h14c1.7,0,3-1.3,3-3v-3c0,.6-.4,1-1,1Z"/>     <path d="M19,2H5c-1.7,0-3,1.3-3,3v11c0-.6.4-1,1-1h18c.6,0,1,.4,1,1V5c0-1.7-1.3-3-3-3ZM14.7,8.7l-2,2c-.2.2-.5.3-.7.3s-.5,0-.7-.3l-2-2c-.4-.4-.4-1,0-1.4s1-.4,1.4,0l1.3,1.3,1.3-1.3c.4-.4,1-.4,1.4,0s.4,1,0,1.4Z"/>   </g>   <path d="M3,20c-.6,0-1-.4-1-1v-6c0-.6.4-1,1-1s1,.4,1,1v6c0,.6-.4,1-1,1Z"/>   <path d="M21,20c-.6,0-1-.4-1-1v-6c0-.6.4-1,1-1s1,.4,1,1v6c0,.6-.4,1-1,1Z"/>' : '<path d="M6 10C6 7.79086 7.79086 6 10 6H38C40.2091 6 42 7.79086 42 10V38C42 40.2091 40.2091 42 38 42H10C7.79086 42 6 40.2091 6 38V10Z"/><path d="M6 32H42"/><path d="M20 16L24 20L28 16"/><path d="M6 26V38"/><path d="M42 26V38"/>';

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

module.exports = ExpandDown;
