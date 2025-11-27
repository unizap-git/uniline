'use strict';

var React = require('react');

function BreastPump(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M35 25C35 21 29 19 29 19V14H17V19C17 19 11 21 11 25V44H35V25Z"/><path d="M20 4L13 10"/><path d="M23 14L17 7"/><path d="M26 8H35V15L41 20"/>' : '<path d="M35 25C35 21 29 19 29 19V14H17V19C17 19 11 21 11 25V44H35V25Z"/><path d="M20 4L13 10"/><path d="M23 14L17 7"/><path d="M26 8H35V15L41 20"/>';

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

module.exports = BreastPump;
