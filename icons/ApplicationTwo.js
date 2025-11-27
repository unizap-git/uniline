'use strict';

var React = require('react');

function ApplicationTwo(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<circle cx="34.5" cy="13.5" r="6.5"/><circle cx="34.5" cy="34.5" r="6.5"/><circle cx="13.5" cy="13.5" r="6.5"/><circle cx="13.5" cy="34.5" r="6.5"/>' : '<circle cx="34.5" cy="13.5" r="6.5"/><circle cx="34.5" cy="34.5" r="6.5"/><circle cx="13.5" cy="13.5" r="6.5"/><circle cx="13.5" cy="34.5" r="6.5"/>';

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

module.exports = ApplicationTwo;
