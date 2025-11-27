'use strict';

var React = require('react');

function BachelorCapOne(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M5 16L24 6L43 16L24 26L5 16Z"/><path d="M11 20V34.464C11 35.9282 12.0551 37.1872 13.4711 37.5594C15.6758 38.139 19.0564 39.2194 22.3562 41.0292C23.3775 41.5893 24.6225 41.5893 25.6438 41.0292C28.9436 39.2194 32.3242 38.139 34.5289 37.5594C35.9449 37.1872 37 35.9282 37 34.464V20"/><path d="M43 16L43 32"/>' : '<path d="M5 16L24 6L43 16L24 26L5 16Z"/><path d="M11 20V34.464C11 35.9282 12.0551 37.1872 13.4711 37.5594C15.6758 38.139 19.0564 39.2194 22.3562 41.0292C23.3775 41.5893 24.6225 41.5893 25.6438 41.0292C28.9436 39.2194 32.3242 38.139 34.5289 37.5594C35.9449 37.1872 37 35.9282 37 34.464V20"/><path d="M43 16L43 32"/>';

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

module.exports = BachelorCapOne;
