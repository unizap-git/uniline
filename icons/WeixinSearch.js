'use strict';

var React = require('react');

function WeixinSearch(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M6 16L12.5 17.5"/><path d="M8 42L14 24"/><path d="M38 42L21 24"/><path d="M42 16L22.5 17.5"/><path d="M20 6L18 13"/>' : '<path d="M6 16L12.5 17.5"/><path d="M8 42L14 24"/><path d="M38 42L21 24"/><path d="M42 16L22.5 17.5"/><path d="M20 6L18 13"/>';

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

module.exports = WeixinSearch;
