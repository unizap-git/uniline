'use strict';

var React = require('react');

function Magnet(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M6 10V26C6 35.9411 14.0589 44 24 44C33.9411 44 42 35.9411 42 26V10M14 10V26C14 31.5228 18.4772 36 24 36C29.5228 36 34 31.5228 34 26V10"/><path d="M14 4H6V10H14V4Z"/><path d="M34 4H42V10H34V4Z"/>' : '<path d="M6 10V26C6 35.9411 14.0589 44 24 44C33.9411 44 42 35.9411 42 26V10M14 10V26C14 31.5228 18.4772 36 24 36C29.5228 36 34 31.5228 34 26V10"/><path d="M14 4H6V10H14V4Z"/><path d="M34 4H42V10H34V4Z"/>';

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

module.exports = Magnet;
