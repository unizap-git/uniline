'use strict';

var React = require('react');

function SignalTower(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M17.0812 6.00005C10.9612 10.2853 9.47386 18.7205 13.7591 24.8405C18.0444 30.9605 26.4796 32.4479 32.5996 28.1626L17.0812 6.00005Z"/><path d="M22 31V42"/><path d="M13 24.5L6 42H42"/><path d="M40 6L25 17"/><path d="M17 6H40L33 27.5"/>' : '<path d="M17.0812 6.00005C10.9612 10.2853 9.47386 18.7205 13.7591 24.8405C18.0444 30.9605 26.4796 32.4479 32.5996 28.1626L17.0812 6.00005Z"/><path d="M22 31V42"/><path d="M13 24.5L6 42H42"/><path d="M40 6L25 17"/><path d="M17 6H40L33 27.5"/>';

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

module.exports = SignalTower;
