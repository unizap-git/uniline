'use strict';

var React = require('react');

function Swipe(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M6 15L19.3714 25.5377C20.5 26.5 22.8282 28 25 26C27.2893 23.8918 25.5 21.5 25 21L17 15"/><path d="M4 8H27L38 18"/><path d="M9 33L44 33.0193"/><path d="M9 18V40H44V18H22.0002"/>' : '<path d="M6 15L19.3714 25.5377C20.5 26.5 22.8282 28 25 26C27.2893 23.8918 25.5 21.5 25 21L17 15"/><path d="M4 8H27L38 18"/><path d="M9 33L44 33.0193"/><path d="M9 18V40H44V18H22.0002"/>';

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

module.exports = Swipe;
