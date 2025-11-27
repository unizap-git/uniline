'use strict';

var React = require('react');

function CoffeeMachine(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M8 42L37 42C38.6569 42 40 40.6569 40 39L40 9C40 7.34315 38.6569 6 37 6L17 6"/><path d="M22 36C27.5228 36 32 31.5228 32 26H12C12 31.5228 16.4772 36 22 36Z"/><path d="M16 18V20"/><path d="M22 18V20"/><path d="M28 18V20"/>' : '<path d="M8 42L37 42C38.6569 42 40 40.6569 40 39L40 9C40 7.34315 38.6569 6 37 6L17 6"/><path d="M22 36C27.5228 36 32 31.5228 32 26H12C12 31.5228 16.4772 36 22 36Z"/><path d="M16 18V20"/><path d="M22 18V20"/><path d="M28 18V20"/>';

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

module.exports = CoffeeMachine;
