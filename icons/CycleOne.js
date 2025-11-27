'use strict';

var React = require('react');

function CycleOne(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M6 20C6 12 10 8 18 8"/><path d="M40 30C40 38 36 42 28 42"/><path d="M28 18C28 12.4772 32.4772 8 38 8H42V22H28V18Z"/><path d="M6 28H20V32C20 37.5228 15.5228 42 10 42H6V28Z"/>' : '<path d="M6 20C6 12 10 8 18 8"/><path d="M40 30C40 38 36 42 28 42"/><path d="M28 18C28 12.4772 32.4772 8 38 8H42V22H28V18Z"/><path d="M6 28H20V32C20 37.5228 15.5228 42 10 42H6V28Z"/>';

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

module.exports = CycleOne;
