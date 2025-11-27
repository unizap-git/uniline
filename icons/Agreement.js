'use strict';

var React = require('react');

function Agreement(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<rect x="8" y="4" width="32" height="40" rx="2"/><path d="M16 4H25V20L20.5 16L16 20V4Z"/><path d="M16 28H26"/><path d="M16 34H32"/>' : '<rect x="8" y="4" width="32" height="40" rx="2"/><path d="M16 4H25V20L20.5 16L16 20V4Z"/><path d="M16 28H26"/><path d="M16 34H32"/>';

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

module.exports = Agreement;
