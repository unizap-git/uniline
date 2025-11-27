'use strict';

var React = require('react');

function InvertRight(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M38 15C38 22.2989 33.897 28.5832 28 31.4081C25.8653 32.4307 23.4954 33 21 33C11.6112 33 4 24.9411 4 15"/><path d="M30 20L38 15L44 23"/>' : '<path d="M38 15C38 22.2989 33.897 28.5832 28 31.4081C25.8653 32.4307 23.4954 33 21 33C11.6112 33 4 24.9411 4 15"/><path d="M30 20L38 15L44 23"/>';

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

module.exports = InvertRight;
