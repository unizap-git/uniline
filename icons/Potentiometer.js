'use strict';

var React = require('react');

function Potentiometer(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<ellipse cx="24" cy="20" rx="20" ry="8"/><path d="M24 4V19"/><path d="M16 34V42"/><path d="M24 34V44"/><path d="M32 34V42"/><path d="M4 20V32.3636C4 32.3636 5.11012 34.7605 8.5 37.0288"/><path d="M44 20V32.3636C44 32.3636 42.8899 34.7605 39.5 37.0288"/>' : '<ellipse cx="24" cy="20" rx="20" ry="8"/><path d="M24 4V19"/><path d="M16 34V42"/><path d="M24 34V44"/><path d="M32 34V42"/><path d="M4 20V32.3636C4 32.3636 5.11012 34.7605 8.5 37.0288"/><path d="M44 20V32.3636C44 32.3636 42.8899 34.7605 39.5 37.0288"/>';

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

module.exports = Potentiometer;
