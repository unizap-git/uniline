'use strict';

var React = require('react');

function RefreshOne(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<rect x="17" y="24.071" width="10" height="10" rx="2" transform="rotate(-45 17 24.071)"/><path d="M40.1201 16C37.1747 10.0731 31.0586 6 23.9912 6C16.9237 6 10.9454 10.0731 8 16"/><path d="M8 8V16"/><path d="M14.7803 16L8.00013 16"/><path d="M8 32C10.9454 37.9269 17.0615 42 24.129 42C31.1964 42 37.1747 37.9269 40.1201 32"/><path d="M40.1201 40V32"/><path d="M33.3398 32L40.12 32"/>' : '<rect x="17" y="24.071" width="10" height="10" rx="2" transform="rotate(-45 17 24.071)"/><path d="M40.1201 16C37.1747 10.0731 31.0586 6 23.9912 6C16.9237 6 10.9454 10.0731 8 16"/><path d="M8 8V16"/><path d="M14.7803 16L8.00013 16"/><path d="M8 32C10.9454 37.9269 17.0615 42 24.129 42C31.1964 42 37.1747 37.9269 40.1201 32"/><path d="M40.1201 40V32"/><path d="M33.3398 32L40.12 32"/>';

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

module.exports = RefreshOne;
