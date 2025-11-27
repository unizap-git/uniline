'use strict';

var React = require('react');

function Beauty(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M42 44C42 44 42 29.6492 42 22C42 12.0589 33.9411 4 24 4C14.0589 4 6 12.0589 6 22C6 28.6625 6 44 6 44"/><path d="M24 43C29.5228 43 34 34.0457 34 23H14C14 34.0457 18.4772 43 24 43Z"/>' : '<path d="M42 44C42 44 42 29.6492 42 22C42 12.0589 33.9411 4 24 4C14.0589 4 6 12.0589 6 22C6 28.6625 6 44 6 44"/><path d="M24 43C29.5228 43 34 34.0457 34 23H14C14 34.0457 18.4772 43 24 43Z"/>';

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

module.exports = Beauty;
