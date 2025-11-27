'use strict';

var React = require('react');

function ClothesWindbreaker(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M37 25V37M11 37V44H37V37M11 37H4V18L10.125 13L17 18L24 10L31 18L37.875 13L44 18V37H37M11 37V25"/><path d="M17 18L24 10L31 18L42 10L39.5 4H9L6 10L17 18Z"/><path d="M19 10H24M29 10H24M24 10L17 18L6 10L9 4H39.5L42 10L31 18L24 10Z"/>' : '<path d="M37 25V37M11 37V44H37V37M11 37H4V18L10.125 13L17 18L24 10L31 18L37.875 13L44 18V37H37M11 37V25"/><path d="M17 18L24 10L31 18L42 10L39.5 4H9L6 10L17 18Z"/><path d="M19 10H24M29 10H24M24 10L17 18L6 10L9 4H39.5L42 10L31 18L24 10Z"/>';

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

module.exports = ClothesWindbreaker;
