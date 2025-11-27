'use strict';

var React = require('react');

function ListFail(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M20 10H44"/><path d="M20 24H44"/><path d="M20 38H44"/><path d="M5 7L11 13M11 7L5 13"/><circle cx="8" cy="24" r="4"/><circle cx="8" cy="38" r="4"/>' : '<path d="M20 10H44"/><path d="M20 24H44"/><path d="M20 38H44"/><path d="M5 7L11 13M11 7L5 13"/><circle cx="8" cy="24" r="4"/><circle cx="8" cy="38" r="4"/>';

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

module.exports = ListFail;
