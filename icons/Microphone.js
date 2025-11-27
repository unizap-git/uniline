'use strict';

var React = require('react');

function Microphone(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<rect x="16" y="4" width="16" height="28" rx="8"/><path d="M10 21V24C10 31.732 16.268 38 24 38V38C31.732 38 38 31.732 38 24V21"/><path d="M24 5V11"/><path d="M16 16H21"/><path d="M27 16H32"/><path d="M16 22H21"/><path d="M27 22H32"/><path d="M24 38V44"/><path d="M16 44H32"/>' : '<rect x="16" y="4" width="16" height="28" rx="8"/><path d="M10 21V24C10 31.732 16.268 38 24 38V38C31.732 38 38 31.732 38 24V21"/><path d="M24 5V11"/><path d="M16 16H21"/><path d="M27 16H32"/><path d="M16 22H21"/><path d="M27 22H32"/><path d="M24 38V44"/><path d="M16 44H32"/>';

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

module.exports = Microphone;
