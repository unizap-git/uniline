'use strict';

var React = require('react');

function Sickbed(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M4 23L40 35"/><circle cx="12" cy="16" r="3"/><path d="M29 36L29.0001 31.5L19 28V36H29Z"/><path d="M18 27.5L23 14L41.3744 20.9998C42.8515 21.5625 43.6385 23.1747 43.1737 24.6855L40 35"/>' : '<path d="M4 23L40 35"/><circle cx="12" cy="16" r="3"/><path d="M29 36L29.0001 31.5L19 28V36H29Z"/><path d="M18 27.5L23 14L41.3744 20.9998C42.8515 21.5625 43.6385 23.1747 43.1737 24.6855L40 35"/>';

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

module.exports = Sickbed;
