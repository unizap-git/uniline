'use strict';

var React = require('react');

function KnifeFork(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M14 4V44"/><path d="M8 5V15C8 20 14 20 14 20C14 20 20 20 20 15V5"/><path d="M30 12C30 4 38 4 38 4V21H30V12Z"/><path d="M38 21H30V12C30 4 38 4 38 4V21ZM38 21V44"/>' : '<path d="M14 4V44"/><path d="M8 5V15C8 20 14 20 14 20C14 20 20 20 20 15V5"/><path d="M30 12C30 4 38 4 38 4V21H30V12Z"/><path d="M38 21H30V12C30 4 38 4 38 4V21ZM38 21V44"/>';

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

module.exports = KnifeFork;
