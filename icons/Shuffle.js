'use strict';

var React = require('react');

function Shuffle(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M30 42H42V30"/><path d="M42 18V6H30"/><path d="M42 6L6 42"/><path d="M31.5 31.5L34 34L39 39L41.5 41.5L42 42M24 24L6 6L24 24Z"/>' : '<path d="M30 42H42V30"/><path d="M42 18V6H30"/><path d="M42 6L6 42"/><path d="M31.5 31.5L34 34L39 39L41.5 41.5L42 42M24 24L6 6L24 24Z"/>';

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

module.exports = Shuffle;
