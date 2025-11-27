'use strict';

var React = require('react');

function ThermosCup(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M10 31C10 31 10.0714 37 24 37C37.9286 37 38 31 38 31V15H24H10V31Z"/><path d="M24 4V10"/><path d="M16 5V9"/><path d="M32 5V9"/><path d="M14 36V41C14 42.1046 14.8954 43 16 43H32C33.1046 43 34 42.1046 34 41V36"/>' : '<path d="M10 31C10 31 10.0714 37 24 37C37.9286 37 38 31 38 31V15H24H10V31Z"/><path d="M24 4V10"/><path d="M16 5V9"/><path d="M32 5V9"/><path d="M14 36V41C14 42.1046 14.8954 43 16 43H32C33.1046 43 34 42.1046 34 41V36"/>';

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

module.exports = ThermosCup;
