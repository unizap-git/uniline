'use strict';

var React = require('react');

function KeyOne(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<g clip-path="url(#icon-6bc45f37770af78)"><circle cx="15" cy="33" r="8"/><path d="M29 16L35.5 22"/><path d="M20 26L37 7"/><path d="M35 11L42 17.5"/></g><defs><clipPath id="icon-6bc45f37770af78"><rect width="48" height="48"/></clipPath></defs>' : '<g clip-path="url(#icon-73f843c7770af78)"><circle cx="15" cy="33" r="8"/><path d="M29 16L35.5 22"/><path d="M20 26L37 7"/><path d="M35 11L42 17.5"/></g><defs><clipPath id="icon-73f843c7770af78"><rect width="48" height="48"/></clipPath></defs>';

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

module.exports = KeyOne;
