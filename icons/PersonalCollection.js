'use strict';

var React = require('react');

function PersonalCollection(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<circle cx="24" cy="11" r="7"/><path d="M4 41C4 32.1634 12.0589 25 22 25"/><path d="M31.85 28C29.7237 28 28 30.0086 28 32.4864C28 36.9727 32.55 41.0513 35 42C37.45 41.0513 42 36.9727 42 32.4864C42 30.0086 40.2763 28 38.15 28C36.8479 28 35.6967 28.7533 35 29.9062C34.3033 28.7533 33.1521 28 31.85 28Z"/>' : '<circle cx="24" cy="11" r="7"/><path d="M4 41C4 32.1634 12.0589 25 22 25"/><path d="M31.85 28C29.7237 28 28 30.0086 28 32.4864C28 36.9727 32.55 41.0513 35 42C37.45 41.0513 42 36.9727 42 32.4864C42 30.0086 40.2763 28 38.15 28C36.8479 28 35.6967 28.7533 35 29.9062C34.3033 28.7533 33.1521 28 31.85 28Z"/>';

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

module.exports = PersonalCollection;
