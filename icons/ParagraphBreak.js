'use strict';

var React = require('react');

function ParagraphBreak(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M6 4V44"/><path d="M42 4V44"/><path d="M18 26L14 30L18 34"/><path d="M15 30C15 30 25.7909 30 28 30C31.3137 30 34 27.3137 34 24C34 20.6863 31.3137 18 28 18C26.6852 18 14 18 14 18"/>' : '<path d="M6 4V44"/><path d="M42 4V44"/><path d="M18 26L14 30L18 34"/><path d="M15 30C15 30 25.7909 30 28 30C31.3137 30 34 27.3137 34 24C34 20.6863 31.3137 18 28 18C26.6852 18 14 18 14 18"/>';

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

module.exports = ParagraphBreak;
