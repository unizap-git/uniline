'use strict';

var React = require('react');

function FireExtinguisher(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M6 20C6 15.5817 9.58172 12 14 12C18.4183 12 22 15.5817 22 20V44H6V20Z"/><path d="M30 44H42L36 26L30 44Z"/><path d="M36 26L30 44H42L36 26ZM36 26V24C36 16.4575 36 12.6863 33.6569 10.3431C31.3137 8 27.5425 8 20 8H18M10 8H6"/><circle cx="14" cy="8" r="4"/>' : '<path d="M6 20C6 15.5817 9.58172 12 14 12C18.4183 12 22 15.5817 22 20V44H6V20Z"/><path d="M30 44H42L36 26L30 44Z"/><path d="M36 26L30 44H42L36 26ZM36 26V24C36 16.4575 36 12.6863 33.6569 10.3431C31.3137 8 27.5425 8 20 8H18M10 8H6"/><circle cx="14" cy="8" r="4"/>';

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

module.exports = FireExtinguisher;
