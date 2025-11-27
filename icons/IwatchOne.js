'use strict';

var React = require('react');

function IwatchOne(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M13.5,7h-3c-.6,0-1-.4-1-1s.4-1,1-1h3c.6,0,1,.4,1,1s-.4,1-1,1Z"/>   <path d="M10.5,18h3"/>   <path d="M17.5,10.5v3"/>   <path d="M16.5,5h-4.5c.6,0,1,.4,1,1v3c0,.6-.4,1-1,1s-1-.4-1-1v-3c0-.6.4-1,1-1h-4.5c-1.1,0-2,.9-2,2v5c0-.6.4-1,1-1h3s0,0,0,0c.5,0,1,.4,1,1,0,.6-.4,1-1,1h-3s0,0,0,0c-.5,0-1-.4-1-1v5c0,1.1.9,2,2,2h4.5c-.6,0-1-.4-1-1v-3c0-.6.4-1,1-1s1,.4,1,1v3c0,.6-.4,1-1,1h4.5c1.1,0,2-.9,2-2v-5c0,.6-.4,1-1,1h-3s0,0,0,0c-.5,0-1-.4-1-1,0-.6.4-1,1-1h3s0,0,0,0c.5,0,1,.4,1,1v-5c0-1.1-.9-2-2-2Z"/>   <path d="M6.5,14.5c-.6,0-1-.4-1-1v-3c0-.6.4-1,1-1s1,.4,1,1v3c0,.6-.4,1-1,1Z"/>   <path d="M15.5,6V2h-7v4"/>   <path d="M15.5,18v3.5c0,.3-.2.5-.5.5h-6c-.3,0-.5-.2-.5-.5v-3.5"/>   <path d="M3.5,10v4"/>   <path d="M20.5,10v4"/>' : '<rect x="13" y="12" width="22" height="24" rx="2"/><path d="M24 12V18"/><path d="M21 12L27 12"/><path d="M24 30V36"/><path d="M21 36L27 36"/><path d="M34.9998 23.9341L29 23.9999"/><path d="M35 21L35 27"/><path d="M19 24L13.0003 24.0659"/><path d="M13 21L13 27"/><path d="M31 12V4H17V12"/><path d="M31 36V43C31 43.5523 30.5523 44 30 44H18C17.4477 44 17 43.5523 17 43V36"/><path d="M7 20V28"/><path d="M41 20V28"/>';

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

module.exports = IwatchOne;
