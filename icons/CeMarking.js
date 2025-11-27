'use strict';

var React = require('react');

function CeMarking(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M22 42C12.0589 42 4 33.9411 4 24C4 14.0589 12.0589 6 22 6"/><path d="M44 42C34.0589 42 26 33.9411 26 24C26 14.0589 34.0589 6 44 6"/><path d="M26 24H37"/>' : '<path d="M22 42C12.0589 42 4 33.9411 4 24C4 14.0589 12.0589 6 22 6"/><path d="M44 42C34.0589 42 26 33.9411 26 24C26 14.0589 34.0589 6 44 6"/><path d="M26 24H37"/>';

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

module.exports = CeMarking;
