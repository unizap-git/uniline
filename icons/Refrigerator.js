'use strict';

var React = require('react');

function Refrigerator(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M4.5,13c-.6,0-1-.4-1-1v-2c0-.6.4-1,1-1s1,.4,1,1v2c0,.6-.4,1-1,1Z"/>   <path d="M18.5,10v2"/>   <g>     <path d="M17.5,1H5.5c-1.1,0-2,.9-2,2v8c0-.6.4-1,1-1h14c.6,0,1,.4,1,1V3c0-1.1-.9-2-2-2ZM8.5,7.5c0,.6-.4,1-1,1s-1-.4-1-1v-2c0-.6.4-1,1-1s1,.4,1,1v2Z"/>     <path d="M18.5,12H4.5c-.6,0-1-.4-1-1v8c0,1.1.9,2,2,2h12c1.1,0,2-.9,2-2v-8c0,.6-.4,1-1,1ZM8.5,16.5c0,.6-.4,1-1,1s-1-.4-1-1v-2c0-.6.4-1,1-1s1,.4,1,1v2Z"/>   </g>   <path d="M16.5,20v2"/>   <path d="M6.5,20v2"/>' : '<rect x="9" y="4" width="28" height="36" rx="2"/><path d="M9 22H37"/><path d="M9 20L9 24"/><path d="M37 20L37 24"/><path d="M15 29L15 33"/><path d="M15 11L15 15"/><path d="M33 40V44"/><path d="M13 40V44"/>';

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

module.exports = Refrigerator;
