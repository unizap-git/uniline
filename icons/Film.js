'use strict';

var React = require('react');

function Film(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<rect x="6" y="6" width="36" height="36" rx="3"/><path d="M16 6V42"/><path d="M32 6V42"/><path d="M6 15H16"/><path d="M32 15H42"/><path d="M6 33H16"/><path d="M6 24H42"/><path d="M32 33H42"/>' : '<rect x="6" y="6" width="36" height="36" rx="3"/><path d="M16 6V42"/><path d="M32 6V42"/><path d="M6 15H16"/><path d="M32 15H42"/><path d="M6 33H16"/><path d="M6 24H42"/><path d="M32 33H42"/>';

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

module.exports = Film;
