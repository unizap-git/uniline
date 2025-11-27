'use strict';

var React = require('react');

function BusOne(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M7,19.5v2"/>   <path d="M17,19.5v2"/>   <path d="M4,13.5c-.6,0-1-.4-1-1v-2c0-.6.4-1,1-1s1,.4,1,1v2c0,.6-.4,1-1,1Z"/>   <path d="M20,13.5c-.6,0-1-.4-1-1v-2c0-.6.4-1,1-1s1,.4,1,1v2c0,.6-.4,1-1,1Z"/>   <g>     <path d="M20,12.5H4c-.6,0-1-.4-1-1v6.5c0,1.4,1.1,2.5,2.5,2.5h13c1.4,0,2.5-1.1,2.5-2.5v-6.5c0,.6-.4,1-1,1ZM7,17.5c-.6,0-1-.4-1-1s.4-1,1-1,1,.4,1,1-.4,1-1,1ZM17,17.5c-.6,0-1-.4-1-1s.4-1,1-1,1,.4,1,1-.4,1-1,1Z"/>     <path d="M18.5,1.5H5.5c-1.4,0-2.5,1.1-2.5,2.5v7.5c0-.6.4-1,1-1h16c.6,0,1,.4,1,1v-7.5c0-1.4-1.1-2.5-2.5-2.5ZM15,7.5h-6c-.6,0-1-.4-1-1s.4-1,1-1h6c.6,0,1,.4,1,1s-.4,1-1,1Z"/>   </g>' : '<rect x="8" y="5" width="32" height="34" rx="3"/><path d="M14 39L14 43"/><path d="M34 39L34 43"/><circle cx="34" cy="33" r="2"/><circle cx="14" cy="33" r="2"/><path d="M8 23H40"/><path d="M8 21L8 25"/><path d="M40 21L40 25"/><path d="M18 13H30"/>';

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

module.exports = BusOne;
