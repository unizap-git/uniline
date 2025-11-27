'use strict';

var React = require('react');

function BarCode(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M4 20H44"/><path d="M6 6V14"/><path d="M6 25.9956V37.9992"/><path d="M20.4 6V14"/><path d="M20.4 26V42"/><path d="M34.8 6V14"/><path d="M42 6V14"/><path d="M34.8 26V34"/><path d="M13.2 6V14"/><path d="M13.2 26V34"/><path d="M27.6 6V14"/><path d="M27.6 26V34"/><path d="M42 26V38"/>' : '<path d="M4 20H44"/><path d="M6 6V14"/><path d="M6 25.9956V37.9992"/><path d="M20.4 6V14"/><path d="M20.4 26V42"/><path d="M34.8 6V14"/><path d="M42 6V14"/><path d="M34.8 26V34"/><path d="M13.2 6V14"/><path d="M13.2 26V34"/><path d="M27.6 6V14"/><path d="M27.6 26V34"/><path d="M42 26V38"/>';

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

module.exports = BarCode;
