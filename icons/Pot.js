'use strict';

var React = require('react');

function Pot(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M34 28L44 24"/><path d="M4 28H34L33.5613 31.8024C33.1537 35.3345 30.163 38 26.6074 38H11.3926C7.83703 38 4.84629 35.3345 4.43873 31.8024L4 28Z"/><path d="M19 10V20"/><path d="M11 12V18"/><path d="M27 12V18"/>' : '<path d="M34 28L44 24"/><path d="M4 28H34L33.5613 31.8024C33.1537 35.3345 30.163 38 26.6074 38H11.3926C7.83703 38 4.84629 35.3345 4.43873 31.8024L4 28Z"/><path d="M19 10V20"/><path d="M11 12V18"/><path d="M27 12V18"/>';

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

module.exports = Pot;
