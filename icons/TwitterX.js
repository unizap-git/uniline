'use strict';

var React = require('react');

function TwitterX(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path fill-rule="evenodd" clip-rule="evenodd" d="M0.396 0.477A0.188 0.188 0 0 1 0.563 0.375h0.938a0.188 0.188 0 0 1 0.152 0.078l0.893 1.237 1.26 -1.26a0.188 0.188 0 1 1 0.265 0.265l-1.302 1.302 1.322 1.83A0.188 0.188 0 0 1 3.938 4.125h-0.938a0.188 0.188 0 0 1 -0.152 -0.078l-0.893 -1.237 -1.26 1.26a0.188 0.188 0 0 1 -0.265 -0.265l1.302 -1.302 -1.322 -1.83a0.188 0.188 0 0 1 -0.015 -0.195"/>' : '<path d="M3,21l7.5-7.5M21,3l-7.5,7.5M13.5,10.5l-5.5-7.5H3l7.5,10.5M13.5,10.6l7.6,10.4h-5l-5.5-7.5"/>';

  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
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

module.exports = TwitterX;
