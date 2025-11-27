'use strict';

var React = require('react');

function STurnDown(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M24 17L24 13C24 8.99999 27 5.99999 31 5.99999C35 5.99999 38 8.99999 38 13L38 32"/><path d="M10 6L10 35C10 39 13 42 17 42C21 42 24 39 24 35L24 17"/><path d="M15 11L10 6L5 11"/><circle cx="38" cy="37.0001" r="5"/>' : '<path d="M24 17L24 13C24 8.99999 27 5.99999 31 5.99999C35 5.99999 38 8.99999 38 13L38 32"/><path d="M10 6L10 35C10 39 13 42 17 42C21 42 24 39 24 35L24 17"/><path d="M15 11L10 6L5 11"/><circle cx="38" cy="37.0001" r="5"/>';

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

module.exports = STurnDown;
