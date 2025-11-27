'use strict';

var React = require('react');

function ListAlphabet(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M20 9H42"/><path d="M20 19H42"/><path d="M20 29H42"/><path d="M20 39H42"/><path d="M6 29H12L6 39H12"/><path d="M11 8.9999L7 9L6.3 16H11.7L11 8.9999Z"/><path d="M6 19L6.3 16M12 19L11.7 16M11.7 16L11 8.9999L7 9L6.3 16M11.7 16H6.3"/>' : '<path d="M20 9H42"/><path d="M20 19H42"/><path d="M20 29H42"/><path d="M20 39H42"/><path d="M6 29H12L6 39H12"/><path d="M11 8.9999L7 9L6.3 16H11.7L11 8.9999Z"/><path d="M6 19L6.3 16M12 19L11.7 16M11.7 16L11 8.9999L7 9L6.3 16M11.7 16H6.3"/>';

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

module.exports = ListAlphabet;
