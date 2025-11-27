'use strict';

var React = require('react');

function GameConsole(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<rect x="10" y="4" width="28" height="40" rx="2"/><path d="M16 34H24"/><path d="M20 30V38"/><rect x="16" y="10" width="16" height="9"/><circle cx="31" cy="30" r="2"/><circle cx="31" cy="38" r="2"/>' : '<rect x="10" y="4" width="28" height="40" rx="2"/><path d="M16 34H24"/><path d="M20 30V38"/><rect x="16" y="10" width="16" height="9"/><circle cx="31" cy="30" r="2"/><circle cx="31" cy="38" r="2"/>';

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

module.exports = GameConsole;
