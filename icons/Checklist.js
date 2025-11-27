'use strict';

var React = require('react');

function Checklist(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M34 10L42 18"/><path d="M42 10L34 18"/><path d="M44 30L37 38L33 34"/><path d="M26 10H4V18H26V10Z"/><path d="M26 30H4V38H26V30Z"/>' : '<path d="M34 10L42 18"/><path d="M42 10L34 18"/><path d="M44 30L37 38L33 34"/><path d="M26 10H4V18H26V10Z"/><path d="M26 30H4V38H26V30Z"/>';

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

module.exports = Checklist;
