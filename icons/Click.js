'use strict';

var React = require('react');

function Click(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M24 4V12"/><path fill-rule="evenodd" clip-rule="evenodd" d="M22 22L42 26L36 30L42 36L36 42L30 36L26 42L22 22Z"/><path d="M38.1421 9.85789L32.4853 15.5147"/><path d="M9.85787 38.1421L15.5147 32.4853"/><path d="M4 24H12"/><path d="M9.85795 9.85787L15.5148 15.5147"/>' : '<path d="M24 4V12"/><path fill-rule="evenodd" clip-rule="evenodd" d="M22 22L42 26L36 30L42 36L36 42L30 36L26 42L22 22Z"/><path d="M38.1421 9.85789L32.4853 15.5147"/><path d="M9.85787 38.1421L15.5147 32.4853"/><path d="M4 24H12"/><path d="M9.85795 9.85787L15.5148 15.5147"/>';

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

module.exports = Click;
