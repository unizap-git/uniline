'use strict';

var React = require('react');

function Acceleration(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M42 35H34"/><path d="M31 42H27"/><path d="M14 22L8 17H4C4 17 9.486 27 11.9999 27H44L38 22H14Z"/><path d="M30 22L18.6606 14L16 14L19 22"/><path d="M30 27L17.2 39L14 39L18.2667 27"/><path d="M32 11C32 12 29 13 29 13L39 13C39 13 41.8855 13 42.7446 10.7143C43.6299 8.35854 42.0442 5 39.0221 5C36 5 36 8 36 8C36 8 34.1454 7.42857 33 8C31.8546 8.57143 32 10 32 11Z"/>' : '<path d="M42 35H34"/><path d="M31 42H27"/><path d="M14 22L8 17H4C4 17 9.486 27 11.9999 27H44L38 22H14Z"/><path d="M30 22L18.6606 14L16 14L19 22"/><path d="M30 27L17.2 39L14 39L18.2667 27"/><path d="M32 11C32 12 29 13 29 13L39 13C39 13 41.8855 13 42.7446 10.7143C43.6299 8.35854 42.0442 5 39.0221 5C36 5 36 8 36 8C36 8 34.1454 7.42857 33 8C31.8546 8.57143 32 10 32 11Z"/>';

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

module.exports = Acceleration;
