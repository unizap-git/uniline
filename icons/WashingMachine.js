'use strict';

var React = require('react');

function WashingMachine(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<rect x="8.77783" y="4" width="32" height="40" rx="2"/><path d="M8.77783 15.5H40.7778"/><circle cx="28.7778" cy="10" r="2"/><circle cx="34.7778" cy="10" r="2"/><circle cx="24.7778" cy="30" r="7"/>' : '<rect x="8.77783" y="4" width="32" height="40" rx="2"/><path d="M8.77783 15.5H40.7778"/><circle cx="28.7778" cy="10" r="2"/><circle cx="34.7778" cy="10" r="2"/><circle cx="24.7778" cy="30" r="7"/>';

  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 49 48',
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

module.exports = WashingMachine;
