'use strict';

var React = require('react');

function AdProduct(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M44 14L24 4L4 14V34L24 44L44 34V14Z"/><path d="M4 14L24 24"/><path d="M24 44V24"/><path d="M44 14L24 24"/><path d="M34 9L14 19"/>' : '<path d="M44 14L24 4L4 14V34L24 44L44 34V14Z"/><path d="M4 14L24 24"/><path d="M24 44V24"/><path d="M44 14L24 24"/><path d="M34 9L14 19"/>';

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

module.exports = AdProduct;
