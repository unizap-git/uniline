'use strict';

var React = require('react');

function GameConsoleOne(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<rect x="10" y="4" width="28" height="40" rx="2"/><rect x="16" y="12" width="16" height="10"/><path d="M16 32L24 32"/><path d="M20 36V28"/><rect x="27" y="33" width="4" height="4" rx="2"/><rect x="30" y="26" width="4" height="4" rx="2"/>' : '<rect x="10" y="4" width="28" height="40" rx="2"/><rect x="16" y="12" width="16" height="10"/><path d="M16 32L24 32"/><path d="M20 36V28"/><rect x="27" y="33" width="4" height="4" rx="2"/><rect x="30" y="26" width="4" height="4" rx="2"/>';

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

module.exports = GameConsoleOne;
