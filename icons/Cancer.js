'use strict';

var React = require('react');

function Cancer(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<circle cx="37" cy="17" r="6"/><path d="M6 13C6 13 12 5 22 5C32 5 38 11 38 11"/><circle cx="11" cy="31" r="6" transform="rotate(-180 11 31)"/><path d="M42 35C42 35 36 43 26 43C16 43 10 37 10 37"/>' : '<circle cx="37" cy="17" r="6"/><path d="M6 13C6 13 12 5 22 5C32 5 38 11 38 11"/><circle cx="11" cy="31" r="6" transform="rotate(-180 11 31)"/><path d="M42 35C42 35 36 43 26 43C16 43 10 37 10 37"/>';

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

module.exports = Cancer;
