'use strict';

var React = require('react');

function List(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M5 10L8 13L14 7"/><path d="M5 24L8 27L14 21"/><path d="M5 38L8 41L14 35"/><path d="M21 24H43"/><path d="M21 38H43"/><path d="M21 10H43"/>' : '<path d="M5 10L8 13L14 7"/><path d="M5 24L8 27L14 21"/><path d="M5 38L8 41L14 35"/><path d="M21 24H43"/><path d="M21 38H43"/><path d="M21 10H43"/>';

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

module.exports = List;
