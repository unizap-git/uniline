'use strict';

var React = require('react');

function RowHeight(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M16 35L10 41L4 35"/><path d="M16 13L10 7L4 13"/><path d="M10 7V41"/><path d="M44 9H22"/><path d="M36 19H22"/><path d="M44 29H22"/><path d="M36 39H22"/>' : '<path d="M16 35L10 41L4 35"/><path d="M16 13L10 7L4 13"/><path d="M10 7V41"/><path d="M44 9H22"/><path d="M36 19H22"/><path d="M44 29H22"/><path d="M36 39H22"/>';

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

module.exports = RowHeight;
