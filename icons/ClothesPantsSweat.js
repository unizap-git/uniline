'use strict';

var React = require('react');

function ClothesPantsSweat(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M24 19L33 38H42L38 4H10L6 38H15L24 19Z"/><path d="M34 38L35 44H41V38H34Z"/><path d="M13 44H7V38H14L13 44Z"/><path d="M24 4L28 11.5"/><path d="M24 4L20 11.5"/>' : '<path d="M24 19L33 38H42L38 4H10L6 38H15L24 19Z"/><path d="M34 38L35 44H41V38H34Z"/><path d="M13 44H7V38H14L13 44Z"/><path d="M24 4L28 11.5"/><path d="M24 4L20 11.5"/>';

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

module.exports = ClothesPantsSweat;
