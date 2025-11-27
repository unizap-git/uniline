'use strict';

var React = require('react');

function Escalators(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M35 13L13 35H4V44H13L35 22H44V13H35Z"/><path d="M19 13L28 4"/><path d="M22 4H28V10"/><path d="M14 18L5 27"/><path d="M11 27H5V21"/>' : '<path d="M35 13L13 35H4V44H13L35 22H44V13H35Z"/><path d="M19 13L28 4"/><path d="M22 4H28V10"/><path d="M14 18L5 27"/><path d="M11 27H5V21"/>';

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

module.exports = Escalators;
