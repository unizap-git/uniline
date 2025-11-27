'use strict';

var React = require('react');

function Control(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<rect x="9" y="4" width="30" height="40" rx="2"/><circle cx="24" cy="31" r="6"/><path d="M18 12H21"/><path d="M18 18H21"/><path d="M27 18H30"/>' : '<rect x="9" y="4" width="30" height="40" rx="2"/><circle cx="24" cy="31" r="6"/><path d="M18 12H21"/><path d="M18 18H21"/><path d="M27 18H30"/>';

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

module.exports = Control;
