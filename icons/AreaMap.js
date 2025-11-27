'use strict';

var React = require('react');

function AreaMap(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M18 24L12 33L4 28.5V42H44V15L37 23L31 18L24 26L18 24Z"/><path d="M4 28.5V17L11 23L16.5 15L22.5 18L31 9L36.5 13.5L44 6V15.5"/>' : '<path d="M18 24L12 33L4 28.5V42H44V15L37 23L31 18L24 26L18 24Z"/><path d="M4 28.5V17L11 23L16.5 15L22.5 18L31 9L36.5 13.5L44 6V15.5"/>';

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

module.exports = AreaMap;
