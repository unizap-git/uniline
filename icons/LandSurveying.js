'use strict';

var React = require('react');

function LandSurveying(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M24 26V44"/><path d="M24 26L36 44"/><path d="M24 26L12 44"/><path d="M24 14V20"/><path d="M19 20L29 20"/><rect x="10" y="6" width="26" height="8"/><path d="M40 8V12"/>' : '<path d="M24 26V44"/><path d="M24 26L36 44"/><path d="M24 26L12 44"/><path d="M24 14V20"/><path d="M19 20L29 20"/><rect x="10" y="6" width="26" height="8"/><path d="M40 8V12"/>';

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

module.exports = LandSurveying;
