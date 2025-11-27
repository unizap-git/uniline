'use strict';

var React = require('react');

function GlassesThree(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<circle cx="12" cy="33" r="7"/><path d="M29 33C29 29.6863 27.5 27 24 27C20.5 27 19 29.6863 19 33"/><circle cx="36" cy="33" r="7"/><path d="M14 8H12C8.68629 8 6 10.6863 6 14V22"/><path d="M34 8H36C39.3137 8 42 10.6863 42 14V22"/>' : '<circle cx="12" cy="33" r="7"/><path d="M29 33C29 29.6863 27.5 27 24 27C20.5 27 19 29.6863 19 33"/><circle cx="36" cy="33" r="7"/><path d="M14 8H12C8.68629 8 6 10.6863 6 14V22"/><path d="M34 8H36C39.3137 8 42 10.6863 42 14V22"/>';

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

module.exports = GlassesThree;
