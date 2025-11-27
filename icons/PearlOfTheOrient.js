'use strict';

var React = require('react');

function PearlOfTheOrient(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<circle cx="24" cy="33" r="6"/><circle cx="24" cy="13" r="3"/><path d="M24 40V44"/><path d="M22 16L20 28"/><path d="M26 16L28 28"/><path d="M19 37L16 44"/><path d="M29 37L32 44"/><path d="M24 4V10"/>' : '<circle cx="24" cy="33" r="6"/><circle cx="24" cy="13" r="3"/><path d="M24 40V44"/><path d="M22 16L20 28"/><path d="M26 16L28 28"/><path d="M19 37L16 44"/><path d="M29 37L32 44"/><path d="M24 4V10"/>';

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

module.exports = PearlOfTheOrient;
