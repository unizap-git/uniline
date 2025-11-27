'use strict';

var React = require('react');

function Landing(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M5 43L43 43"/><path d="M4 25V14.9901C5.21558 14.9901 8.81818 19.1686 10 21L21 23V5L25 7L30.8312 25.9783L40 28C44 29 44 31.5004 44 31.9998C44 35 40.5 35 40 35C36 35 4 25 4 25Z"/>' : '<path d="M5 43L43 43"/><path d="M4 25V14.9901C5.21558 14.9901 8.81818 19.1686 10 21L21 23V5L25 7L30.8312 25.9783L40 28C44 29 44 31.5004 44 31.9998C44 35 40.5 35 40 35C36 35 4 25 4 25Z"/>';

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

module.exports = Landing;
