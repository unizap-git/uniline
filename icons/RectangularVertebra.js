'use strict';

var React = require('react');

function RectangularVertebra(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M12 9L24 4L36 9L44 38L24 44L4 38L12 9Z"/><path d="M24 44L24 14"/><path d="M36 9L24 14"/><path d="M12 9L24 14"/><path d="M5 38L24 32"/><path d="M44 38L24 32"/>' : '<path d="M12 9L24 4L36 9L44 38L24 44L4 38L12 9Z"/><path d="M24 44L24 14"/><path d="M36 9L24 14"/><path d="M12 9L24 14"/><path d="M5 38L24 32"/><path d="M44 38L24 32"/>';

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

module.exports = RectangularVertebra;
