'use strict';

var React = require('react');

function IndustrialScales(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M10 32H38L42 40H6L10 32Z"/><path d="M16 40V44"/><path d="M24 12V32"/><rect x="17" y="4" width="14" height="8"/><path d="M32 40V44"/>' : '<path d="M10 32H38L42 40H6L10 32Z"/><path d="M16 40V44"/><path d="M24 12V32"/><rect x="17" y="4" width="14" height="8"/><path d="M32 40V44"/>';

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

module.exports = IndustrialScales;
