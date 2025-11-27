'use strict';

var React = require('react');

function Behance(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path fill-rule="evenodd" clip-rule="evenodd" d="M12 24C17 24 20 21.2 20 17C20 12.8 17 10 12 10C7 10 4 10 4 10V24H12Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M13.0312 40C18.5368 40 22 37 22 32C22 27 18.5368 24 13.0312 24H4V40H13.0312Z"/><path d="M29 31H44C44 27 42 22 36 22C31 22 28 26 28 31C28 36 31 40 36 40C41 40 43 37 43 37"/><path d="M42 15H30"/>' : '<path fill-rule="evenodd" clip-rule="evenodd" d="M12 24C17 24 20 21.2 20 17C20 12.8 17 10 12 10C7 10 4 10 4 10V24H12Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M13.0312 40C18.5368 40 22 37 22 32C22 27 18.5368 24 13.0312 24H4V40H13.0312Z"/><path d="M29 31H44C44 27 42 22 36 22C31 22 28 26 28 31C28 36 31 40 36 40C41 40 43 37 43 37"/><path d="M42 15H30"/>';

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

module.exports = Behance;
