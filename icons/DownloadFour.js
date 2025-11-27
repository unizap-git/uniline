'use strict';

var React = require('react');

function DownloadFour(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path fill-rule="evenodd" clip-rule="evenodd" d="M23.9999 29.0001L12 17.0001L19.9999 17.0001L19.9999 6.00011L27.9999 6.00011L27.9999 17.0001L35.9999 17.0001L23.9999 29.0001Z"/><path d="M42 37L6 37"/><path d="M34 44H14"/>' : '<path fill-rule="evenodd" clip-rule="evenodd" d="M23.9999 29.0001L12 17.0001L19.9999 17.0001L19.9999 6.00011L27.9999 6.00011L27.9999 17.0001L35.9999 17.0001L23.9999 29.0001Z"/><path d="M42 37L6 37"/><path d="M34 44H14"/>';

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

module.exports = DownloadFour;
