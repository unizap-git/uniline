'use strict';

var React = require('react');

function Transport(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M20.5,5h-11c-1.4,0-2.5,1.1-2.5,2.5v6c0,1.4,1.1,2.5,2.5,2.5h11c1.4,0,2.5-1.1,2.5-2.5v-6c0-1.4-1.1-2.5-2.5-2.5ZM13,12c0,.6-.4,1-1,1s-1-.4-1-1v-3c0-.6.4-1,1-1s1,.4,1,1v3ZM19,12c0,.6-.4,1-1,1s-1-.4-1-1v-3c0-.6.4-1,1-1s1,.4,1,1v3Z"/>   <path d="M18,6v-3h-6v3"/>   <path d="M22,18H6c-.6,0-1-.4-1-1V5.5c0-.6-.4-1-1-1h-2"/>   <path d="M9.5,21c-.8,0-1.5-.7-1.5-1.5v-1.5h3v1.5c0,.8-.7,1.5-1.5,1.5Z"/>   <path d="M18.5,21c-.8,0-1.5-.7-1.5-1.5v-1.5h3v1.5c0,.8-.7,1.5-1.5,1.5Z"/>' : '<rect x="16" y="12" width="28" height="18" rx="3"/><path d="M24 18V24"/><path d="M36 18V24"/><path d="M36 12V6H24V12"/><path d="M44 36H12C10.8954 36 10 35.1046 10 34V11C10 9.89543 9.10457 9 8 9H4"/><path d="M19 42C17.3431 42 16 40.6569 16 39V36H22V39C22 40.6569 20.6569 42 19 42Z"/><path d="M37 42C35.3431 42 34 40.6569 34 39V36H40V39C40 40.6569 38.6569 42 37 42Z"/>';

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

module.exports = Transport;
