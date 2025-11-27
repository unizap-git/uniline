'use strict';

var React = require('react');

function Nmr(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"/><path d="M32.4852 15.5147C30.3136 13.3431 27.3136 12 23.9999 12C20.6862 12 17.6862 13.3431 15.5146 15.5147"/><path d="M34 24H14V32H34V24Z"/><path d="M17.0454 32L17 42.7147"/><path d="M31.0455 32L31 42.7147"/>' : '<path d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"/><path d="M32.4852 15.5147C30.3136 13.3431 27.3136 12 23.9999 12C20.6862 12 17.6862 13.3431 15.5146 15.5147"/><path d="M34 24H14V32H34V24Z"/><path d="M17.0454 32L17 42.7147"/><path d="M31.0455 32L31 42.7147"/>';

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

module.exports = Nmr;
