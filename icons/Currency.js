'use strict';

var React = require('react');

function Currency(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M4.5,7s3.8-5.8,10.2-3.5c6.5,2.3,6.2,8.8,6.2,8.8"/>   <path d="M19.5,17s-3,5.5-9.8,3.8S3,12,3,12"/>   <path d="M21,4v8"/>   <path d="M3,12v8"/>   <path d="M15.2,8h-6.2M15.2,11.1h-6.2M12.2,17.2l-3.1-3.1h1.5c1.7,0,3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1"/>' : '<path d="M19 16L24 22L29 16"/><path d="M9 13.9999C9 13.9999 16.5 2.49984 29.5 6.99986C42.5 11.4999 42 24.4999 42 24.4999"/><path d="M39 34C39 34 33 45 19.5 41.5C6 38 6 24 6 24"/><path d="M42 8V24"/><path d="M6 24L6 40"/><path d="M18 28H30"/><path d="M18 22H30"/><path d="M24 22V34"/>';

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

module.exports = Currency;
