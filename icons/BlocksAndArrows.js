'use strict';

var React = require('react');

function BlocksAndArrows(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M20 6H6V20H20V6Z"/><path d="M20 28H6V42H20V28Z"/><path d="M42 6H28V20H42V6Z"/><path d="M28 28L42 42M28 28H42H28ZM28 28V42V28Z"/>' : '<path d="M20 6H6V20H20V6Z"/><path d="M20 28H6V42H20V28Z"/><path d="M42 6H28V20H42V6Z"/><path d="M28 28L42 42M28 28H42H28ZM28 28V42V28Z"/>';

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

module.exports = BlocksAndArrows;
