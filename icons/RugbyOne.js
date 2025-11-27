'use strict';

var React = require('react');

function RugbyOne(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M4 24C6.2922 32.63 14.3769 39 24 39C33.6231 39 41.7078 32.63 44 24C41.7078 15.37 33.6231 9 24 9C14.3769 9 6.2922 15.37 4 24Z" stroke-miterlimit="2"/><path d="M40 24H44" stroke-miterlimit="2"/><path d="M14 24H34" stroke-miterlimit="2"/><path d="M4 24H8" stroke-miterlimit="2"/><path d="M17 20V28" stroke-miterlimit="2"/><path d="M31 20V28" stroke-miterlimit="2"/><path d="M24 20V28" stroke-miterlimit="2"/>' : '<path d="M4 24C6.2922 32.63 14.3769 39 24 39C33.6231 39 41.7078 32.63 44 24C41.7078 15.37 33.6231 9 24 9C14.3769 9 6.2922 15.37 4 24Z" stroke-miterlimit="2"/><path d="M40 24H44" stroke-miterlimit="2"/><path d="M14 24H34" stroke-miterlimit="2"/><path d="M4 24H8" stroke-miterlimit="2"/><path d="M17 20V28" stroke-miterlimit="2"/><path d="M31 20V28" stroke-miterlimit="2"/><path d="M24 20V28" stroke-miterlimit="2"/>';

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

module.exports = RugbyOne;
