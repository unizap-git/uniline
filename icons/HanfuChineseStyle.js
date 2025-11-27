'use strict';

var React = require('react');

function HanfuChineseStyle(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M9 9L18 4H30L39 9L43 25L35 29V44H13V29L5 25L9 9Z"/><path d="M18 4L24 14.5"/><path d="M30 4L24 14.5L13 29"/>' : '<path d="M9 9L18 4H30L39 9L43 25L35 29V44H13V29L5 25L9 9Z"/><path d="M18 4L24 14.5"/><path d="M30 4L24 14.5L13 29"/>';

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

module.exports = HanfuChineseStyle;
