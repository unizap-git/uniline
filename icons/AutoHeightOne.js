'use strict';

var React = require('react');

function AutoHeightOne(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M7 42L7 6"/><path d="M18 13.9907L23.9954 8L30 14"/><path d="M30 34.0093L24.0046 40L18 34"/><path d="M24 8V40"/><path d="M41 42L41 6"/>' : '<path d="M7 42L7 6"/><path d="M18 13.9907L23.9954 8L30 14"/><path d="M30 34.0093L24.0046 40L18 34"/><path d="M24 8V40"/><path d="M41 42L41 6"/>';

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

module.exports = AutoHeightOne;
