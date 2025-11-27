'use strict';

var React = require('react');

function CupFour(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M14 25C14 27 15.0714 32 29 32C42.9286 32 44 27 44 25C44 23 44 10 44 10H29H14C14 10 14 23 14 25Z"/><path d="M29 16H23V21L26 24L29 21V16Z"/><path d="M26 16V10"/><path d="M15 40L43 40"/><path d="M14 14H4C4 14 5 19 5.9991 22C6.99821 25 14 24 14 24"/>' : '<path d="M14 25C14 27 15.0714 32 29 32C42.9286 32 44 27 44 25C44 23 44 10 44 10H29H14C14 10 14 23 14 25Z"/><path d="M29 16H23V21L26 24L29 21V16Z"/><path d="M26 16V10"/><path d="M15 40L43 40"/><path d="M14 14H4C4 14 5 19 5.9991 22C6.99821 25 14 24 14 24"/>';

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

module.exports = CupFour;
