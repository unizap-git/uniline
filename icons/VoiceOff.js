'use strict';

var React = require('react');

function VoiceOff(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M31 24V11C31 7.13401 27.866 4 24 4C20.134 4 17 7.13401 17 11V24C17 27.866 20.134 31 24 31C27.866 31 31 27.866 31 24Z"/><path d="M9 23C9 31.2843 15.7157 38 24 38C25.7532 38 27.4361 37.6992 29 37.1465M39 23C39 25.1333 38.5547 27.1626 37.7519 29"/><path d="M24 38V44"/><path d="M42 42L6 6"/>' : '<path d="M31 24V11C31 7.13401 27.866 4 24 4C20.134 4 17 7.13401 17 11V24C17 27.866 20.134 31 24 31C27.866 31 31 27.866 31 24Z"/><path d="M9 23C9 31.2843 15.7157 38 24 38C25.7532 38 27.4361 37.6992 29 37.1465M39 23C39 25.1333 38.5547 27.1626 37.7519 29"/><path d="M24 38V44"/><path d="M42 42L6 6"/>';

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

module.exports = VoiceOff;
