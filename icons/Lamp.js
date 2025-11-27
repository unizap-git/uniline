'use strict';

var React = require('react');

function Lamp(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M14 9.5C14 7.567 15.567 6 17.5 6C19.433 6 21 7.567 21 9.5V21H14V9.5Z"/><path d="M27 9.5C27 7.567 28.567 6 30.5 6C32.433 6 34 7.567 34 9.5V21H27V9.5Z"/><rect x="18" y="34" width="12" height="8"/><path d="M10 22C10 21.4477 10.4477 21 11 21H37C37.5523 21 38 21.4477 38 22V26C38 30.4183 34.4183 34 30 34H18C13.5817 34 10 30.4183 10 26V22Z"/>' : '<path d="M14 9.5C14 7.567 15.567 6 17.5 6C19.433 6 21 7.567 21 9.5V21H14V9.5Z"/><path d="M27 9.5C27 7.567 28.567 6 30.5 6C32.433 6 34 7.567 34 9.5V21H27V9.5Z"/><rect x="18" y="34" width="12" height="8"/><path d="M10 22C10 21.4477 10.4477 21 11 21H37C37.5523 21 38 21.4477 38 22V26C38 30.4183 34.4183 34 30 34H18C13.5817 34 10 30.4183 10 26V22Z"/>';

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

module.exports = Lamp;
