'use strict';

var React = require('react');

function UsbMicroOne(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<g>     <path d="M17.5,8.5H6.5v2h.5c0-.6.4-1,1-1s1,.4,1,1h.5c0-.6.4-1,1-1s1,.4,1,1h1c0-.6.4-1,1-1s1,.4,1,1h.5c0-.6.4-1,1-1s1,.4,1,1h.5v-2Z"/>     <path d="M20.5,6.5h-2c.6,0,1,.4,1,1v4c0,.6-.4,1-1,1H5.5c-.6,0-1-.4-1-1v-4c0-.6.4-1,1-1h-2c-1.4,0-2.5,1.1-2.5,2.5v6c0,1.4,1.1,2.5,2.5,2.5h17c1.4,0,2.5-1.1,2.5-2.5v-6c0-1.4-1.1-2.5-2.5-2.5Z"/>   </g>   <path d="M4,7.5h16"/>' : '<path d="M4 18C4 16.3431 5.34315 15 7 15H41C42.6569 15 44 16.3431 44 18V30C44 31.6569 42.6569 33 41 33H7C5.34315 33 4 31.6569 4 30V18Z"/><path d="M11 15H37V23H11V15Z"/><path d="M21 23V21"/><path d="M27 23V21"/><path d="M32 23V21"/><path d="M16 23V21"/><path d="M8 15L40 15"/>';

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

module.exports = UsbMicroOne;
