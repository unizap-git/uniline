'use strict';

var React = require('react');

function RecycleBin(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M16 18L24 4.5L32 18"/><path d="M38 28.5L46 42H30"/><path d="M17.6914 41.6782L2.00006 41.8564L10.0001 28"/><path d="M17 29H30.8217"/>' : '<path d="M16 18L24 4.5L32 18"/><path d="M38 28.5L46 42H30"/><path d="M17.6914 41.6782L2.00006 41.8564L10.0001 28"/><path d="M17 29H30.8217"/>';

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

module.exports = RecycleBin;
