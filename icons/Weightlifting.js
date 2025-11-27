'use strict';

var React = require('react');

function Weightlifting(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M24 27C26.7614 27 29 24.7614 29 22C29 19.2386 26.7614 17 24 17C21.2386 17 19 19.2386 19 22C19 24.7614 21.2386 27 24 27Z" stroke-miterlimit="2"/><path d="M4 9H44" stroke-miterlimit="2"/><path d="M4 4V14" stroke-miterlimit="2"/><path d="M44 4V14" stroke-miterlimit="2"/><path d="M11 9V26.1L24 34L37 26V9" stroke-miterlimit="2"/><path d="M24 34V44" stroke-miterlimit="2"/>' : '<path d="M24 27C26.7614 27 29 24.7614 29 22C29 19.2386 26.7614 17 24 17C21.2386 17 19 19.2386 19 22C19 24.7614 21.2386 27 24 27Z" stroke-miterlimit="2"/><path d="M4 9H44" stroke-miterlimit="2"/><path d="M4 4V14" stroke-miterlimit="2"/><path d="M44 4V14" stroke-miterlimit="2"/><path d="M11 9V26.1L24 34L37 26V9" stroke-miterlimit="2"/><path d="M24 34V44" stroke-miterlimit="2"/>';

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

module.exports = Weightlifting;
