'use strict';

var React = require('react');

function UTurnDown(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M35 34V15C35 8.92487 30.0751 4 24 4V4C17.9249 4 13 8.92487 13 15V44"/><path d="M18 39L13 44L8 39"/><circle cx="35" cy="39" r="5" transform="rotate(90 35 39)"/>' : '<path d="M35 34V15C35 8.92487 30.0751 4 24 4V4C17.9249 4 13 8.92487 13 15V44"/><path d="M18 39L13 44L8 39"/><circle cx="35" cy="39" r="5" transform="rotate(90 35 39)"/>';

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

module.exports = UTurnDown;
