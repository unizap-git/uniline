'use strict';

var React = require('react');

function Sound(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<rect x="8" y="4" width="32" height="40" rx="2"/><circle cx="24" cy="15" r="5"/><circle cx="14" cy="10" r="2"/><circle cx="14" cy="38" r="2"/><circle cx="34" cy="10" r="2"/><circle cx="34" cy="38" r="2"/><circle cx="24" cy="32" r="6"/>' : '<rect x="8" y="4" width="32" height="40" rx="2"/><circle cx="24" cy="15" r="5"/><circle cx="14" cy="10" r="2"/><circle cx="14" cy="38" r="2"/><circle cx="34" cy="10" r="2"/><circle cx="34" cy="38" r="2"/><circle cx="24" cy="32" r="6"/>';

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

module.exports = Sound;
