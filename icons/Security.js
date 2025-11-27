'use strict';

var React = require('react');

function Security(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M42 26V22C42 12.0589 33.9411 4 24 4V4C14.0589 4 6 12.0589 6 22V26"/><path d="M32 27V12C32 7.58172 28.4183 4 24 4V4C19.5817 4 16 7.58172 16 12V27"/><path d="M24 24V38C24 41.3137 26.6863 44 30 44V44C33.3137 44 36 41.3137 36 38V35.1111"/><path d="M12 24H42"/>' : '<path d="M42 26V22C42 12.0589 33.9411 4 24 4V4C14.0589 4 6 12.0589 6 22V26"/><path d="M32 27V12C32 7.58172 28.4183 4 24 4V4C19.5817 4 16 7.58172 16 12V27"/><path d="M24 24V38C24 41.3137 26.6863 44 30 44V44C33.3137 44 36 41.3137 36 38V35.1111"/><path d="M12 24H42"/>';

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

module.exports = Security;
