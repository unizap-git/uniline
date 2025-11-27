'use strict';

var React = require('react');

function TreeList(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M38 20H18V28H38V20Z"/><path d="M32 6H18V14H32V6Z"/><path d="M44 34H18V42H44V34Z"/><path d="M17 10H5"/><path d="M17 24H5"/><path d="M17 38H5"/><path d="M5 44V4"/>' : '<path d="M38 20H18V28H38V20Z"/><path d="M32 6H18V14H32V6Z"/><path d="M44 34H18V42H44V34Z"/><path d="M17 10H5"/><path d="M17 24H5"/><path d="M17 38H5"/><path d="M5 44V4"/>';

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

module.exports = TreeList;
