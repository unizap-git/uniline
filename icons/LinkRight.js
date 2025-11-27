'use strict';

var React = require('react');

function LinkRight(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M8 12V4H24V12"/><path d="M24 36V44H8V36"/><path d="M44 24L24 24"/><path d="M16 34V14"/><path d="M36 16L44 24L36 32"/>' : '<path d="M8 12V4H24V12"/><path d="M24 36V44H8V36"/><path d="M44 24L24 24"/><path d="M16 34V14"/><path d="M36 16L44 24L36 32"/>';

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

module.exports = LinkRight;
