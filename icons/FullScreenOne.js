'use strict';

var React = require('react');

function FullScreenOne(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M6 6L16 15.8995"/><path d="M6 41.8995L16 32"/><path d="M42.0001 41.8995L32.1006 32"/><path d="M41.8995 6L32 15.8995"/><path d="M33 6H42V15"/><path d="M42 33V42H33"/><path d="M15 42H6V33"/><path d="M6 15V6H15"/>' : '<path d="M6 6L16 15.8995"/><path d="M6 41.8995L16 32"/><path d="M42.0001 41.8995L32.1006 32"/><path d="M41.8995 6L32 15.8995"/><path d="M33 6H42V15"/><path d="M42 33V42H33"/><path d="M15 42H6V33"/><path d="M6 15V6H15"/>';

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

module.exports = FullScreenOne;
