'use strict';

var React = require('react');

function Rocket(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M18.705 7.89449L24 4L29.295 7.89449C32.8819 10.5327 35 14.7198 35 19.1725V37H13V19.1725C13 14.7198 15.1181 10.5327 18.705 7.89449Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M13 17L7 23V31L13 28V17Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M35 17L41 23V31L35 28V17Z"/><path d="M18 39V42"/><path d="M24 39V44"/><path d="M30 39V42"/>' : '<path d="M18.705 7.89449L24 4L29.295 7.89449C32.8819 10.5327 35 14.7198 35 19.1725V37H13V19.1725C13 14.7198 15.1181 10.5327 18.705 7.89449Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M13 17L7 23V31L13 28V17Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M35 17L41 23V31L35 28V17Z"/><path d="M18 39V42"/><path d="M24 39V44"/><path d="M30 39V42"/>';

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

module.exports = Rocket;
