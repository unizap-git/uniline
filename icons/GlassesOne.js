'use strict';

var React = require('react');

function GlassesOne(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<circle cx="14.5" cy="24.5" r="6.5"/><circle r="6.5" transform="matrix(-1 0 0 1 33.5 24.5)"/><path d="M4 24H8"/><path d="M44 24H40"/><path d="M20 21C20.5 19 22 17 24 17C26 17 27.5 19 28 21"/>' : '<circle cx="14.5" cy="24.5" r="6.5"/><circle r="6.5" transform="matrix(-1 0 0 1 33.5 24.5)"/><path d="M4 24H8"/><path d="M44 24H40"/><path d="M20 21C20.5 19 22 17 24 17C26 17 27.5 19 28 21"/>';

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

module.exports = GlassesOne;
