'use strict';

var React = require('react');

function PageTemplate(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M23 4H4V26H23V4Z"/><path d="M44 34H4V43H44V34Z"/><path d="M44 4H31V12H44V4Z"/><path d="M44 18H31V26H44V18Z"/>' : '<path d="M23 4H4V26H23V4Z"/><path d="M44 34H4V43H44V34Z"/><path d="M44 4H31V12H44V4Z"/><path d="M44 18H31V26H44V18Z"/>';

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

module.exports = PageTemplate;
