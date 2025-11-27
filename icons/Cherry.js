'use strict';

var React = require('react');

function Cherry(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<circle cx="14" cy="34" r="8"/><circle cx="35" cy="37" r="7"/><path d="M37 10C34.3488 10.8116 28.6279 13.0145 25.2791 16.2609C20.2558 21.1304 19 24.5 18 27"/><path d="M36.9997 9.99995C35.8831 11.3184 33.7149 14.5959 33.0435 18.3891C32.0364 24.0789 32.9998 27.5 33.9997 29.9999"/><path d="M30 4L44 16"/>' : '<circle cx="14" cy="34" r="8"/><circle cx="35" cy="37" r="7"/><path d="M37 10C34.3488 10.8116 28.6279 13.0145 25.2791 16.2609C20.2558 21.1304 19 24.5 18 27"/><path d="M36.9997 9.99995C35.8831 11.3184 33.7149 14.5959 33.0435 18.3891C32.0364 24.0789 32.9998 27.5 33.9997 29.9999"/><path d="M30 4L44 16"/>';

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

module.exports = Cherry;
