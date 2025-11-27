'use strict';

var React = require('react');

function ChildWithPacifier(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M24 42C33.3888 42 41 34.3888 41 25C41 15.6112 33.3888 8 24 8C14.6112 8 7 15.6112 7 25C7 34.3888 14.6112 42 24 42Z"/><path d="M33 21L31 22L29 21"/><path d="M19 21L17 22L15 21"/><path d="M24 38V44"/><path d="M24 8C23.75 7 22 4 18 4"/><path d="M24 8C24.0833 7 24.6 4.8 26 4"/><path d="M31.9752 40C31.9752 34 31.9752 31 23.9998 31C15.9998 31 16.0244 34 16.0244 40"/><path d="M5 23V27"/><path d="M43 23V27"/>' : '<path d="M24 42C33.3888 42 41 34.3888 41 25C41 15.6112 33.3888 8 24 8C14.6112 8 7 15.6112 7 25C7 34.3888 14.6112 42 24 42Z"/><path d="M33 21L31 22L29 21"/><path d="M19 21L17 22L15 21"/><path d="M24 38V44"/><path d="M24 8C23.75 7 22 4 18 4"/><path d="M24 8C24.0833 7 24.6 4.8 26 4"/><path d="M31.9752 40C31.9752 34 31.9752 31 23.9998 31C15.9998 31 16.0244 34 16.0244 40"/><path d="M5 23V27"/><path d="M43 23V27"/>';

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

module.exports = ChildWithPacifier;
