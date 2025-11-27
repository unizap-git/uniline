'use strict';

var React = require('react');

function Robot(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<rect x="9" y="17" width="30" height="26" rx="2"/><path d="M33 9L28 17"/><path d="M15 9L20 17"/><circle cx="34" cy="7" r="2"/><circle cx="14" cy="7" r="2"/><rect x="16" y="24" width="16" height="8" rx="4"/><path d="M9 24H4V34H9"/><path d="M39 24H44V34H39"/>' : '<rect x="9" y="17" width="30" height="26" rx="2"/><path d="M33 9L28 17"/><path d="M15 9L20 17"/><circle cx="34" cy="7" r="2"/><circle cx="14" cy="7" r="2"/><rect x="16" y="24" width="16" height="8" rx="4"/><path d="M9 24H4V34H9"/><path d="M39 24H44V34H39"/>';

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

module.exports = Robot;
