'use strict';

var React = require('react');

function ShoppingCartTwo(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M5 7H11L18 24H35.5L43 10"/><path d="M21 12L33 12"/><path d="M27 6V18"/><path d="M18 24L14 30H40"/><circle cx="19" cy="39" r="3"/><circle cx="35" cy="39" r="3"/>' : '<path d="M5 7H11L18 24H35.5L43 10"/><path d="M21 12L33 12"/><path d="M27 6V18"/><path d="M18 24L14 30H40"/><circle cx="19" cy="39" r="3"/><circle cx="35" cy="39" r="3"/>';

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

module.exports = ShoppingCartTwo;
