'use strict';

var React = require('react');

function FoundationMakeup(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M13 19C13 17.8954 13.8954 17 15 17H31C32.1046 17 33 17.8954 33 19V38C33 38 33 44 27 44C21 44 25 44 19 44C13 44 13 38 13 38V19Z"/><rect x="18" y="12" width="10" height="5"/><path d="M18 12C18 10 18.0001 12 18 9C17.9999 6 21 4 24 4C27 4 35 4 35 4C35 4 28.0001 6 28 10C27.9999 14 28 12 28 12"/>' : '<path d="M13 19C13 17.8954 13.8954 17 15 17H31C32.1046 17 33 17.8954 33 19V38C33 38 33 44 27 44C21 44 25 44 19 44C13 44 13 38 13 38V19Z"/><rect x="18" y="12" width="10" height="5"/><path d="M18 12C18 10 18.0001 12 18 9C17.9999 6 21 4 24 4C27 4 35 4 35 4C35 4 28.0001 6 28 10C27.9999 14 28 12 28 12"/>';

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

module.exports = FoundationMakeup;
