'use strict';

var React = require('react');

function BringForward(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<rect x="6" y="34" width="36" height="8"/><rect x="6" y="20" width="36" height="8"/><path d="M30 12L24 6L18 12V12"/><path d="M24 28V34"/><path d="M24 6V20"/>' : '<rect x="6" y="34" width="36" height="8"/><rect x="6" y="20" width="36" height="8"/><path d="M30 12L24 6L18 12V12"/><path d="M24 28V34"/><path d="M24 6V20"/>';

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

module.exports = BringForward;
