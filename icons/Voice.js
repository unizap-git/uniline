'use strict';

var React = require('react');

function Voice(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<rect x="17" y="4" width="14" height="27" rx="7"/><path d="M9 23C9 31.2843 15.7157 38 24 38C32.2843 38 39 31.2843 39 23"/><path d="M24 38V44"/>' : '<rect x="17" y="4" width="14" height="27" rx="7"/><path d="M9 23C9 31.2843 15.7157 38 24 38C32.2843 38 39 31.2843 39 23"/><path d="M24 38V44"/>';

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

module.exports = Voice;
