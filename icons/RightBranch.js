'use strict';

var React = require('react');

function RightBranch(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M22 8.01189C20.5 8.01205 16.0714 7.93823 15 13.0006C13.917 18.1178 9.85714 22.8479 8 24.0001"/><path d="M22 40.0002C20.5 40.0005 16.0714 40.0631 15 35.0007C13.917 29.8835 9.85714 25.1524 8 24.0002"/><circle cx="8" cy="24.0001" r="4"/><path d="M8 24.0001L22 24.0001"/><path d="M30 24.0006H42"/><path d="M30 8.00098H42"/><path d="M30 40.001H42"/>' : '<path d="M22 8.01189C20.5 8.01205 16.0714 7.93823 15 13.0006C13.917 18.1178 9.85714 22.8479 8 24.0001"/><path d="M22 40.0002C20.5 40.0005 16.0714 40.0631 15 35.0007C13.917 29.8835 9.85714 25.1524 8 24.0002"/><circle cx="8" cy="24.0001" r="4"/><path d="M8 24.0001L22 24.0001"/><path d="M30 24.0006H42"/><path d="M30 8.00098H42"/><path d="M30 40.001H42"/>';

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

module.exports = RightBranch;
