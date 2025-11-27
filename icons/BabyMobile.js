'use strict';

var React = require('react');

function BabyMobile(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M4.5 18L24 8L44 18"/><path d="M24 18V4"/><path d="M10 30V16"/><circle cx="10" cy="36" r="6"/><path d="M38 30V16"/><path d="M32 36L38 30L44 36L38 42L32 36Z"/><path d="M29 23V18H19V23"/>' : '<path d="M4.5 18L24 8L44 18"/><path d="M24 18V4"/><path d="M10 30V16"/><circle cx="10" cy="36" r="6"/><path d="M38 30V16"/><path d="M32 36L38 30L44 36L38 42L32 36Z"/><path d="M29 23V18H19V23"/>';

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

module.exports = BabyMobile;
