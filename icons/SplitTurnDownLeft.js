'use strict';

var React = require('react');

function SplitTurnDownLeft(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M37 21.9999H21C16.5817 21.9999 13 25.5817 13 29.9999V43.9999"/><circle cx="37" cy="8.9436" r="5" transform="rotate(-90 37 8.9436)"/><path d="M37 13.9999V42.9999"/><path d="M42 38.9999L37 43.9999L32 38.9999"/><path d="M18 38.9999L13 43.9999L8 38.9999"/>' : '<path d="M37 21.9999H21C16.5817 21.9999 13 25.5817 13 29.9999V43.9999"/><circle cx="37" cy="8.9436" r="5" transform="rotate(-90 37 8.9436)"/><path d="M37 13.9999V42.9999"/><path d="M42 38.9999L37 43.9999L32 38.9999"/><path d="M18 38.9999L13 43.9999L8 38.9999"/>';

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

module.exports = SplitTurnDownLeft;
