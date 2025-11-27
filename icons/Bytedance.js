'use strict';

var React = require('react');

function Bytedance(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M5 7L10 9V37L5 39V7Z"/><path d="M16 23L21 25V37L16 39V23Z"/><path d="M27 21L32 19V35L27 33V21Z"/><path d="M38 9L43 11V37L38 39V9Z"/>' : '<path d="M5 7L10 9V37L5 39V7Z"/><path d="M16 23L21 25V37L16 39V23Z"/><path d="M27 21L32 19V35L27 33V21Z"/><path d="M38 9L43 11V37L38 39V9Z"/>';

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

module.exports = Bytedance;
