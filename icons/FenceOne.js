'use strict';

var React = require('react');

function FenceOne(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M8 4V44"/><path d="M44 12L4 12"/><path d="M40 44L8 12"/><path d="M8 44L40 12"/><path d="M27 44L8 25"/><path d="M40 31L21 12"/><path d="M8 31L26 12"/><path d="M21 44L40 25"/><path d="M44 44L4 44"/><path d="M40 4V44"/>' : '<path d="M8 4V44"/><path d="M44 12L4 12"/><path d="M40 44L8 12"/><path d="M8 44L40 12"/><path d="M27 44L8 25"/><path d="M40 31L21 12"/><path d="M8 31L26 12"/><path d="M21 44L40 25"/><path d="M44 44L4 44"/><path d="M40 4V44"/>';

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

module.exports = FenceOne;
