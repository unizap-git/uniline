'use strict';

var React = require('react');

function StereoPerspective(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M4 44V14L14 4H44V34L34 44H4Z"/><path d="M34 14V44"/><path d="M14 4L14 34"/><path d="M4 14L34 14"/><path d="M44 4L34 14"/><path d="M4 44L14 34"/><path d="M14 34L44 34"/>' : '<path d="M4 44V14L14 4H44V34L34 44H4Z"/><path d="M34 14V44"/><path d="M14 4L14 34"/><path d="M4 14L34 14"/><path d="M44 4L34 14"/><path d="M4 44L14 34"/><path d="M14 34L44 34"/>';

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

module.exports = StereoPerspective;
