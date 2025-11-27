'use strict';

var React = require('react');

function ShoppingMall(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path fill-rule="evenodd" clip-rule="evenodd" d="M8 44V6C8 5.44772 8.44772 5 9 5H29C29.5523 5 30 5.44772 30 6V44"/><path d="M8 44V6C8 5.44772 8.44772 5 9 5H29C29.5523 5 30 5.44772 30 6V44"/><path d="M30 15L40 20.9993V44"/><path d="M4 44H44"/>' : '<path fill-rule="evenodd" clip-rule="evenodd" d="M8 44V6C8 5.44772 8.44772 5 9 5H29C29.5523 5 30 5.44772 30 6V44"/><path d="M8 44V6C8 5.44772 8.44772 5 9 5H29C29.5523 5 30 5.44772 30 6V44"/><path d="M30 15L40 20.9993V44"/><path d="M4 44H44"/>';

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

module.exports = ShoppingMall;
