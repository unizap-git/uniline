'use strict';

var React = require('react');

function Juice(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M15 24H33L31.2 44H16.8L15 24Z"/><rect x="11" y="18" width="26" height="6" rx="3"/><path d="M24 8C18.4772 8 14 12.4772 14 18H34C34 12.4772 29.5228 8 24 8Z"/><path d="M28 4L26 8"/>' : '<path d="M15 24H33L31.2 44H16.8L15 24Z"/><rect x="11" y="18" width="26" height="6" rx="3"/><path d="M24 8C18.4772 8 14 12.4772 14 18H34C34 12.4772 29.5228 8 24 8Z"/><path d="M28 4L26 8"/>';

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

module.exports = Juice;
