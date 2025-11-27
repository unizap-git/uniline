'use strict';

var React = require('react');

function ChildrenPyramid(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<rect x="15" y="17" width="18" height="8"/><path d="M10 25H38V33H10V25Z"/><path d="M5 33H43V41H5V33Z"/><path d="M24 17V7"/><path d="M29 7L19 7"/>' : '<rect x="15" y="17" width="18" height="8"/><path d="M10 25H38V33H10V25Z"/><path d="M5 33H43V41H5V33Z"/><path d="M24 17V7"/><path d="M29 7L19 7"/>';

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

module.exports = ChildrenPyramid;
