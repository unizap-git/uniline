'use strict';

var React = require('react');

function KeyTwo(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<g clip-path="url(#icon-36aaf67d91d71d5)"><circle cx="15" cy="33" r="8"/><path d="M29 16L36 22"/><path d="M20 26L36 8L43 14"/></g><defs><clipPath id="icon-36aaf67d91d71d5"><rect width="48" height="48"/></clipPath></defs>' : '<g clip-path="url(#icon-5a5fc35d91d71d5)"><circle cx="15" cy="33" r="8"/><path d="M29 16L36 22"/><path d="M20 26L36 8L43 14"/></g><defs><clipPath id="icon-5a5fc35d91d71d5"><rect width="48" height="48"/></clipPath></defs>';

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

module.exports = KeyTwo;
