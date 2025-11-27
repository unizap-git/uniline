'use strict';

var React = require('react');

function LowerBranch(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M6 23C6 21.5 7.99903 17.5 13.0614 16.4286C18.1786 15.3455 22.8477 10.8571 24 9"/><path d="M41.9999 23C42.0118 21.5 40.0009 17.5 34.9385 16.4286C29.8213 15.3455 25.1522 10.8571 24 9"/><circle r="4" transform="matrix(-4.37114e-08 1 1 4.37114e-08 24 9)"/><path d="M24 9L24 23"/><path d="M5 33H11"/><path d="M5 41H11"/><path d="M37 33H43"/><path d="M37 41H43"/><path d="M21 33H27"/><path d="M21 41H27"/>' : '<path d="M6 23C6 21.5 7.99903 17.5 13.0614 16.4286C18.1786 15.3455 22.8477 10.8571 24 9"/><path d="M41.9999 23C42.0118 21.5 40.0009 17.5 34.9385 16.4286C29.8213 15.3455 25.1522 10.8571 24 9"/><circle r="4" transform="matrix(-4.37114e-08 1 1 4.37114e-08 24 9)"/><path d="M24 9L24 23"/><path d="M5 33H11"/><path d="M5 41H11"/><path d="M37 33H43"/><path d="M37 41H43"/><path d="M21 33H27"/><path d="M21 41H27"/>';

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

module.exports = LowerBranch;
