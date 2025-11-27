'use strict';

var React = require('react');

function IntersectSelection(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<rect x="16" y="16" width="27" height="27" rx="2"/><rect x="5" y="5" width="27" height="27" rx="2"/><path d="M27 16L16 27"/><path d="M32 21L21 32"/>' : '<rect x="16" y="16" width="27" height="27" rx="2"/><rect x="5" y="5" width="27" height="27" rx="2"/><path d="M27 16L16 27"/><path d="M32 21L21 32"/>';

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

module.exports = IntersectSelection;
