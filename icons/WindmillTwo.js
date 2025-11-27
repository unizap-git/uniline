'use strict';

var React = require('react');

function WindmillTwo(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M24 24C29.5228 24 34 19.5228 34 14C34 8.47715 29.5228 4 24 4V24Z"/><path d="M24 24C24 29.5228 28.4772 34 34 34C39.5228 34 44 29.5228 44 24H24Z"/><path d="M24 24C24 18.4772 19.5228 14 14 14C8.47715 14 4 18.4772 4 24H24Z"/><path d="M24 24C18.4772 24 14 28.4772 14 34C14 39.5228 18.4772 44 24 44V24Z"/>' : '<path d="M24 24C29.5228 24 34 19.5228 34 14C34 8.47715 29.5228 4 24 4V24Z"/><path d="M24 24C24 29.5228 28.4772 34 34 34C39.5228 34 44 29.5228 44 24H24Z"/><path d="M24 24C24 18.4772 19.5228 14 14 14C8.47715 14 4 18.4772 4 24H24Z"/><path d="M24 24C18.4772 24 14 28.4772 14 34C14 39.5228 18.4772 44 24 44V24Z"/>';

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

module.exports = WindmillTwo;
