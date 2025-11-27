'use strict';

var React = require('react');

function ShoppingCartOne(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<circle cx="20.5" cy="41.5" r="3.5"/><circle cx="37.5" cy="41.5" r="3.5"/><path d="M5 6L14 12L19 34H39L44 17H25"/><path d="M25 26L32.2727 26L41 26"/>' : '<circle cx="20.5" cy="41.5" r="3.5"/><circle cx="37.5" cy="41.5" r="3.5"/><path d="M5 6L14 12L19 34H39L44 17H25"/><path d="M25 26L32.2727 26L41 26"/>';

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

module.exports = ShoppingCartOne;
