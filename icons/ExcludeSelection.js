'use strict';

var React = require('react');

function ExcludeSelection(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<rect x="16" y="16" width="27" height="27" rx="2"/><rect x="5" y="5" width="27" height="27" rx="2"/><path d="M25.0005 32L16.0005 41"/><path d="M41.0005 16L32.0005 25"/><path d="M16.0005 23L7.00049 32"/><path d="M32.0005 7L23.0005 16"/><path d="M43.0005 24L24.0005 43"/><path d="M24.0005 5L5.00049 24"/><path d="M43.0005 34L34.0005 43"/><path d="M14 5L5 14"/>' : '<rect x="16" y="16" width="27" height="27" rx="2"/><rect x="5" y="5" width="27" height="27" rx="2"/><path d="M25.0005 32L16.0005 41"/><path d="M41.0005 16L32.0005 25"/><path d="M16.0005 23L7.00049 32"/><path d="M32.0005 7L23.0005 16"/><path d="M43.0005 24L24.0005 43"/><path d="M24.0005 5L5.00049 24"/><path d="M43.0005 34L34.0005 43"/><path d="M14 5L5 14"/>';

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

module.exports = ExcludeSelection;
