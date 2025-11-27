'use strict';

var React = require('react');

function CastScreen(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M21 39C21 30.1634 13.8366 23 5 23"/><path d="M13 39C13 34.5817 9.41828 31 5 31"/><path fill-rule="evenodd" clip-rule="evenodd" d="M5.5 41C6.88071 41 8 39.8807 8 38.5C8 37.1193 6.88071 36 5.5 36C4.11929 36 3 37.1193 3 38.5C3 39.8807 4.11929 41 5.5 41Z"/><path d="M4 16.0566V8H44V40H28.7712"/>' : '<path d="M21 39C21 30.1634 13.8366 23 5 23"/><path d="M13 39C13 34.5817 9.41828 31 5 31"/><path fill-rule="evenodd" clip-rule="evenodd" d="M5.5 41C6.88071 41 8 39.8807 8 38.5C8 37.1193 6.88071 36 5.5 36C4.11929 36 3 37.1193 3 38.5C3 39.8807 4.11929 41 5.5 41Z"/><path d="M4 16.0566V8H44V40H28.7712"/>';

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

module.exports = CastScreen;
