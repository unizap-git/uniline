'use strict';

var React = require('react');

function CameraThree(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<rect x="6" y="14" width="36" height="26" rx="2"/><path d="M10 14L12.1667 8H19.8333L22 14H10Z"/><circle cx="29" cy="27" r="7"/><path d="M36 10V14"/>' : '<rect x="6" y="14" width="36" height="26" rx="2"/><path d="M10 14L12.1667 8H19.8333L22 14H10Z"/><circle cx="29" cy="27" r="7"/><path d="M36 10V14"/>';

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

module.exports = CameraThree;
