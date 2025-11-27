'use strict';

var React = require('react');

function BrdigeThree(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M8 12V38"/><path d="M40 12V38"/><path d="M8 38C8 38 16 27 24 27C32 27 40 38 40 38"/><path d="M4 27H44"/><path d="M4 19H44"/><path d="M24 15L24 27"/><path d="M16 19L16 27"/><path d="M32 19L32 27"/>' : '<path d="M8 12V38"/><path d="M40 12V38"/><path d="M8 38C8 38 16 27 24 27C32 27 40 38 40 38"/><path d="M4 27H44"/><path d="M4 19H44"/><path d="M24 15L24 27"/><path d="M16 19L16 27"/><path d="M32 19L32 27"/>';

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

module.exports = BrdigeThree;
