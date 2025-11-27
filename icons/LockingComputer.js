'use strict';

var React = require('react');

function LockingComputer(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M24 6H9C7.34315 6 6 7.34315 6 9V31C6 32.6569 7.34315 34 9 34H39C40.6569 34 42 32.6569 42 31V27"/><path d="M24 34V42"/><rect x="30" y="12" width="12" height="8" rx="3"/><path d="M36 6C37.6569 6 39 7.34315 39 9L39 12L33 12L33 9C33 7.34315 34.3431 6 36 6Z"/><path d="M14 42L34 42"/>' : '<path d="M24 6H9C7.34315 6 6 7.34315 6 9V31C6 32.6569 7.34315 34 9 34H39C40.6569 34 42 32.6569 42 31V27"/><path d="M24 34V42"/><rect x="30" y="12" width="12" height="8" rx="3"/><path d="M36 6C37.6569 6 39 7.34315 39 9L39 12L33 12L33 9C33 7.34315 34.3431 6 36 6Z"/><path d="M14 42L34 42"/>';

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

module.exports = LockingComputer;
