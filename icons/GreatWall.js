'use strict';

var React = require('react');

function GreatWall(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M4 9V40H44V9H36V16H28V9H20V16H12V9H4Z"/><path d="M4 24H44"/><path d="M4 32H44"/><path d="M24 24V32"/><path d="M16 32V40"/><path d="M16 16V24"/><path d="M32 32V40"/><path d="M32 16V24"/>' : '<path d="M4 9V40H44V9H36V16H28V9H20V16H12V9H4Z"/><path d="M4 24H44"/><path d="M4 32H44"/><path d="M24 24V32"/><path d="M16 32V40"/><path d="M16 16V24"/><path d="M32 32V40"/><path d="M32 16V24"/>';

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

module.exports = GreatWall;
