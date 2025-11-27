'use strict';

var React = require('react');

function TreadmillTwo(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M8 39V44"/><path d="M40 39V44"/><path d="M36 31L42 15L38 9"/><path d="M33 14L43 4"/><rect x="4" y="31" width="40" height="8" rx="4"/>' : '<path d="M8 39V44"/><path d="M40 39V44"/><path d="M36 31L42 15L38 9"/><path d="M33 14L43 4"/><rect x="4" y="31" width="40" height="8" rx="4"/>';

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

module.exports = TreadmillTwo;
