'use strict';

var React = require('react');

function TentBanner(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M7 43H39L23 17L7 43Z"/><path d="M18.0769 25L23 28L27.9231 25"/><path d="M23 17V12V4"/><path d="M35 4H23V12H35L32 8L35 4Z"/>' : '<path d="M7 43H39L23 17L7 43Z"/><path d="M18.0769 25L23 28L27.9231 25"/><path d="M23 17V12V4"/><path d="M35 4H23V12H35L32 8L35 4Z"/>';

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

module.exports = TentBanner;
