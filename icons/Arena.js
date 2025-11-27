'use strict';

var React = require('react');

function Arena(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M44 26L24 36L4 26L24 16L44 26Z" stroke-miterlimit="2"/><path d="M24 7L44 17L24 27L4 17L24 7Z" stroke-miterlimit="2"/><path d="M44 26V34L24 44L4 34V26L24 36L44 26Z" stroke-miterlimit="2"/><path d="M44 14V17V26" stroke-miterlimit="2"/><path d="M4 26V17V14" stroke-miterlimit="2"/><path d="M24 36V24" stroke-miterlimit="2"/><path d="M24 16V4" stroke-miterlimit="2"/>' : '<path d="M44 26L24 36L4 26L24 16L44 26Z" stroke-miterlimit="2"/><path d="M24 7L44 17L24 27L4 17L24 7Z" stroke-miterlimit="2"/><path d="M44 26V34L24 44L4 34V26L24 36L44 26Z" stroke-miterlimit="2"/><path d="M44 14V17V26" stroke-miterlimit="2"/><path d="M4 26V17V14" stroke-miterlimit="2"/><path d="M24 36V24" stroke-miterlimit="2"/><path d="M24 16V4" stroke-miterlimit="2"/>';

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

module.exports = Arena;
