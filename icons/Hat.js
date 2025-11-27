'use strict';

var React = require('react');

function Hat(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M9 16C9 11.5817 12.5817 8 17 8H31C35.4183 8 39 11.5817 39 16V32H9V16Z"/><rect x="4" y="32" width="40" height="8" rx="2"/><path d="M9 22L17 22"/><path d="M31 22L39 22"/>' : '<path d="M9 16C9 11.5817 12.5817 8 17 8H31C35.4183 8 39 11.5817 39 16V32H9V16Z"/><rect x="4" y="32" width="40" height="8" rx="2"/><path d="M9 22L17 22"/><path d="M31 22L39 22"/>';

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

module.exports = Hat;
