'use strict';

var React = require('react');

function IdCardV(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<rect x="8" y="4" width="32" height="40" rx="2"/><path d="M24 19C26.2091 19 28 17.2091 28 15C28 12.7909 26.2091 11 24 11C21.7909 11 20 12.7909 20 15C20 17.2091 21.7909 19 24 19Z"/><path d="M30 25C30 21.6863 27.3137 19 24 19C20.6863 19 18 21.6863 18 25"/><path d="M18 31H30"/><path d="M18 37H25"/>' : '<rect x="8" y="4" width="32" height="40" rx="2"/><path d="M24 19C26.2091 19 28 17.2091 28 15C28 12.7909 26.2091 11 24 11C21.7909 11 20 12.7909 20 15C20 17.2091 21.7909 19 24 19Z"/><path d="M30 25C30 21.6863 27.3137 19 24 19C20.6863 19 18 21.6863 18 25"/><path d="M18 31H30"/><path d="M18 37H25"/>';

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

module.exports = IdCardV;
