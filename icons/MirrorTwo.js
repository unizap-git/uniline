'use strict';

var React = require('react');

function MirrorTwo(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<circle cx="24" cy="17" r="13"/><path d="M42 17C42 26.9411 33.9411 35 24 35C14.0589 35 6 26.9411 6 17"/><path d="M42 17H38"/><path d="M10 17H6"/><path d="M30 44H18"/><path d="M24 44V36"/>' : '<circle cx="24" cy="17" r="13"/><path d="M42 17C42 26.9411 33.9411 35 24 35C14.0589 35 6 26.9411 6 17"/><path d="M42 17H38"/><path d="M10 17H6"/><path d="M30 44H18"/><path d="M24 44V36"/>';

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

module.exports = MirrorTwo;
