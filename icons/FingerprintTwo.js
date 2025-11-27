'use strict';

var React = require('react');

function FingerprintTwo(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M19 44V22C19 18.6863 21.6863 16 25 16C28.3137 16 31 18.6863 31 22V44"/><path d="M13 44V22C13 15.3726 18.3726 10 25 10C31.6274 10 37 15.3726 37 22V44"/><path d="M7 44V22C7 12.0589 15.0589 4 25 4C34.9411 4 43 12.0589 43 22V44"/><path d="M25 44V22"/>' : '<path d="M19 44V22C19 18.6863 21.6863 16 25 16C28.3137 16 31 18.6863 31 22V44"/><path d="M13 44V22C13 15.3726 18.3726 10 25 10C31.6274 10 37 15.3726 37 22V44"/><path d="M7 44V22C7 12.0589 15.0589 4 25 4C34.9411 4 43 12.0589 43 22V44"/><path d="M25 44V22"/>';

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

module.exports = FingerprintTwo;
