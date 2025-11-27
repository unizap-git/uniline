'use strict';

var React = require('react');

function DividingLineOne(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M4 24H44"/><path d="M8 10H12"/><path d="M20 10H28"/><path d="M36 10H40"/><path d="M8 38H12"/><path d="M20 38H28"/><path d="M36 38H40"/>' : '<path d="M4 24H44"/><path d="M8 10H12"/><path d="M20 10H28"/><path d="M36 10H40"/><path d="M8 38H12"/><path d="M20 38H28"/><path d="M36 38H40"/>';

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

module.exports = DividingLineOne;
