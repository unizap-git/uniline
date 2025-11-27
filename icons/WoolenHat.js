'use strict';

var React = require('react');

function WoolenHat(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<rect x="4" y="34" width="40" height="10" rx="2"/><path d="M15 26V34"/><path d="M24 26V34"/><path d="M33 26V34"/><circle cx="24" cy="8" r="4"/><path d="M8 34C8 25.75 9 12 24 12C39 12 40 25.75 40 34"/>' : '<rect x="4" y="34" width="40" height="10" rx="2"/><path d="M15 26V34"/><path d="M24 26V34"/><path d="M33 26V34"/><circle cx="24" cy="8" r="4"/><path d="M8 34C8 25.75 9 12 24 12C39 12 40 25.75 40 34"/>';

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

module.exports = WoolenHat;
