'use strict';

var React = require('react');

function EmailSecurity(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M44 24V9H24H4V24V39H24"/><path d="M30 30C30 29 35 27 35 27C35 27 40 29 40 30C40 38 35 40 35 40C35 40 30 38 30 30Z"/><path d="M4 9L24 24L44 9"/>' : '<path d="M44 24V9H24H4V24V39H24"/><path d="M30 30C30 29 35 27 35 27C35 27 40 29 40 30C40 38 35 40 35 40C35 40 30 38 30 30Z"/><path d="M4 9L24 24L44 9"/>';

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

module.exports = EmailSecurity;
