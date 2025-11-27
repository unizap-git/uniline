'use strict';

var React = require('react');

function CubeFive(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M30 27L24 44"/><path d="M18 27L24 44"/><path d="M18 27L30 27"/><path d="M41 34L30 27"/><path d="M41 14L30 27"/><path d="M41 14L24 17"/><path d="M30 27L24 17"/><path d="M24 4V17"/><path d="M7 14L24 17"/><path d="M18 27L24 17"/><path d="M18 27L7 14"/><path d="M18 27L7 34"/><path d="M41.3207 14L24.0002 4L6.67969 14V34L24.0002 44L41.3207 34V14Z"/>' : '<path d="M30 27L24 44"/><path d="M18 27L24 44"/><path d="M18 27L30 27"/><path d="M41 34L30 27"/><path d="M41 14L30 27"/><path d="M41 14L24 17"/><path d="M30 27L24 17"/><path d="M24 4V17"/><path d="M7 14L24 17"/><path d="M18 27L24 17"/><path d="M18 27L7 14"/><path d="M18 27L7 34"/><path d="M41.3207 14L24.0002 4L6.67969 14V34L24.0002 44L41.3207 34V14Z"/>';

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

module.exports = CubeFive;
