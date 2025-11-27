'use strict';

var React = require('react');

function Reel(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M31 10L14 20"/><path d="M34 17L14 29"/><path d="M34 26L15 38"/><rect x="9" y="4" width="30" height="6"/><rect x="9" y="38" width="30" height="6"/><path d="M14 10V38"/><path d="M34 10V38"/>' : '<path d="M31 10L14 20"/><path d="M34 17L14 29"/><path d="M34 26L15 38"/><rect x="9" y="4" width="30" height="6"/><rect x="9" y="38" width="30" height="6"/><path d="M14 10V38"/><path d="M34 10V38"/>';

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

module.exports = Reel;
