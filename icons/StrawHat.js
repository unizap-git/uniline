'use strict';

var React = require('react');

function StrawHat(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M34 22C34 16.4772 29.5228 12 24 12C18.4772 12 14 16.4772 14 22"/><path d="M14 23C8.02199 24.2044 4 26.4557 4 29.034C4 32.8812 12.9543 36 24 36C35.0457 36 44 32.8812 44 29.034C44 26.4557 39.978 24.2044 34 23"/><path d="M14 22C15 22.8333 18 26 24 26C30 26 33 23 34 22"/><path d="M19 25L21 20"/>' : '<path d="M34 22C34 16.4772 29.5228 12 24 12C18.4772 12 14 16.4772 14 22"/><path d="M14 23C8.02199 24.2044 4 26.4557 4 29.034C4 32.8812 12.9543 36 24 36C35.0457 36 44 32.8812 44 29.034C44 26.4557 39.978 24.2044 34 23"/><path d="M14 22C15 22.8333 18 26 24 26C30 26 33 23 34 22"/><path d="M19 25L21 20"/>';

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

module.exports = StrawHat;
