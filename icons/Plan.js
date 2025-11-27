'use strict';

var React = require('react');

function Plan(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M2.5,5c0-.6.4-1,1-1h17c.6,0,1,.4,1,1v4.5H2.5v-4.5Z"/>   <path d="M21.5,8.5H2.5c-.6,0-1,.4-1,1v11c0,1.1.9,2,2,2h17c1.1,0,2-.9,2-2v-11c0-.6-.4-1-1-1ZM17.7,13.2l-6,6c-.2.2-.5.3-.7.3s-.5,0-.7-.3l-3-3c-.4-.4-.4-1,0-1.4s1-.4,1.4,0l2.3,2.3,5.3-5.3c.4-.4,1-.4,1.4,0s.4,1,0,1.4Z"/>   <path d="M8,2.5v4" stroke-miterlimit="2"/>   <path d="M16,2.5v4" stroke-miterlimit="2"/>' : '<path d="M5 19H43V41C43 42.1046 42.1046 43 41 43H7C5.89543 43 5 42.1046 5 41V19Z"/><path d="M5 10C5 8.89543 5.89543 8 7 8H41C42.1046 8 43 8.89543 43 10V19H5V10Z"/><path d="M16 31L22 37L34 25"/><path d="M16 5V13"/><path d="M32 5V13"/>';

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

module.exports = Plan;
