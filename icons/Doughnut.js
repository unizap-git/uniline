'use strict';

var React = require('react');

function Doughnut(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<circle cx="24" cy="24" r="19"/><circle cx="24" cy="24" r="7"/><path d="M6 28C6 28 9.38888 25.0417 12 27C16 30 18 28 18 28"/><path d="M29 29C29.6667 28 33 24.7143 36 26C40 27.7143 43 26 43 25"/>' : '<circle cx="24" cy="24" r="19"/><circle cx="24" cy="24" r="7"/><path d="M6 28C6 28 9.38888 25.0417 12 27C16 30 18 28 18 28"/><path d="M29 29C29.6667 28 33 24.7143 36 26C40 27.7143 43 26 43 25"/>';

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

module.exports = Doughnut;
