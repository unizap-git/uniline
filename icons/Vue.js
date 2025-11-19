'use strict';

var React = require('react');

function Vue(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M14.5 3 12 7.156 9.857 3H2l10 18L22 3h-7.5ZM4.486 4.5h2.4L12 13.8l5.107-9.3h2.4L12 18.021 4.486 4.5Z"/>' : '<polygon points="8.9 5 9 5 12 10.1 15 5 15.1 5 12 10.4 8.9 5"/>   <polygon points="4.7 5 5.1 5 12 16.9 18.9 5 19.3 5 12 17.7 4.7 5"/>';

  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
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
