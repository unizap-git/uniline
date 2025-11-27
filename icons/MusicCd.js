'use strict';

var React = require('react');

function MusicCd(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"/><path d="M26 14V28"/><path d="M14 28.6655C14 26.6411 15.9341 25 18.32 25H26V29.3345C26 31.3589 24.0659 33 21.68 33H18.32C15.9341 33 14 31.3589 14 29.3345V28.6655Z"/><path d="M32 15L26 14"/>' : '<path d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"/><path d="M26 14V28"/><path d="M14 28.6655C14 26.6411 15.9341 25 18.32 25H26V29.3345C26 31.3589 24.0659 33 21.68 33H18.32C15.9341 33 14 31.3589 14 29.3345V28.6655Z"/><path d="M32 15L26 14"/>';

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

module.exports = MusicCd;
