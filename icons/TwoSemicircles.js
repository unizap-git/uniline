'use strict';

var React = require('react');

function TwoSemicircles(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path fill-rule="evenodd" clip-rule="evenodd" d="M44 25C44 13.9543 35.0457 5 24 5C12.9543 5 4 13.9543 4 25H44Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M14 32C14 37.5228 18.4772 42 24 42C29.5228 42 34 37.5228 34 32H14Z"/>' : '<path fill-rule="evenodd" clip-rule="evenodd" d="M44 25C44 13.9543 35.0457 5 24 5C12.9543 5 4 13.9543 4 25H44Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M14 32C14 37.5228 18.4772 42 24 42C29.5228 42 34 37.5228 34 32H14Z"/>';

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

module.exports = TwoSemicircles;
