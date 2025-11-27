'use strict';

var React = require('react');

function Baokemeng(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M44 24H30C30 20.69 27.31 18 24 18C20.69 18 18 20.69 18 24H4C4 12.95 12.95 4 24 4C35.05 4 44 12.95 44 24Z" stroke-miterlimit="2"/><path d="M18 24H4C4 35.05 12.95 44 24 44C35.05 44 44 35.05 44 24H30" stroke-miterlimit="2"/><path d="M24 30C27.3137 30 30 27.3137 30 24C30 20.6863 27.3137 18 24 18C20.6863 18 18 20.6863 18 24C18 27.3137 20.6863 30 24 30Z" stroke-miterlimit="2"/>' : '<path d="M44 24H30C30 20.69 27.31 18 24 18C20.69 18 18 20.69 18 24H4C4 12.95 12.95 4 24 4C35.05 4 44 12.95 44 24Z" stroke-miterlimit="2"/><path d="M18 24H4C4 35.05 12.95 44 24 44C35.05 44 44 35.05 44 24H30" stroke-miterlimit="2"/><path d="M24 30C27.3137 30 30 27.3137 30 24C30 20.6863 27.3137 18 24 18C20.6863 18 18 20.6863 18 24C18 27.3137 20.6863 30 24 30Z" stroke-miterlimit="2"/>';

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

module.exports = Baokemeng;
