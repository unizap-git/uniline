'use strict';

var React = require('react');

function SplitTurnDownRight(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M13 22H29C33.4183 22 37 25.5817 37 30V44"/><circle cx="13" cy="8.94366" r="5" transform="rotate(-90 13 8.94366)"/><path d="M13 14V43"/><path d="M18 39L13 44L8 39"/><path d="M42 39L37 44L32 39"/>' : '<path d="M13 22H29C33.4183 22 37 25.5817 37 30V44"/><circle cx="13" cy="8.94366" r="5" transform="rotate(-90 13 8.94366)"/><path d="M13 14V43"/><path d="M18 39L13 44L8 39"/><path d="M42 39L37 44L32 39"/>';

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

module.exports = SplitTurnDownRight;
