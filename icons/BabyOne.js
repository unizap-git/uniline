'use strict';

var React = require('react');

function BabyOne(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<circle cx="24" cy="8" r="5"/><path d="M5 28C5 28 22 7.75 43 28"/><path d="M19 28V24.2105C19 24.2105 19 19 24 19C29 19 29 24.2105 29 24.2105V28V32C29 32 29 37 24 37C19 37 19 32 19 32V28Z"/><path d="M29 32L37 37L31 44"/><path d="M19 32L11 37L17 44"/>' : '<circle cx="24" cy="8" r="5"/><path d="M5 28C5 28 22 7.75 43 28"/><path d="M19 28V24.2105C19 24.2105 19 19 24 19C29 19 29 24.2105 29 24.2105V28V32C29 32 29 37 24 37C19 37 19 32 19 32V28Z"/><path d="M29 32L37 37L31 44"/><path d="M19 32L11 37L17 44"/>';

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

module.exports = BabyOne;
