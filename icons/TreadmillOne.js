'use strict';

var React = require('react');

function TreadmillOne(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M30 14C32.7614 14 35 11.7614 35 9C35 6.23858 32.7614 4 30 4C27.2386 4 25 6.23858 25 9C25 11.7614 27.2386 14 30 14Z" stroke-miterlimit="2"/><path d="M11 21L17 16L25 19L22 25L29 31L31 38" stroke-miterlimit="2"/><path d="M22 25L17 33L9 32" stroke-miterlimit="2"/><path d="M6 44H40L44 35" stroke-miterlimit="2"/><path d="M25 19L33 24L39 22" stroke-miterlimit="2"/>' : '<path d="M30 14C32.7614 14 35 11.7614 35 9C35 6.23858 32.7614 4 30 4C27.2386 4 25 6.23858 25 9C25 11.7614 27.2386 14 30 14Z" stroke-miterlimit="2"/><path d="M11 21L17 16L25 19L22 25L29 31L31 38" stroke-miterlimit="2"/><path d="M22 25L17 33L9 32" stroke-miterlimit="2"/><path d="M6 44H40L44 35" stroke-miterlimit="2"/><path d="M25 19L33 24L39 22" stroke-miterlimit="2"/>';

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

module.exports = TreadmillOne;
