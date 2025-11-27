'use strict';

var React = require('react');

function DirectionAdjustmentTwo(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M18 10L24 4M24 4L30 10M24 4V14"/><path d="M18 38L24 44M24 44L30 38M24 44V34"/><path d="M38 18L44 24M44 24L38 30M44 24H34"/><path d="M10 18L4 24M4 24L10 30M4 24H14"/><circle cx="24" cy="24" r="4"/>' : '<path d="M18 10L24 4M24 4L30 10M24 4V14"/><path d="M18 38L24 44M24 44L30 38M24 44V34"/><path d="M38 18L44 24M44 24L38 30M44 24H34"/><path d="M10 18L4 24M4 24L10 30M4 24H14"/><circle cx="24" cy="24" r="4"/>';

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

module.exports = DirectionAdjustmentTwo;
