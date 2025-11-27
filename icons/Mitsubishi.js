'use strict';

var React = require('react');

function Mitsubishi(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M17 19L24 30L31 19L24 8L17 19Z"/><path d="M30.6667 40L24 30H37.3333L44 40H30.6667Z"/><path d="M17.3333 40L24 30H10.6667L4 40H17.3333Z"/>' : '<path d="M17 19L24 30L31 19L24 8L17 19Z"/><path d="M30.6667 40L24 30H37.3333L44 40H30.6667Z"/><path d="M17.3333 40L24 30H10.6667L4 40H17.3333Z"/>';

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

module.exports = Mitsubishi;
