'use strict';

var React = require('react');

function BabyApp(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M43 26V32C43 33.1046 42.1046 34 41 34H7C5.89543 34 5 33.1046 5 32V12C5 10.8954 5.89543 10 7 10H16"/><path d="M4 40L44 40"/><circle cx="30" cy="17" r="9"/><path d="M19 18V16"/><path d="M41 18V16"/><path d="M30 8C29.8333 7 28.8 4.8 26 4"/><path d="M30 8C30.0833 7 30.6 4.8 32 4"/><circle cx="33" cy="16" r="2"/><circle cx="27" cy="16" r="2"/>' : '<path d="M43 26V32C43 33.1046 42.1046 34 41 34H7C5.89543 34 5 33.1046 5 32V12C5 10.8954 5.89543 10 7 10H16"/><path d="M4 40L44 40"/><circle cx="30" cy="17" r="9"/><path d="M19 18V16"/><path d="M41 18V16"/><path d="M30 8C29.8333 7 28.8 4.8 26 4"/><path d="M30 8C30.0833 7 30.6 4.8 32 4"/><circle cx="33" cy="16" r="2"/><circle cx="27" cy="16" r="2"/>';

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

module.exports = BabyApp;
