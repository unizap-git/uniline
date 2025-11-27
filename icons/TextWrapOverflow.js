'use strict';

var React = require('react');

function TextWrapOverflow(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M8 10V38"/><path d="M24 4V16"/><path d="M16 24H42"/><path d="M37.0561 19.0113L42.0929 24.0255L37.0561 29.123"/><path d="M24 32V44"/>' : '<path d="M8 10V38"/><path d="M24 4V16"/><path d="M16 24H42"/><path d="M37.0561 19.0113L42.0929 24.0255L37.0561 29.123"/><path d="M24 32V44"/>';

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

module.exports = TextWrapOverflow;
