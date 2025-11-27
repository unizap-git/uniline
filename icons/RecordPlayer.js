'use strict';

var React = require('react');

function RecordPlayer(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<rect x="5" y="8" width="38" height="32" rx="2"/><path d="M13 8V40"/><circle cx="28" cy="24" r="9"/><circle cx="28" cy="24" r="3"/><path d="M5 16H13"/><path d="M5 24H13"/><path d="M5 32H13"/>' : '<rect x="5" y="8" width="38" height="32" rx="2"/><path d="M13 8V40"/><circle cx="28" cy="24" r="9"/><circle cx="28" cy="24" r="3"/><path d="M5 16H13"/><path d="M5 24H13"/><path d="M5 32H13"/>';

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

module.exports = RecordPlayer;
