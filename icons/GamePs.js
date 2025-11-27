'use strict';

var React = require('react');

function GamePs(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M44 28H28V44H44V28Z"/><path d="M13 4L22 20H4L13 4Z"/><path d="M36 20C40.4183 20 44 16.4183 44 12C44 7.58172 40.4183 4 36 4C31.5817 4 28 7.58172 28 12C28 16.4183 31.5817 20 36 20Z"/><path d="M4 28L20 44"/><path d="M20 28L4 44"/>' : '<path d="M44 28H28V44H44V28Z"/><path d="M13 4L22 20H4L13 4Z"/><path d="M36 20C40.4183 20 44 16.4183 44 12C44 7.58172 40.4183 4 36 4C31.5817 4 28 7.58172 28 12C28 16.4183 31.5817 20 36 20Z"/><path d="M4 28L20 44"/><path d="M20 28L4 44"/>';

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

module.exports = GamePs;
