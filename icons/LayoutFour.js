'use strict';

var React = require('react');

function LayoutFour(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M3,16.5c-.6,0-1-.4-1-1v-3c0-.6.4-1,1-1s1,.4,1,1v3c0,.6-.4,1-1,1Z"/>   <path d="M21,12.5c-.6,0-1-.4-1-1v-3c0-.6.4-1,1-1s1,.4,1,1v3c0,.6-.4,1-1,1Z"/>   <g>     <path d="M11,21v-6H3c-.6,0-1-.4-1-1v5.5c0,1.4,1.1,2.5,2.5,2.5h7.5c-.6,0-1-.4-1-1Z"/>     <path d="M21,11h-8v10c0,.6-.4,1-1,1h7.5c1.4,0,2.5-1.1,2.5-2.5v-9.5c0,.6-.4,1-1,1Z"/>     <path d="M3,13h8V3c0-.6.4-1,1-1h-7.5c-1.4,0-2.5,1.1-2.5,2.5v9.5c0-.6.4-1,1-1Z"/>     <path d="M19.5,2h-7.5c.6,0,1,.4,1,1v6h8c.6,0,1,.4,1,1v-5.5c0-1.4-1.1-2.5-2.5-2.5Z"/>   </g>   <path d="M13.5,4h-3c-.6,0-1-.4-1-1s.4-1,1-1h3c.6,0,1,.4,1,1s-.4,1-1,1Z"/>   <path d="M13.5,22h-3c-.6,0-1-.4-1-1s.4-1,1-1h3c.6,0,1,.4,1,1s-.4,1-1,1Z"/>' : '<rect x="6" y="6" width="36" height="36" rx="3"/><path d="M6 28L24 28"/><path d="M24 20H42"/><path d="M6 25V31"/><path d="M42 17V23"/><path d="M24 42V6"/><path d="M21 6H27"/><path d="M21 42H27"/>';

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

module.exports = LayoutFour;
