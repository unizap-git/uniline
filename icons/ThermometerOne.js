'use strict';

var React = require('react');

function ThermometerOne(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M24 44C28.9706 44 33 39.9706 33 35C33 31.4663 30.9634 28.4082 28 26.9355V10C28 8 28 4 24 4C20 4 20 8 20 10V26.9355C17.0366 28.4082 15 31.4663 15 35C15 39.9706 19.0294 44 24 44Z"/>' : '<path d="M24 44C28.9706 44 33 39.9706 33 35C33 31.4663 30.9634 28.4082 28 26.9355V10C28 8 28 4 24 4C20 4 20 8 20 10V26.9355C17.0366 28.4082 15 31.4663 15 35C15 39.9706 19.0294 44 24 44Z"/>';

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

module.exports = ThermometerOne;
