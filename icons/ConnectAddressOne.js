'use strict';

var React = require('react');

function ConnectAddressOne(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M6 24C6 33.9411 14.0589 42 24 42C33.9411 42 42 33.9411 42 24"/><path d="M24 14L24 42"/><circle cx="24" cy="10" r="4"/>' : '<path d="M6 24C6 33.9411 14.0589 42 24 42C33.9411 42 42 33.9411 42 24"/><path d="M24 14L24 42"/><circle cx="24" cy="10" r="4"/>';

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

module.exports = ConnectAddressOne;
