'use strict';

var React = require('react');

function LevelSixTitle(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M6 8V40"/><path d="M24 8V40"/><path d="M7 24H23"/><path d="M36.5 40C39.5376 40 42 37.5376 42 34.5C42 31.4624 39.5376 29 36.5 29C33.4624 29 31 31.4624 31 34.5C31 37.5376 33.4624 40 36.5 40Z"/><path d="M41.5962 24.7392C40.7778 22.5461 38.8044 21 36.5 21C33.4624 21 31 23.6863 31 27V34"/>' : '<path d="M6 8V40"/><path d="M24 8V40"/><path d="M7 24H23"/><path d="M36.5 40C39.5376 40 42 37.5376 42 34.5C42 31.4624 39.5376 29 36.5 29C33.4624 29 31 31.4624 31 34.5C31 37.5376 33.4624 40 36.5 40Z"/><path d="M41.5962 24.7392C40.7778 22.5461 38.8044 21 36.5 21C33.4624 21 31 23.6863 31 27V34"/>';

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

module.exports = LevelSixTitle;
