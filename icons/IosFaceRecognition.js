'use strict';

var React = require('react');

function IosFaceRecognition(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M4 34V44H14"/><path d="M34 44H44V34"/><path d="M34 4H44V14"/><path d="M14 4H4V14"/><path d="M16 34C16 34 19 37 24 37C29 37 32 34 32 34"/><path d="M24 14V23C24 25 22 27 20 27H19"/><path d="M34 14V16"/><path d="M14 14V16"/>' : '<path d="M4 34V44H14"/><path d="M34 44H44V34"/><path d="M34 4H44V14"/><path d="M14 4H4V14"/><path d="M16 34C16 34 19 37 24 37C29 37 32 34 32 34"/><path d="M24 14V23C24 25 22 27 20 27H19"/><path d="M34 14V16"/><path d="M14 14V16"/>';

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

module.exports = IosFaceRecognition;
