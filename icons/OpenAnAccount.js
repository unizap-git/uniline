'use strict';

var React = require('react');

function OpenAnAccount(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M42 24V9C42 7.34315 40.6569 6 39 6H9C7.34315 6 6 7.34315 6 9V39C6 40.6569 7.34315 42 9 42H24"/><path d="M39.0508 33L39.0508 43"/><path d="M44 37.9497L34 37.9497"/><circle cx="24" cy="18" r="5"/><path d="M33 31C33 26.5817 28.9706 23 24 23C19.0294 23 15 26.5817 15 31"/>' : '<path d="M42 24V9C42 7.34315 40.6569 6 39 6H9C7.34315 6 6 7.34315 6 9V39C6 40.6569 7.34315 42 9 42H24"/><path d="M39.0508 33L39.0508 43"/><path d="M44 37.9497L34 37.9497"/><circle cx="24" cy="18" r="5"/><path d="M33 31C33 26.5817 28.9706 23 24 23C19.0294 23 15 26.5817 15 31"/>';

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

module.exports = OpenAnAccount;
