'use strict';

var React = require('react');

function ClothesHoodie(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M37 22V37M11 37V44H37V37M11 37H4V22C4 19 6 15.5 9 13C12 10.5 16 10 16 10L24 18M11 37V22M37 37H44V22C44 19 42 15.5 39 13C36 10.5 32 10 32 10L24 18M24 18V27"/><path d="M9 13C12 10.5 16 10 16 10L24 18L32 10C32 10 36 10.5 39 13L41 8.5L39 4H9L7 8.5L9 13Z"/>' : '<path d="M37 22V37M11 37V44H37V37M11 37H4V22C4 19 6 15.5 9 13C12 10.5 16 10 16 10L24 18M11 37V22M37 37H44V22C44 19 42 15.5 39 13C36 10.5 32 10 32 10L24 18M24 18V27"/><path d="M9 13C12 10.5 16 10 16 10L24 18L32 10C32 10 36 10.5 39 13L41 8.5L39 4H9L7 8.5L9 13Z"/>';

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

module.exports = ClothesHoodie;
