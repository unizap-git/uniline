'use strict';

var React = require('react');

function KettleOne(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M13 14H30C30 14 38 18.1481 38 27.7993C38 37.4504 30 42 30 42H13C13 42 6 35.9785 6 28C6 20.0215 13 14 13 14Z"/><path d="M38 27.9998C25 24.9998 19 33.9998 6 27.9998"/><path d="M31 14H40C40 14 44 18 44 30"/><path d="M9 6L32 8.66667L31 14H13L9 6Z"/>' : '<path d="M13 14H30C30 14 38 18.1481 38 27.7993C38 37.4504 30 42 30 42H13C13 42 6 35.9785 6 28C6 20.0215 13 14 13 14Z"/><path d="M38 27.9998C25 24.9998 19 33.9998 6 27.9998"/><path d="M31 14H40C40 14 44 18 44 30"/><path d="M9 6L32 8.66667L31 14H13L9 6Z"/>';

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

module.exports = KettleOne;
