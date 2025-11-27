'use strict';

var React = require('react');

function CircleTwoLine(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M40 12C42.2091 12 44 10.2091 44 8C44 5.79086 42.2091 4 40 4C37.7909 4 36 5.79086 36 8C36 10.2091 37.7909 12 40 12Z"/><path d="M8 44C10.2091 44 12 42.2091 12 40C12 37.7909 10.2091 36 8 36C5.79086 36 4 37.7909 4 40C4 42.2091 5.79086 44 8 44Z"/><path d="M40 20V40H20"/><path d="M8 28V8H28"/>' : '<path d="M40 12C42.2091 12 44 10.2091 44 8C44 5.79086 42.2091 4 40 4C37.7909 4 36 5.79086 36 8C36 10.2091 37.7909 12 40 12Z"/><path d="M8 44C10.2091 44 12 42.2091 12 40C12 37.7909 10.2091 36 8 36C5.79086 36 4 37.7909 4 40C4 42.2091 5.79086 44 8 44Z"/><path d="M40 20V40H20"/><path d="M8 28V8H28"/>';

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

module.exports = CircleTwoLine;
