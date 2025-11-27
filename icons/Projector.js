'use strict';

var React = require('react');

function Projector(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M19,8h3v8H2v-8h10"/>   <path d="M3,19v-3h3v3h-3Z"/>   <path d="M21,19v-3h-3v3h3Z"/>   <path d="M5,12h4"/>   <path d="M15.5,3.5c-2.5,0-4.5,2-4.5,4.5s2,4.5,4.5,4.5,4.5-2,4.5-4.5-2-4.5-4.5-4.5ZM15.5,9.5c-.8,0-1.5-.7-1.5-1.5s.7-1.5,1.5-1.5,1.5.7,1.5,1.5-.7,1.5-1.5,1.5Z"/>' : '<path d="M38 16H44V32H4V16H24"/><path d="M6 38V32H12V38H6Z"/><path d="M42 38V32H36V38H42Z"/><path d="M10 24H18"/><circle cx="31" cy="16" r="7"/><circle cx="31" cy="16" r="3"/>';

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

module.exports = Projector;
