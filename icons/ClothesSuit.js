'use strict';

var React = require('react');

function ClothesSuit(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M37 21V37M11 37V44H37V37M11 37H4V10L18 4H30L44 10V37H37M11 37V21"/><path d="M30 4L24 18M24 18L18 4M24 18V37V44"/><path d="M30 4L24 18"/><path d="M24 18L18 4"/><path d="M18 4L14 12L18 17.5L16 23L24 37"/><path d="M30 4L35 12L30 17.5L32 23L24 37"/>' : '<path d="M37 21V37M11 37V44H37V37M11 37H4V10L18 4H30L44 10V37H37M11 37V21"/><path d="M30 4L24 18M24 18L18 4M24 18V37V44"/><path d="M30 4L24 18"/><path d="M24 18L18 4"/><path d="M18 4L14 12L18 17.5L16 23L24 37"/><path d="M30 4L35 12L30 17.5L32 23L24 37"/>';

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

module.exports = ClothesSuit;
