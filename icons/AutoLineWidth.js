'use strict';

var React = require('react');

function AutoLineWidth(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M5 40L5 8"/><path d="M24 13L14 35"/><path d="M18 28L30 28"/><path d="M24 13L34 35"/><path d="M43 40L43 8"/>' : '<path d="M5 40L5 8"/><path d="M24 13L14 35"/><path d="M18 28L30 28"/><path d="M24 13L34 35"/><path d="M43 40L43 8"/>';

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

module.exports = AutoLineWidth;
