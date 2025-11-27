'use strict';

var React = require('react');

function ListCheckbox(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path fill-rule="evenodd" clip-rule="evenodd" d="M20 24H44H20Z"/><path d="M20 24H44"/><path fill-rule="evenodd" clip-rule="evenodd" d="M20 38H44H20Z"/><path d="M20 38H44"/><path fill-rule="evenodd" clip-rule="evenodd" d="M20 10H44H20Z"/><path d="M20 10H44"/><rect x="4" y="34" width="8" height="8"/><rect x="4" y="20" width="8" height="8"/><rect x="4" y="6" width="8" height="8"/>' : '<path fill-rule="evenodd" clip-rule="evenodd" d="M20 24H44H20Z"/><path d="M20 24H44"/><path fill-rule="evenodd" clip-rule="evenodd" d="M20 38H44H20Z"/><path d="M20 38H44"/><path fill-rule="evenodd" clip-rule="evenodd" d="M20 10H44H20Z"/><path d="M20 10H44"/><rect x="4" y="34" width="8" height="8"/><rect x="4" y="20" width="8" height="8"/><rect x="4" y="6" width="8" height="8"/>';

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

module.exports = ListCheckbox;
