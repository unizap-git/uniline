'use strict';

var React = require('react');

function SpaceColony(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M42 43V6C42 4.89543 41.1046 4 40 4H33C31.8954 4 31 4.89543 31 6V24"/><path d="M24 22C14.0589 22 6 30.0589 6 40V44H42V40C42 30.0589 33.9411 22 24 22Z"/><path d="M8 31V8"/><path d="M16 24L16 14"/><path d="M31 14L42 14"/><path d="M17 42C17 41 17 40.0237 17 39C17 29.6112 20.134 22 24 22C27.866 22 31 29.6112 31 39C31 40.3778 31 41 31 42"/><path d="M4 44H44"/><path d="M7 35C7 35 17.3496 34 24 34C30.6504 34 41 35 41 35"/>' : '<path d="M42 43V6C42 4.89543 41.1046 4 40 4H33C31.8954 4 31 4.89543 31 6V24"/><path d="M24 22C14.0589 22 6 30.0589 6 40V44H42V40C42 30.0589 33.9411 22 24 22Z"/><path d="M8 31V8"/><path d="M16 24L16 14"/><path d="M31 14L42 14"/><path d="M17 42C17 41 17 40.0237 17 39C17 29.6112 20.134 22 24 22C27.866 22 31 29.6112 31 39C31 40.3778 31 41 31 42"/><path d="M4 44H44"/><path d="M7 35C7 35 17.3496 34 24 34C30.6504 34 41 35 41 35"/>';

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

module.exports = SpaceColony;
