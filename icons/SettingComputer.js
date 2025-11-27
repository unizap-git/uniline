'use strict';

var React = require('react');

function SettingComputer(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M24 6H9C7.34315 6 6 7.34315 6 9V31C6 32.6569 7.34315 34 9 34H39C40.6569 34 42 32.6569 42 31V26"/><path d="M24 34V42"/><path d="M14 42L34 42"/><circle cx="37" cy="13" r="3"/><path d="M37 20V16"/><path d="M37 10V6"/><path d="M30.9378 16.5L34.4019 14.5"/><path d="M39.5982 11.5L43.0623 9.5"/><path d="M30.9375 9.5L34.4016 11.5"/><path d="M39.5979 14.5L43.062 16.5"/>' : '<path d="M24 6H9C7.34315 6 6 7.34315 6 9V31C6 32.6569 7.34315 34 9 34H39C40.6569 34 42 32.6569 42 31V26"/><path d="M24 34V42"/><path d="M14 42L34 42"/><circle cx="37" cy="13" r="3"/><path d="M37 20V16"/><path d="M37 10V6"/><path d="M30.9378 16.5L34.4019 14.5"/><path d="M39.5982 11.5L43.0623 9.5"/><path d="M30.9375 9.5L34.4016 11.5"/><path d="M39.5979 14.5L43.062 16.5"/>';

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

module.exports = SettingComputer;
