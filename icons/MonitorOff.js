'use strict';

var React = require('react');

function MonitorOff(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M4 12V38H20H28H30M18 10H20H36V24V27"/><path fill-rule="evenodd" clip-rule="evenodd" d="M44 14L36 20.75V27.25L44 34V14Z"/><path d="M44 44L4 4"/>' : '<path d="M4 12V38H20H28H30M18 10H20H36V24V27"/><path fill-rule="evenodd" clip-rule="evenodd" d="M44 14L36 20.75V27.25L44 34V14Z"/><path d="M44 44L4 4"/>';

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

module.exports = MonitorOff;
