'use strict';

var React = require('react');

function RuleTwo(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M24 13C11 13 4 22.8497 4 35H44C44 22.8497 37 13 24 13Z"/><path d="M10 31L10 35"/><path d="M17 31L17 35"/><path d="M24 31L24 35"/><path d="M31 31L31 35"/><path d="M38 31L38 35"/><path d="M24 20C19.4457 20 14 22.134 14 26H34C34 22.134 28.5543 20 24 20Z"/>' : '<path d="M24 13C11 13 4 22.8497 4 35H44C44 22.8497 37 13 24 13Z"/><path d="M10 31L10 35"/><path d="M17 31L17 35"/><path d="M24 31L24 35"/><path d="M31 31L31 35"/><path d="M38 31L38 35"/><path d="M24 20C19.4457 20 14 22.134 14 26H34C34 22.134 28.5543 20 24 20Z"/>';

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

module.exports = RuleTwo;
