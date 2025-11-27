'use strict';

var React = require('react');

function Gate(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M13 10V35"/><path d="M35 10V35"/><path d="M8 18L40 18"/><path d="M24 10V18"/><path d="M39 10H9.00001L5 4C5 4 16.0708 5 24 5C31.9292 5 43 4 43 4L39 10Z"/><rect x="10" y="35" width="6" height="9"/><rect x="32" y="35" width="6" height="9"/>' : '<path d="M13 10V35"/><path d="M35 10V35"/><path d="M8 18L40 18"/><path d="M24 10V18"/><path d="M39 10H9.00001L5 4C5 4 16.0708 5 24 5C31.9292 5 43 4 43 4L39 10Z"/><rect x="10" y="35" width="6" height="9"/><rect x="32" y="35" width="6" height="9"/>';

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

module.exports = Gate;
