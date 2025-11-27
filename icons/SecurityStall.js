'use strict';

var React = require('react');

function SecurityStall(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<rect x="16" y="29" width="16" height="15"/><rect x="12" y="4" width="24" height="6"/><path d="M16 10V29"/><path d="M32 10V29"/><path d="M4 44H44"/>' : '<rect x="16" y="29" width="16" height="15"/><rect x="12" y="4" width="24" height="6"/><path d="M16 10V29"/><path d="M32 10V29"/><path d="M4 44H44"/>';

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

module.exports = SecurityStall;
