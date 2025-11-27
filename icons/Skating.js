'use strict';

var React = require('react');

function Skating(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M22,2h-8v4h8V2Z"/>   <path d="M22,5h-8c-.6,0-1,.4-1,1v2h-2.5c.6,0,1,.4,1,1v3c0,.6-.4,1-1,1s-1-.4-1-1v-3c0-.6.4-1,1-1h-3.5c.6,0,1,.4,1,1v3c0,.6-.4,1-1,1s-1-.4-1-1v-3c0-.6.4-1,1-1h-1c-2.8,0-5,2.2-5,5v3c0,1.7,1.3,3,3,3h17c1.1,0,2-.9,2-2V6c0-.6-.4-1-1-1Z"/>   <path d="M7,22v-4"/>   <path d="M18,22v-4"/>   <path d="M11.5,9h-5.5"/>   <path d="M22,22H3c-.6,0-1-.5-1-1v-.7"/>' : '<path d="M44 4H28V12H44V4Z" stroke-miterlimit="2"/><path d="M44 12V34C44 35.11 43.11 36 42 36H8C5.79 36 4 34.21 4 32V26C4 21.58 7.58 18 12 18H28V12H44Z" stroke-miterlimit="2"/><path d="M14 24V18" stroke-miterlimit="2"/><path d="M21 24V18" stroke-miterlimit="2"/><path d="M14 44V36" stroke-miterlimit="2"/><path d="M36 44V36" stroke-miterlimit="2"/><path d="M23 18L12 18" stroke-miterlimit="2"/><path d="M44 43.9999H6C4.89 43.9999 4 43.0999 4 41.9999V40.6299" stroke-miterlimit="2"/>';

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

module.exports = Skating;
