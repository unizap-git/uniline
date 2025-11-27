'use strict';

var React = require('react');

function LayoutThree(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<g>     <path d="M21,12H3c-.6,0-1-.4-1-1v8.5c0,1.4,1.1,2.5,2.5,2.5h15c1.4,0,2.5-1.1,2.5-2.5v-8.5c0,.6-.4,1-1,1Z"/>     <path d="M19.5,2h-5c.6,0,1,.4,1,1v7h5.5c.6,0,1,.4,1,1v-6.5c0-1.4-1.1-2.5-2.5-2.5Z"/>     <path d="M3,10h10.5V3c0-.6.4-1,1-1H4.5c-1.4,0-2.5,1.1-2.5,2.5v6.5c0-.6.4-1,1-1Z"/>   </g>   <path d="M13,3h3"/>   <path d="M3,13.5c-.6,0-1-.4-1-1v-3c0-.6.4-1,1-1s1,.4,1,1v3c0,.6-.4,1-1,1Z"/>   <path d="M21,13.5c-.6,0-1-.4-1-1v-3c0-.6.4-1,1-1s1,.4,1,1v3c0,.6-.4,1-1,1Z"/>' : '<rect x="6" y="6" width="36" height="36" rx="3"/><path d="M6 22L42 22"/><path d="M29 22V6"/><path d="M26 6H32"/><path d="M6 19V25"/><path d="M42 19V25"/>';

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

module.exports = LayoutThree;
