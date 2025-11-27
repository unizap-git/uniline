'use strict';

var React = require('react');

function Luminous(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M24 16V26"/><path d="M38.1421 21.8579L31.1421 28.8579"/><path d="M44 36H34"/><path d="M4 36H14"/><path d="M9.85791 21.8579L16.8579 28.8579"/><path d="M22 36H26"/>' : '<path d="M24 16V26"/><path d="M38.1421 21.8579L31.1421 28.8579"/><path d="M44 36H34"/><path d="M4 36H14"/><path d="M9.85791 21.8579L16.8579 28.8579"/><path d="M22 36H26"/>';

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

module.exports = Luminous;
