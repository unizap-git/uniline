'use strict';

var React = require('react');

function SpinningTop(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M24 44V41" stroke-miterlimit="2"/><path d="M44 20L24 41L4 20H44Z" stroke-miterlimit="2"/><path d="M44 12H4V20H44V12Z" stroke-miterlimit="2"/><path d="M24 12V4" stroke-miterlimit="2"/>' : '<path d="M24 44V41" stroke-miterlimit="2"/><path d="M44 20L24 41L4 20H44Z" stroke-miterlimit="2"/><path d="M44 12H4V20H44V12Z" stroke-miterlimit="2"/><path d="M24 12V4" stroke-miterlimit="2"/>';

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

module.exports = SpinningTop;
