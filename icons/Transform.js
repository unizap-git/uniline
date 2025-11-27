'use strict';

var React = require('react');

function Transform(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<circle cx="13.7146" cy="13.7141" r="6.85714"/><circle cx="34.2859" cy="34.2854" r="6.85714"/><path d="M24.001 44C12.9553 44 4.00098 35.0457 4.00098 24L10.6676 27.3333"/><path d="M24.001 4C35.0467 4 44.001 12.9543 44.001 24L37.3343 20.6667"/>' : '<circle cx="13.7146" cy="13.7141" r="6.85714"/><circle cx="34.2859" cy="34.2854" r="6.85714"/><path d="M24.001 44C12.9553 44 4.00098 35.0457 4.00098 24L10.6676 27.3333"/><path d="M24.001 4C35.0467 4 44.001 12.9543 44.001 24L37.3343 20.6667"/>';

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

module.exports = Transform;
