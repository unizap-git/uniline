'use strict';

var React = require('react');

function TowerOfBabel(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M20 14.5V4L28 4.00002V13.5"/><path d="M14 25V15.4619L34 13V23"/><path d="M11 35V26L37 23V32"/><path d="M40 44H8V36L40 32V44Z"/>' : '<path d="M20 14.5V4L28 4.00002V13.5"/><path d="M14 25V15.4619L34 13V23"/><path d="M11 35V26L37 23V32"/><path d="M40 44H8V36L40 32V44Z"/>';

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

module.exports = TowerOfBabel;
