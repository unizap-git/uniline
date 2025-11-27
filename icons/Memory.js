'use strict';

var React = require('react');

function Memory(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M8 6V42C8 43.1046 8.89543 44 10 44H38C39.1046 44 40 43.1046 40 42V13.6095C40 13.07 39.782 12.5533 39.3954 12.1768L31.5824 4.56725C31.209 4.20354 30.7083 4 30.187 4H10C8.89543 4 8 4.89543 8 6Z"/><path d="M40 21L8 21"/><path d="M40 29H30"/><path d="M40 36H30"/><path d="M30 44L30 21"/><path d="M18 44L18 21"/><path d="M18 33L8 33"/>' : '<path d="M8 6V42C8 43.1046 8.89543 44 10 44H38C39.1046 44 40 43.1046 40 42V13.6095C40 13.07 39.782 12.5533 39.3954 12.1768L31.5824 4.56725C31.209 4.20354 30.7083 4 30.187 4H10C8.89543 4 8 4.89543 8 6Z"/><path d="M40 21L8 21"/><path d="M40 29H30"/><path d="M40 36H30"/><path d="M30 44L30 21"/><path d="M18 44L18 21"/><path d="M18 33L8 33"/>';

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

module.exports = Memory;
