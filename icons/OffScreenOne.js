'use strict';

var React = require('react');

function OffScreenOne(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M6 6L16 15.8995"/><path d="M6 41.8995L16 32"/><path d="M42.0001 41.8995L32.1006 32"/><path d="M41.8995 6L32 15.8995"/><path d="M32 7V16H41"/><path d="M16 7V16H7"/><path d="M16 41V32H7"/><path d="M32 41V32H40.8995"/>' : '<path d="M6 6L16 15.8995"/><path d="M6 41.8995L16 32"/><path d="M42.0001 41.8995L32.1006 32"/><path d="M41.8995 6L32 15.8995"/><path d="M32 7V16H41"/><path d="M16 7V16H7"/><path d="M16 41V32H7"/><path d="M32 41V32H40.8995"/>';

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

module.exports = OffScreenOne;
