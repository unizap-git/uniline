'use strict';

var React = require('react');

function Frigate(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M11 12V24L24 19L37 24V12H11Z"/><path d="M19 7V12H29V7C29 5.34315 27.6569 4 26 4H22C20.3431 4 19 5.34315 19 7Z"/><path d="M12 44L6 26L24 19L42 26L36 44"/><path d="M4 42C4 42 8.66336 44 12 44C17 44 19 42 24 42C29 42 31 44 36 44C39.3366 44 44 42 44 42"/><path d="M24 19V42"/>' : '<path d="M11 12V24L24 19L37 24V12H11Z"/><path d="M19 7V12H29V7C29 5.34315 27.6569 4 26 4H22C20.3431 4 19 5.34315 19 7Z"/><path d="M12 44L6 26L24 19L42 26L36 44"/><path d="M4 42C4 42 8.66336 44 12 44C17 44 19 42 24 42C29 42 31 44 36 44C39.3366 44 44 42 44 42"/><path d="M24 19V42"/>';

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

module.exports = Frigate;
