'use strict';

var React = require('react');

function DataDisplay(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M22 8V20C22 22.2091 17.9706 24 13 24C8.02944 24 4 22.2091 4 20V8"/><path d="M22 14C22 16.2091 17.9706 18 13 18C8.02944 18 4 16.2091 4 14"/><path d="M22 8C22 10.2091 17.9706 12 13 12C8.02944 12 4 10.2091 4 8C4 5.79086 8.02944 4 13 4C17.9706 4 22 5.79086 22 8Z"/><path d="M32 6H38C40.2091 6 42 7.79086 42 10V16"/><path d="M16 42H10C7.79086 42 6 40.2091 6 38V32"/><path d="M35 38V44"/><path d="M41 44H35H29"/><path d="M44 38V26H26V38H44Z"/>' : '<path d="M22 8V20C22 22.2091 17.9706 24 13 24C8.02944 24 4 22.2091 4 20V8"/><path d="M22 14C22 16.2091 17.9706 18 13 18C8.02944 18 4 16.2091 4 14"/><path d="M22 8C22 10.2091 17.9706 12 13 12C8.02944 12 4 10.2091 4 8C4 5.79086 8.02944 4 13 4C17.9706 4 22 5.79086 22 8Z"/><path d="M32 6H38C40.2091 6 42 7.79086 42 10V16"/><path d="M16 42H10C7.79086 42 6 40.2091 6 38V32"/><path d="M35 38V44"/><path d="M41 44H35H29"/><path d="M44 38V26H26V38H44Z"/>';

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

module.exports = DataDisplay;
