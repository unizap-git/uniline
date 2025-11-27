'use strict';

var React = require('react');

function Sandstorm(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M4 22H36C40.4183 22 44 18.4183 44 14C44 9.58172 40.4183 6 36 6C31.5817 6 28 9.58172 28 14"/><path d="M10 29H4"/><path d="M27 29H21"/><path d="M44 29H38"/><path d="M10 35H4"/><path d="M27 35H21"/><path d="M44 35H38"/><path d="M16 42H4"/><path d="M44 42H32"/>' : '<path d="M4 22H36C40.4183 22 44 18.4183 44 14C44 9.58172 40.4183 6 36 6C31.5817 6 28 9.58172 28 14"/><path d="M10 29H4"/><path d="M27 29H21"/><path d="M44 29H38"/><path d="M10 35H4"/><path d="M27 35H21"/><path d="M44 35H38"/><path d="M16 42H4"/><path d="M44 42H32"/>';

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

module.exports = Sandstorm;
