'use strict';

var React = require('react');

function FormOne(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<rect x="6" y="6" width="36" height="36" rx="3"/><path d="M6 14H40"/><path d="M30 22H42"/><path d="M30 30H42"/><path d="M23 22H24"/><path d="M23 30H24"/><path d="M14 6L14 42"/>' : '<rect x="6" y="6" width="36" height="36" rx="3"/><path d="M6 14H40"/><path d="M30 22H42"/><path d="M30 30H42"/><path d="M23 22H24"/><path d="M23 30H24"/><path d="M14 6L14 42"/>';

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

module.exports = FormOne;
