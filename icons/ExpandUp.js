'use strict';

var React = require('react');

function ExpandUp(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<g>     <path d="M19.5,2H4.5c-1.4,0-2.5,1.1-2.5,2.5v3.5c0-.6.4-1,1-1h18c.6,0,1,.4,1,1v-3.5c0-1.4-1.1-2.5-2.5-2.5Z"/>     <path d="M21,9H3c-.6,0-1-.4-1-1v11.5c0,1.4,1.1,2.5,2.5,2.5h15c1.4,0,2.5-1.1,2.5-2.5v-11.5c0,.6-.4,1-1,1ZM14.7,16.7c-.2.2-.5.3-.7.3s-.5,0-.7-.3l-1.3-1.3-1.3,1.3c-.4.4-1,.4-1.4,0s-.4-1,0-1.4l2-2c.4-.4,1-.4,1.4,0l2,2c.4.4.4,1,0,1.4Z"/>   </g>   <path d="M3,12c-.6,0-1-.4-1-1v-6c0-.6.4-1,1-1s1,.4,1,1v6c0,.6-.4,1-1,1Z"/>   <path d="M21,12c-.6,0-1-.4-1-1v-6c0-.6.4-1,1-1s1,.4,1,1v6c0,.6-.4,1-1,1Z"/>' : '<rect x="6" y="6" width="36" height="36" rx="3"/><path d="M6 16H42"/><path d="M20 32L24 28L28 32"/><path d="M6 10V22"/><path d="M42 10V22"/>';

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

module.exports = ExpandUp;
