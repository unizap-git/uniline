'use strict';

var React = require('react');

function ParagraphTriangle(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M24 9H42"/><path d="M24 19H42"/><path d="M6 29H42"/><path d="M6 39H42"/><path d="M6 9.76619C6 8.9889 6.84797 8.50878 7.5145 8.9087L14.5708 13.1425C15.2182 13.5309 15.2182 14.4691 14.5708 14.8575L7.5145 19.0913C6.84797 19.4912 6 19.0111 6 18.2338V9.76619Z"/>' : '<path d="M24 9H42"/><path d="M24 19H42"/><path d="M6 29H42"/><path d="M6 39H42"/><path d="M6 9.76619C6 8.9889 6.84797 8.50878 7.5145 8.9087L14.5708 13.1425C15.2182 13.5309 15.2182 14.4691 14.5708 14.8575L7.5145 19.0913C6.84797 19.4912 6 19.0111 6 18.2338V9.76619Z"/>';

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

module.exports = ParagraphTriangle;
