'use strict';

var React = require('react');

function LatticePattern(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M6 8H10"/><path d="M14 16H18"/><path d="M16 6V10"/><path d="M8 14V18"/><path d="M22 8H26"/><path d="M30 16H34"/><path d="M32 6V10"/><path d="M24 14V18"/><path d="M38 8H42"/><path d="M40 14V18"/><path d="M6 24H10"/><path d="M14 32H18"/><path d="M16 22V26"/><path d="M8 30V34"/><path d="M22 24H26"/><path d="M30 32H34"/><path d="M32 22V26"/><path d="M24 30V34"/><path d="M38 24H42"/><path d="M40 30V34"/><path d="M6 40H10"/><path d="M16 38V42"/><path d="M22 40H26"/><path d="M32 38V42"/><path d="M38 40H42"/>' : '<path d="M6 8H10"/><path d="M14 16H18"/><path d="M16 6V10"/><path d="M8 14V18"/><path d="M22 8H26"/><path d="M30 16H34"/><path d="M32 6V10"/><path d="M24 14V18"/><path d="M38 8H42"/><path d="M40 14V18"/><path d="M6 24H10"/><path d="M14 32H18"/><path d="M16 22V26"/><path d="M8 30V34"/><path d="M22 24H26"/><path d="M30 32H34"/><path d="M32 22V26"/><path d="M24 30V34"/><path d="M38 24H42"/><path d="M40 30V34"/><path d="M6 40H10"/><path d="M16 38V42"/><path d="M22 40H26"/><path d="M32 38V42"/><path d="M38 40H42"/>';

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

module.exports = LatticePattern;
