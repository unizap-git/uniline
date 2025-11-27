'use strict';

var React = require('react');

function BringToFront(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M41 18H19C18.4477 18 18 18.4477 18 19V41C18 41.5523 18.4477 42 19 42H41C41.5523 42 42 41.5523 42 41V19C42 18.4477 41.5523 18 41 18Z"/><path d="M9.96906 6H6V10.0336"/><path d="M9.99705 30H6V26.012"/><path d="M26.0023 6H30V10.0152"/><path d="M16.0283 6H20.0083"/><path d="M6 16C6 18.6536 6 19.9869 6 20"/><path d="M30 16C30 18.6765 30 19.3456 30 18.0074"/><path d="M15.9922 30H17.9996"/>' : '<path d="M41 18H19C18.4477 18 18 18.4477 18 19V41C18 41.5523 18.4477 42 19 42H41C41.5523 42 42 41.5523 42 41V19C42 18.4477 41.5523 18 41 18Z"/><path d="M9.96906 6H6V10.0336"/><path d="M9.99705 30H6V26.012"/><path d="M26.0023 6H30V10.0152"/><path d="M16.0283 6H20.0083"/><path d="M6 16C6 18.6536 6 19.9869 6 20"/><path d="M30 16C30 18.6765 30 19.3456 30 18.0074"/><path d="M15.9922 30H17.9996"/>';

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

module.exports = BringToFront;
