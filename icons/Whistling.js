'use strict';

var React = require('react');

function Whistling(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M27 11L4 11V19H15C14.35 20.55 14 22.21 14 24C14 31.21 19.79 37 27 37C34.2 37 40 31.21 40 24C40 16.79 34.21 11 27 11Z" stroke-miterlimit="2"/><path d="M27 11V17" stroke-miterlimit="2"/><path d="M40 24H44" stroke-miterlimit="2"/>' : '<path d="M27 11L4 11V19H15C14.35 20.55 14 22.21 14 24C14 31.21 19.79 37 27 37C34.2 37 40 31.21 40 24C40 16.79 34.21 11 27 11Z" stroke-miterlimit="2"/><path d="M27 11V17" stroke-miterlimit="2"/><path d="M40 24H44" stroke-miterlimit="2"/>';

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

module.exports = Whistling;
