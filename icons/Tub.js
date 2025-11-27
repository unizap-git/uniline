'use strict';

var React = require('react');

function Tub(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M40 23V12C40 8.13401 36.866 5 33 5V5C29.134 5 26 8.13401 26 12V13"/><path d="M40 29V23H8V29C8 33.4183 11.5817 37 16 37H32C36.4183 37 40 33.4183 40 29Z"/><path d="M43 23H5"/><path d="M17 37L13 43"/><path d="M31 37L35 43"/>' : '<path d="M40 23V12C40 8.13401 36.866 5 33 5V5C29.134 5 26 8.13401 26 12V13"/><path d="M40 29V23H8V29C8 33.4183 11.5817 37 16 37H32C36.4183 37 40 33.4183 40 29Z"/><path d="M43 23H5"/><path d="M17 37L13 43"/><path d="M31 37L35 43"/>';

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

module.exports = Tub;
