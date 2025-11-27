'use strict';

var React = require('react');

function PayCodeOne(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<rect x="32" y="6" width="10" height="10"/><rect x="32" y="32" width="10" height="10"/><rect x="6" y="32" width="10" height="10"/><rect x="6" y="6" width="10" height="10"/><path d="M8 24L30 24"/><path d="M38 24L40 24"/><path d="M24 37V39"/><path d="M24 17V31"/><path d="M24 8V10"/>' : '<rect x="32" y="6" width="10" height="10"/><rect x="32" y="32" width="10" height="10"/><rect x="6" y="32" width="10" height="10"/><rect x="6" y="6" width="10" height="10"/><path d="M8 24L30 24"/><path d="M38 24L40 24"/><path d="M24 37V39"/><path d="M24 17V31"/><path d="M24 8V10"/>';

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

module.exports = PayCodeOne;
