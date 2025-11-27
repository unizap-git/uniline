'use strict';

var React = require('react');

function RouterOne(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M10 24L4 38H44L38 24H10Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M10 4V24V4Z"/><path d="M10 4V24"/><path fill-rule="evenodd" clip-rule="evenodd" d="M38 4V24V4Z"/><path d="M38 4V24"/><path fill-rule="evenodd" clip-rule="evenodd" d="M24 4V24V4Z"/><path d="M24 4V24"/><path d="M4 38V44H44V38"/>' : '<path d="M10 24L4 38H44L38 24H10Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M10 4V24V4Z"/><path d="M10 4V24"/><path fill-rule="evenodd" clip-rule="evenodd" d="M38 4V24V4Z"/><path d="M38 4V24"/><path fill-rule="evenodd" clip-rule="evenodd" d="M24 4V24V4Z"/><path d="M24 4V24"/><path d="M4 38V44H44V38"/>';

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

module.exports = RouterOne;
