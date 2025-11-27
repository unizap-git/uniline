'use strict';

var React = require('react');

function Vue(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M14.5,3l-2.5,4.2-2.1-4.2H2l10,18L22,3h-7.5ZM4.5,4.5h2.4l5.1,9.3,5.1-9.3h2.4l-7.5,13.5L4.5,4.5Z"/>' : '<polygon points="16.3 7.7 16.6 7.7 24 20.3 31.4 7.7 31.7 7.7 24 21 16.3 7.7"/>   <polygon points="6 7.7 7 7.7 24 37 41 7.7 42 7.7 24 39 6 7.7"/>';

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

module.exports = Vue;
