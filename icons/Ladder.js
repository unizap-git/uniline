'use strict';

var React = require('react');

function Ladder(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M10 42C10 42 10 16 10 10C10 4 16 4 16 4"/><path d="M10 14H28"/><path d="M10 22H28"/><path d="M10 30H28"/><path d="M10 38H28"/><path d="M34 43C34 43 34 17 34 11C34 5 40 5 40 5"/>' : '<path d="M10 42C10 42 10 16 10 10C10 4 16 4 16 4"/><path d="M10 14H28"/><path d="M10 22H28"/><path d="M10 30H28"/><path d="M10 38H28"/><path d="M34 43C34 43 34 17 34 11C34 5 40 5 40 5"/>';

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

module.exports = Ladder;
