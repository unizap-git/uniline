'use strict';

var React = require('react');

function InternalData(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M6 18V9C6 7.34315 7.34315 6 9 6H39C40.6569 6 42 7.34315 42 9V18"/><path d="M32 24V31"/><path d="M24 15V31"/><path d="M16 19V31"/><path d="M6 30V39C6 40.6569 7.34315 42 9 42H39C40.6569 42 42 40.6569 42 39V30"/>' : '<path d="M6 18V9C6 7.34315 7.34315 6 9 6H39C40.6569 6 42 7.34315 42 9V18"/><path d="M32 24V31"/><path d="M24 15V31"/><path d="M16 19V31"/><path d="M6 30V39C6 40.6569 7.34315 42 9 42H39C40.6569 42 42 40.6569 42 39V30"/>';

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

module.exports = InternalData;
