'use strict';

var React = require('react');

function LevelFiveTitle(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M6 8V40"/><path d="M24 8V40"/><path d="M7 24H23"/><path d="M40 21.0093H32V28.0341C32 28 34 27 37 27C40 27 41 29.5339 41 33.5C41 37.4661 40 40 36 40C33 40 32 38 32 36.0078"/>' : '<path d="M6 8V40"/><path d="M24 8V40"/><path d="M7 24H23"/><path d="M40 21.0093H32V28.0341C32 28 34 27 37 27C40 27 41 29.5339 41 33.5C41 37.4661 40 40 36 40C33 40 32 38 32 36.0078"/>';

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

module.exports = LevelFiveTitle;
