'use strict';

var React = require('react');

function RecentViewsSort(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M6 5V30H42V5"/><path d="M30 37L24 43L18 37"/><path d="M24 30V43"/><path d="M24 21C28.0501 21 31.7168 19 35 15C31.7168 11 28.0501 9 24 9C19.9499 9 16.2832 11 13 15C16.2832 19 19.9499 21 24 21Z"/><path d="M24 18C25.6569 18 27 16.6569 27 15C27 13.3431 25.6569 12 24 12C22.3431 12 21 13.3431 21 15C21 16.6569 22.3431 18 24 18Z"/>' : '<path d="M6 5V30H42V5"/><path d="M30 37L24 43L18 37"/><path d="M24 30V43"/><path d="M24 21C28.0501 21 31.7168 19 35 15C31.7168 11 28.0501 9 24 9C19.9499 9 16.2832 11 13 15C16.2832 19 19.9499 21 24 21Z"/><path d="M24 18C25.6569 18 27 16.6569 27 15C27 13.3431 25.6569 12 24 12C22.3431 12 21 13.3431 21 15C21 16.6569 22.3431 18 24 18Z"/>';

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

module.exports = RecentViewsSort;
