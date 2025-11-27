'use strict';

var React = require('react');

function WingsuitFlying(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M24 14C26.7614 14 29 11.7614 29 9C29 6.23858 26.7614 4 24 4C21.2386 4 19 6.23858 19 9C19 11.7614 21.2386 14 24 14Z" stroke-miterlimit="2"/><path d="M24 20C15.29 20 8 27.28 8 36H15V44H33V36H40C40.01 27.29 32.71 20 24 20Z" stroke-miterlimit="2"/><path d="M15 36V23" stroke-miterlimit="2"/><path d="M33 36L33 23" stroke-miterlimit="2"/><path d="M24 44V20" stroke-miterlimit="2"/>' : '<path d="M24 14C26.7614 14 29 11.7614 29 9C29 6.23858 26.7614 4 24 4C21.2386 4 19 6.23858 19 9C19 11.7614 21.2386 14 24 14Z" stroke-miterlimit="2"/><path d="M24 20C15.29 20 8 27.28 8 36H15V44H33V36H40C40.01 27.29 32.71 20 24 20Z" stroke-miterlimit="2"/><path d="M15 36V23" stroke-miterlimit="2"/><path d="M33 36L33 23" stroke-miterlimit="2"/><path d="M24 44V20" stroke-miterlimit="2"/>';

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

module.exports = WingsuitFlying;
