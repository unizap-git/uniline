'use strict';

var React = require('react');

function STurnUp(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M24 31L24 35C24 39 21 42 17 42C13 42 10 39 10 35L10 16"/><path d="M38 42L38 13C38 8.99999 35 5.99999 31 5.99999C27 5.99999 24 8.99999 24 13L24 31"/><path d="M33 37L38 42L43 37"/><circle cx="10" cy="10.9999" r="5" transform="rotate(-180 10 10.9999)"/>' : '<path d="M24 31L24 35C24 39 21 42 17 42C13 42 10 39 10 35L10 16"/><path d="M38 42L38 13C38 8.99999 35 5.99999 31 5.99999C27 5.99999 24 8.99999 24 13L24 31"/><path d="M33 37L38 42L43 37"/><circle cx="10" cy="10.9999" r="5" transform="rotate(-180 10 10.9999)"/>';

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

module.exports = STurnUp;
