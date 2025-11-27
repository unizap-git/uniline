'use strict';

var React = require('react');

function UsbMicroTwo(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<g>     <path d="M17.5,8.5H6.5v2h.5c0-.6.4-1,1-1s1,.4,1,1h.5c0-.6.4-1,1-1s1,.4,1,1h1c0-.6.4-1,1-1s1,.4,1,1h.5c0-.6.4-1,1-1s1,.4,1,1h.5v-2Z"/>     <path d="M20.5,6.5h-2c.6,0,1,.4,1,1v4c0,.6-.4,1-1,1H5.5c-.6,0-1-.4-1-1v-4c0-.6.4-1,1-1h-2c-1.4,0-2.5,1.1-2.5,2.5v3.1c0,.5.1.9.4,1.3l1.8,2.9c.5.7,1.3,1.2,2.1,1.2h13.3c.9,0,1.7-.4,2.1-1.2l1.8-2.9c.2-.4.4-.9.4-1.3v-3.1c0-1.4-1.1-2.5-2.5-2.5Z"/>   </g>   <path d="M4,7.5h16"/>' : '<path d="M4 18C4 16.3431 5.34315 15 7 15H41C42.6569 15 44 16.3431 44 18V24.1396C44 24.7019 43.842 25.2528 43.544 25.7296L39.8813 31.59C39.333 32.4671 38.3716 33 37.3373 33H10.6627C9.62837 33 8.66696 32.4671 8.11875 31.59L4.456 25.7296C4.15801 25.2528 4 24.7019 4 24.1396V18Z"/><path d="M11 15H37V23H11V15Z"/><path d="M21 23V21"/><path d="M27 23V21"/><path d="M32 23V21"/><path d="M16 23V21"/><path d="M8 15L40 15"/>';

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

module.exports = UsbMicroTwo;
