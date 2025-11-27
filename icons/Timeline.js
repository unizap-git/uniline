'use strict';

var React = require('react');

function Timeline(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<g clip-path="url(#icon-11f45b00f5418318)"><path d="M13 12C13 14.2091 14.7909 16 17 16C19.2091 16 21 14.2091 21 12C21 9.79086 19.2091 8 17 8C14.7909 8 13 9.79086 13 12Z"/><path d="M31 24C31 26.2091 32.7909 28 35 28C37.2091 28 39 26.2091 39 24C39 21.7909 37.2091 20 35 20C32.7909 20 31 21.7909 31 24Z"/><path d="M13 36C13 38.2091 14.7909 40 17 40C19.2091 40 21 38.2091 21 36C21 33.7909 19.2091 32 17 32C14.7909 32 13 33.7909 13 36Z"/><path d="M4 36H13"/><path d="M21 36H44"/><path d="M4 12H13"/><path d="M21 12H44"/><path d="M4 4V44"/><path d="M4 24H31"/><path d="M39 24H44"/></g><defs><clipPath id="icon-11f45b00f5418318"><rect width="48" height="48"/></clipPath></defs>' : '<g clip-path="url(#icon-aca1682f5418318)"><path d="M13 12C13 14.2091 14.7909 16 17 16C19.2091 16 21 14.2091 21 12C21 9.79086 19.2091 8 17 8C14.7909 8 13 9.79086 13 12Z"/><path d="M31 24C31 26.2091 32.7909 28 35 28C37.2091 28 39 26.2091 39 24C39 21.7909 37.2091 20 35 20C32.7909 20 31 21.7909 31 24Z"/><path d="M13 36C13 38.2091 14.7909 40 17 40C19.2091 40 21 38.2091 21 36C21 33.7909 19.2091 32 17 32C14.7909 32 13 33.7909 13 36Z"/><path d="M4 36H13"/><path d="M21 36H44"/><path d="M4 12H13"/><path d="M21 12H44"/><path d="M4 4V44"/><path d="M4 24H31"/><path d="M39 24H44"/></g><defs><clipPath id="icon-aca1682f5418318"><rect width="48" height="48"/></clipPath></defs>';

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

module.exports = Timeline;
