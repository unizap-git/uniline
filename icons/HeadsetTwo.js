'use strict';

var React = require('react');

function HeadsetTwo(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M21 16H15V25C15 26.6569 16.3431 28 18 28C19.6569 28 21 26.6569 21 25V16Z"/><path d="M18 28V38L12 38"/><path d="M21 16V4H10.5C8 4 5 6 5 10C5 14 8.5 16 11 16H21Z"/><path d="M27 22V10H37.5C40 10 43 12 43 16C43 20 39.5 22 37 22H27Z"/><path d="M33 22H27V31C27 32.6569 28.3431 34 30 34C31.6569 34 33 32.6569 33 31V22Z"/><path d="M30 34L30 44L36 44"/>' : '<path d="M21 16H15V25C15 26.6569 16.3431 28 18 28C19.6569 28 21 26.6569 21 25V16Z"/><path d="M18 28V38L12 38"/><path d="M21 16V4H10.5C8 4 5 6 5 10C5 14 8.5 16 11 16H21Z"/><path d="M27 22V10H37.5C40 10 43 12 43 16C43 20 39.5 22 37 22H27Z"/><path d="M33 22H27V31C27 32.6569 28.3431 34 30 34C31.6569 34 33 32.6569 33 31V22Z"/><path d="M30 34L30 44L36 44"/>';

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

module.exports = HeadsetTwo;
