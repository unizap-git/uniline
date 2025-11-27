'use strict';

var React = require('react');

function TreeDiagram(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<circle cx="10" cy="24" r="4"/><circle cx="38" cy="10" r="4"/><circle cx="38" cy="24" r="4"/><circle cx="38" cy="38" r="4"/><path d="M34 38L22 38V10H34"/><path d="M14 24L34 24"/>' : '<circle cx="10" cy="24" r="4"/><circle cx="38" cy="10" r="4"/><circle cx="38" cy="24" r="4"/><circle cx="38" cy="38" r="4"/><path d="M34 38L22 38V10H34"/><path d="M14 24L34 24"/>';

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

module.exports = TreeDiagram;
