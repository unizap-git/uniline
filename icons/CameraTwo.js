'use strict';

var React = require('react');

function CameraTwo(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<rect x="12" y="4" width="24" height="32" rx="12"/><path d="M24 36V44"/><path d="M16 44L32 44"/><circle cx="24" cy="17" r="6"/><circle cx="24" cy="29" r="2"/>' : '<rect x="12" y="4" width="24" height="32" rx="12"/><path d="M24 36V44"/><path d="M16 44L32 44"/><circle cx="24" cy="17" r="6"/><circle cx="24" cy="29" r="2"/>';

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

module.exports = CameraTwo;
