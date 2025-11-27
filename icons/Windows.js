'use strict';

var React = require('react');

function Windows(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M6.75 11.0625L19.6875 9.33752V21.4125H6.75V11.0625Z"/><path d="M24.8623 8.84464L41.2498 6.75V21.4125H24.8623V8.84464Z"/><path d="M24.8623 27.45L41.2498 27.8333V41.25L24.8623 38.5666V27.45Z"/><path d="M6.75 26.5875L19.6875 26.899V37.8L6.75 35.6198V26.5875Z"/>' : '<path d="M6.75 11.0625L19.6875 9.33752V21.4125H6.75V11.0625Z"/><path d="M24.8623 8.84464L41.2498 6.75V21.4125H24.8623V8.84464Z"/><path d="M24.8623 27.45L41.2498 27.8333V41.25L24.8623 38.5666V27.45Z"/><path d="M6.75 26.5875L19.6875 26.899V37.8L6.75 35.6198V26.5875Z"/>';

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

module.exports = Windows;
