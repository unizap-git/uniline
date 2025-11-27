'use strict';

var React = require('react');

function ShoppingBagOne(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<rect x="10" y="12" width="28" height="30" rx="3"/><path d="M30 18V10C30 6.68629 27.3137 4 24 4V4C20.6863 4 18 6.68629 18 10V18"/>' : '<rect x="10" y="12" width="28" height="30" rx="3"/><path d="M30 18V10C30 6.68629 27.3137 4 24 4V4C20.6863 4 18 6.68629 18 10V18"/>';

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

module.exports = ShoppingBagOne;
