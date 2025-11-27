'use strict';

var React = require('react');

function MouseZodiac(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M19 35H4C4 27 9 17 14 17L16 26"/><path d="M28 35.0001C28 30 30 26.9893 37 27"/><path d="M44 28.5374C45 33.511 42 34.9999 40 33.9999C38 32.9999 38.5 28.0004 37 24C33.8599 15.6254 22 13.9997 15 21.0003"/>' : '<path d="M19 35H4C4 27 9 17 14 17L16 26"/><path d="M28 35.0001C28 30 30 26.9893 37 27"/><path d="M44 28.5374C45 33.511 42 34.9999 40 33.9999C38 32.9999 38.5 28.0004 37 24C33.8599 15.6254 22 13.9997 15 21.0003"/>';

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

module.exports = MouseZodiac;
