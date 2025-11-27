'use strict';

var React = require('react');

function MuseumTwo(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M4 44H44"/><path d="M8 7.27273C8 7.27273 15 4 24 4C33 4 40 7.27273 40 7.27273V13H8V7.27273Z"/><path d="M10 13V38"/><path d="M17 13V38"/><path d="M24 13V38"/><path d="M31 13V38"/><path d="M38 13V38"/><rect x="7" y="38" width="34" height="6"/>' : '<path d="M4 44H44"/><path d="M8 7.27273C8 7.27273 15 4 24 4C33 4 40 7.27273 40 7.27273V13H8V7.27273Z"/><path d="M10 13V38"/><path d="M17 13V38"/><path d="M24 13V38"/><path d="M31 13V38"/><path d="M38 13V38"/><rect x="7" y="38" width="34" height="6"/>';

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

module.exports = MuseumTwo;
