'use strict';

var React = require('react');

function Ship(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path fill-rule="evenodd" clip-rule="evenodd" d="M6 20.3768L24 14L42 20.3768L36.6667 34H11.3333L6 20.3768Z"/><path d="M13 8H35L34.9976 17.8961L24 14L13 17.8958V8Z"/><path d="M24 8V4"/><path d="M24 24V16"/><path d="M10 40L13.5 44L17 40L20.5 44L24 40L27.5 44L31 40L34.5 44L38 40"/>' : '<path fill-rule="evenodd" clip-rule="evenodd" d="M6 20.3768L24 14L42 20.3768L36.6667 34H11.3333L6 20.3768Z"/><path d="M13 8H35L34.9976 17.8961L24 14L13 17.8958V8Z"/><path d="M24 8V4"/><path d="M24 24V16"/><path d="M10 40L13.5 44L17 40L20.5 44L24 40L27.5 44L31 40L34.5 44L38 40"/>';

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

module.exports = Ship;
