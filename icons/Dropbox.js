'use strict';

var React = require('react');

function Dropbox(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<g clip-path="url(#icon-afd87b978df3014)"><path d="M24 10L12 18L24 26L36 18L24 10Z"/><path d="M24 10L36 18L41 11L30 4L24 10Z"/><path d="M24 10L12 18L7 11L18 4L24 10Z"/><path d="M43 22L36 18L24 26L31 31L43 22Z"/><path d="M5 22L12 18L24 26L17 31L5 22Z"/><path d="M36 28V37L24 44L12 37V28"/></g><defs><clipPath id="icon-afd87b978df3014"><rect width="48" height="48"/></clipPath></defs>' : '<g clip-path="url(#icon-4663bea378df3014)"><path d="M24 10L12 18L24 26L36 18L24 10Z"/><path d="M24 10L36 18L41 11L30 4L24 10Z"/><path d="M24 10L12 18L7 11L18 4L24 10Z"/><path d="M43 22L36 18L24 26L31 31L43 22Z"/><path d="M5 22L12 18L24 26L17 31L5 22Z"/><path d="M36 28V37L24 44L12 37V28"/></g><defs><clipPath id="icon-4663bea378df3014"><rect width="48" height="48"/></clipPath></defs>';

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

module.exports = Dropbox;
