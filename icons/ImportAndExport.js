'use strict';

var React = require('react');

function ImportAndExport(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M14 25.9999L5 34.9999L14 43.9999"/><path d="M5 35.0083H22.5"/><path d="M34.0005 18L43.0005 27L34.0005 36"/><path d="M43 27.0084H25.5"/><path d="M4.5 24V7.5L43.5 7.5V15"/>' : '<path d="M14 25.9999L5 34.9999L14 43.9999"/><path d="M5 35.0083H22.5"/><path d="M34.0005 18L43.0005 27L34.0005 36"/><path d="M43 27.0084H25.5"/><path d="M4.5 24V7.5L43.5 7.5V15"/>';

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

module.exports = ImportAndExport;
