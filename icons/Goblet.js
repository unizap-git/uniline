'use strict';

var React = require('react');

function Goblet(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M33 44H23H13"/><path d="M23 28V44"/><path d="M35 16C35 22.5 29.6274 28 23 28C16.3726 28 11 22.6274 11 16C11 9.5 15 4 15 4H31C31 4 35 9.5 35 16Z"/>' : '<path d="M33 44H23H13"/><path d="M23 28V44"/><path d="M35 16C35 22.5 29.6274 28 23 28C16.3726 28 11 22.6274 11 16C11 9.5 15 4 15 4H31C31 4 35 9.5 35 16Z"/>';

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

module.exports = Goblet;
