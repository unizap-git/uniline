'use strict';

var React = require('react');

function BachelorCap(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M4 13L24 8L44 13L24 18L4 13Z"/><path d="M13 16V25.9706C13 25.9706 18 29 24 29C30 29 35 25.9706 35 25.9706V16"/><path d="M7 14V36"/><rect x="4" y="34" width="6" height="6"/>' : '<path d="M4 13L24 8L44 13L24 18L4 13Z"/><path d="M13 16V25.9706C13 25.9706 18 29 24 29C30 29 35 25.9706 35 25.9706V16"/><path d="M7 14V36"/><rect x="4" y="34" width="6" height="6"/>';

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

module.exports = BachelorCap;
