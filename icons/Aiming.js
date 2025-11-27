'use strict';

var React = require('react');

function Aiming(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<circle cx="24" cy="24" r="20"/><path fill-rule="evenodd" clip-rule="evenodd" d="M24 37V44V37Z"/><path d="M24 37V44"/><path fill-rule="evenodd" clip-rule="evenodd" d="M36 24H44H36Z"/><path d="M36 24H44"/><path fill-rule="evenodd" clip-rule="evenodd" d="M4 24H11H4Z"/><path d="M4 24H11"/><path fill-rule="evenodd" clip-rule="evenodd" d="M24 11V4V11Z"/><path d="M24 11V4"/>' : '<circle cx="24" cy="24" r="20"/><path fill-rule="evenodd" clip-rule="evenodd" d="M24 37V44V37Z"/><path d="M24 37V44"/><path fill-rule="evenodd" clip-rule="evenodd" d="M36 24H44H36Z"/><path d="M36 24H44"/><path fill-rule="evenodd" clip-rule="evenodd" d="M4 24H11H4Z"/><path d="M4 24H11"/><path fill-rule="evenodd" clip-rule="evenodd" d="M24 11V4V11Z"/><path d="M24 11V4"/>';

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

module.exports = Aiming;
