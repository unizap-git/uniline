'use strict';

var React = require('react');

function ClothesGlovesTwo(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M34 22V15M34 15V15C34 10.3088 34 7.96327 32.7601 6.34743C32.4409 5.93144 32.0686 5.55908 31.6526 5.23988C30.0367 4 27.6912 4 23 4H22C16.3431 4 13.5147 4 11.7574 5.75736C10 7.51472 10 10.3431 10 16V38H34V32C34 32 41 32 41 26C41 24 41 24 41 21C41 15 34 15 34 15Z"/><path d="M9 38H35C36.6569 38 38 39.3431 38 41C38 42.6569 36.6569 44 35 44H9C7.34315 44 6 42.6569 6 41C6 39.3431 7.34315 38 9 38Z"/>' : '<path d="M34 22V15M34 15V15C34 10.3088 34 7.96327 32.7601 6.34743C32.4409 5.93144 32.0686 5.55908 31.6526 5.23988C30.0367 4 27.6912 4 23 4H22C16.3431 4 13.5147 4 11.7574 5.75736C10 7.51472 10 10.3431 10 16V38H34V32C34 32 41 32 41 26C41 24 41 24 41 21C41 15 34 15 34 15Z"/><path d="M9 38H35C36.6569 38 38 39.3431 38 41C38 42.6569 36.6569 44 35 44H9C7.34315 44 6 42.6569 6 41C6 39.3431 7.34315 38 9 38Z"/>';

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

module.exports = ClothesGlovesTwo;
