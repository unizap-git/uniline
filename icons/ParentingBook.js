'use strict';

var React = require('react');

function ParentingBook(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M38 31V44C38 44 17.375 44 13.625 44C9.875 44 8 42 8 37C8 32 8 4 8 4H20"/><circle cx="33" cy="17" r="9"/><path d="M22 18V16"/><path d="M44 18V16"/><path d="M33 8C32.8333 7 31.8 4.8 29 4"/><path d="M33 8C33.0833 7 33.6 4.8 35 4"/><circle cx="36" cy="16" r="2"/><circle cx="30" cy="16" r="2"/><path d="M8 36H38"/>' : '<path d="M38 31V44C38 44 17.375 44 13.625 44C9.875 44 8 42 8 37C8 32 8 4 8 4H20"/><circle cx="33" cy="17" r="9"/><path d="M22 18V16"/><path d="M44 18V16"/><path d="M33 8C32.8333 7 31.8 4.8 29 4"/><path d="M33 8C33.0833 7 33.6 4.8 35 4"/><circle cx="36" cy="16" r="2"/><circle cx="30" cy="16" r="2"/><path d="M8 36H38"/>';

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

module.exports = ParentingBook;
