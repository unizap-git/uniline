'use strict';

var React = require('react');

function ShowerHead(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M27 20V22H9V20C9 16.6863 13.0294 14 18 14C22.9706 14 27 16.6863 27 20Z"/><path d="M42 44V12.5C42 7.80558 36.6274 4 30 4C23.3726 4 18 7.80558 18 12.5V14"/><path d="M18 29L18 28"/><path d="M10.1711 28.0303L9.8291 28.97"/><path d="M4.17112 43.0303L3.8291 43.97"/><path d="M18 44L18 43"/><path d="M18 37L18 35"/><path d="M7.34224 35.0603L6.6582 36.9397"/>' : '<path d="M27 20V22H9V20C9 16.6863 13.0294 14 18 14C22.9706 14 27 16.6863 27 20Z"/><path d="M42 44V12.5C42 7.80558 36.6274 4 30 4C23.3726 4 18 7.80558 18 12.5V14"/><path d="M18 29L18 28"/><path d="M10.1711 28.0303L9.8291 28.97"/><path d="M4.17112 43.0303L3.8291 43.97"/><path d="M18 44L18 43"/><path d="M18 37L18 35"/><path d="M7.34224 35.0603L6.6582 36.9397"/>';

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

module.exports = ShowerHead;
