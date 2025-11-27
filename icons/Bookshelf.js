'use strict';

var React = require('react');

function Bookshelf(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M5 6H39C39 6 43 8 43 13C43 18 39 20 39 20H5C5 20 9 18 9 13C9 8 5 6 5 6Z"/><path d="M43 28H9C9 28 5 30 5 35C5 40 9 42 9 42H43C43 42 39 40 39 35C39 30 43 28 43 28Z"/>' : '<path d="M5 6H39C39 6 43 8 43 13C43 18 39 20 39 20H5C5 20 9 18 9 13C9 8 5 6 5 6Z"/><path d="M43 28H9C9 28 5 30 5 35C5 40 9 42 9 42H43C43 42 39 40 39 35C39 30 43 28 43 28Z"/>';

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

module.exports = Bookshelf;
