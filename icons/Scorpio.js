'use strict';

var React = require('react');

function Scorpio(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M16 12C16 8.68629 13.3137 6 10 6C6.68629 6 4 8.68629 4 12"/><path d="M28 12C28 8.68629 25.3137 6 22 6C18.6863 6 16 8.68629 16 12"/><path d="M40 34C40 37.3137 37.3137 40 34 40C30.6863 40 28 37.3137 28 34"/><path d="M4 12V30"/><path d="M16 12V30"/><path d="M28 12V34"/><path d="M40 23V34"/><path d="M36 27L40 23L44 27"/>' : '<path d="M16 12C16 8.68629 13.3137 6 10 6C6.68629 6 4 8.68629 4 12"/><path d="M28 12C28 8.68629 25.3137 6 22 6C18.6863 6 16 8.68629 16 12"/><path d="M40 34C40 37.3137 37.3137 40 34 40C30.6863 40 28 37.3137 28 34"/><path d="M4 12V30"/><path d="M16 12V30"/><path d="M28 12V34"/><path d="M40 23V34"/><path d="M36 27L40 23L44 27"/>';

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

module.exports = Scorpio;
