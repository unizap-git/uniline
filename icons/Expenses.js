'use strict';

var React = require('react');

function Expenses(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M15.5,17h6"/>   <path d="M19,19.5l2.5-2.5-2.5-2.5"/>   <path d="M21.5,13V5c0-.8-.7-1.5-1.5-1.5H4c-.8,0-1.5.7-1.5,1.5v14c0,.8.7,1.5,1.5,1.5h10.2"/>   <path d="M13.1,7.4h-6.2M13.1,10.5h-6.2M10,16.6l-3.1-3.1h1.5c1.7,0,3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1"/>' : '<path d="M31 34L43 34"/><path d="M38 39L43 34L38.0004 29"/><path d="M43 26V10C43 8.34315 41.6569 7 40 7H8C6.34315 7 5 8.34315 5 10V38C5 39.6569 6.34315 41 8 41H28.4706"/><path d="M15 15L20 21L25 15"/><path d="M14 27H26"/><path d="M14 21H26"/><path d="M20 21V33"/>';

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

module.exports = Expenses;
