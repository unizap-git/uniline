'use strict';

var React = require('react');

function FireTwo(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M36 21C36 28.1797 30.1797 34 23 34C15.8203 34 10 28.1797 10 21C10 13.8203 15 11 17 4C25 7.49989 25 18 25 18C25 18 27 12 33 10.5C33.5 16 36 17.9342 36 21Z"/><path d="M7 36L39 44"/><path d="M7 44L39 36"/>' : '<path d="M36 21C36 28.1797 30.1797 34 23 34C15.8203 34 10 28.1797 10 21C10 13.8203 15 11 17 4C25 7.49989 25 18 25 18C25 18 27 12 33 10.5C33.5 16 36 17.9342 36 21Z"/><path d="M7 36L39 44"/><path d="M7 44L39 36"/>';

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

module.exports = FireTwo;
