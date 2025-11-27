'use strict';

var React = require('react');

function VacuumCleaner(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M26 22.5C26 22.5 26 13 26 10C26 7 28 4 32 4C36 4 38 7 38 10C38 13 38 34 38 34"/><path d="M32.75 34H43.25L44 40H32L32.75 34Z"/><path d="M10 40H25.8864C25.9491 40 26 39.9491 26 39.8864V23.2546C26 15.9343 20.0657 10 12.7454 10V10C9.57228 10 7 12.5723 7 15.7454V29"/><circle cx="10" cy="34" r="6"/><path d="M14 10V29"/>' : '<path d="M26 22.5C26 22.5 26 13 26 10C26 7 28 4 32 4C36 4 38 7 38 10C38 13 38 34 38 34"/><path d="M32.75 34H43.25L44 40H32L32.75 34Z"/><path d="M10 40H25.8864C25.9491 40 26 39.9491 26 39.8864V23.2546C26 15.9343 20.0657 10 12.7454 10V10C9.57228 10 7 12.5723 7 15.7454V29"/><circle cx="10" cy="34" r="6"/><path d="M14 10V29"/>';

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

module.exports = VacuumCleaner;
