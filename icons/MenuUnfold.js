'use strict';

var React = require('react');

function MenuUnfold(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M8 11H40"/><path d="M8 24H42"/><path d="M8 37H40"/><path d="M36.3433 29.6568L42.0001 23.9999L36.3433 18.343"/>' : '<path d="M8 11H40"/><path d="M8 24H42"/><path d="M8 37H40"/><path d="M36.3433 29.6568L42.0001 23.9999L36.3433 18.343"/>';

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

module.exports = MenuUnfold;
