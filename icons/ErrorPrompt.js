'use strict';

var React = require('react');

function ErrorPrompt(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M8 18L20 30"/><path d="M20 18L8 30"/><path d="M34 8C39.0007 12.3609 42 17.9311 42 24C42 30.0689 39.0007 35.6391 34 40"/><path d="M27 14C30.7505 16.7256 33 20.2069 33 24C33 27.7931 30.7505 31.2744 27 34"/>' : '<path d="M8 18L20 30"/><path d="M20 18L8 30"/><path d="M34 8C39.0007 12.3609 42 17.9311 42 24C42 30.0689 39.0007 35.6391 34 40"/><path d="M27 14C30.7505 16.7256 33 20.2069 33 24C33 27.7931 30.7505 31.2744 27 34"/>';

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

module.exports = ErrorPrompt;
