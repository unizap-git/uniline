'use strict';

var React = require('react');

function LayoutTwo(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<g>     <path d="M19.5,2H4.5c-1.4,0-2.5,1.1-2.5,2.5v7.5c0-.6.4-1,1-1h18c.6,0,1,.4,1,1v-7.5c0-1.4-1.1-2.5-2.5-2.5Z"/>     <path d="M21,13H3c-.6,0-1-.4-1-1v7.5c0,1.4,1.1,2.5,2.5,2.5h15c1.4,0,2.5-1.1,2.5-2.5v-7.5c0,.6-.4,1-1,1Z"/>   </g>   <path d="M3,10.5v3"/>   <path d="M21,10.5v3"/>' : '<rect x="6" y="6" width="36" height="36" rx="3"/><path d="M6 24H42"/><path d="M6 21V27"/><path d="M42 21V27"/>';

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

module.exports = LayoutTwo;
