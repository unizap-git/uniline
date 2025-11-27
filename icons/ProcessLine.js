'use strict';

var React = require('react');

function ProcessLine(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M4 40H14"/><path d="M4 32H24"/><path d="M22 40H27"/><path d="M37 40H44"/><path d="M35 32H44"/><path d="M32 24H44"/><path d="M16 24H22"/><path d="M4 24H6"/><path d="M4 16H8"/><path d="M4 8H11L19 16H44"/><path d="M22 8H44"/>' : '<path d="M4 40H14"/><path d="M4 32H24"/><path d="M22 40H27"/><path d="M37 40H44"/><path d="M35 32H44"/><path d="M32 24H44"/><path d="M16 24H22"/><path d="M4 24H6"/><path d="M4 16H8"/><path d="M4 8H11L19 16H44"/><path d="M22 8H44"/>';

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

module.exports = ProcessLine;
