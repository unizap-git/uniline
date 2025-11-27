'use strict';

var React = require('react');

function DirectionAdjustment(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M20 8L24 4M24 4L28 8M24 4V16"/><path d="M20 40L24 44M24 44L28 40M24 44V32"/><path d="M40 20L44 24M44 24L40 28M44 24H32"/><path d="M8 20L4 24M4 24L8 28M4 24H16"/><circle cx="24" cy="24" r="2"/>' : '<path d="M20 8L24 4M24 4L28 8M24 4V16"/><path d="M20 40L24 44M24 44L28 40M24 44V32"/><path d="M40 20L44 24M44 24L40 28M44 24H32"/><path d="M8 20L4 24M4 24L8 28M4 24H16"/><circle cx="24" cy="24" r="2"/>';

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

module.exports = DirectionAdjustment;
