'use strict';

var React = require('react');

function RoadSignBoth(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M10 8V16H38L42 12L38 8H10Z"/><path d="M38 23V31H10L6 27L10 23H38Z"/><path d="M24 31V44"/><path d="M24 16V23"/><path d="M24 4V8"/><path d="M19 44H29"/>' : '<path d="M10 8V16H38L42 12L38 8H10Z"/><path d="M38 23V31H10L6 27L10 23H38Z"/><path d="M24 31V44"/><path d="M24 16V23"/><path d="M24 4V8"/><path d="M19 44H29"/>';

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

module.exports = RoadSignBoth;
