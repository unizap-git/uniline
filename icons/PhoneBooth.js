'use strict';

var React = require('react');

function PhoneBooth(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<rect x="14" y="34" width="20" height="9"/><rect x="14" y="4" width="20" height="6"/><path d="M14 10V34"/><path d="M20 10V34"/><path d="M22 16V20"/><path d="M32 26L14 26"/><path d="M34 10V34"/><path d="M4 44H44"/>' : '<rect x="14" y="34" width="20" height="9"/><rect x="14" y="4" width="20" height="6"/><path d="M14 10V34"/><path d="M20 10V34"/><path d="M22 16V20"/><path d="M32 26L14 26"/><path d="M34 10V34"/><path d="M4 44H44"/>';

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

module.exports = PhoneBooth;
