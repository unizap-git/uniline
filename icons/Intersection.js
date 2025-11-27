'use strict';

var React = require('react');

function Intersection(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M31 31H40C41.1046 31 42 30.1046 42 29V8C42 6.89543 41.1046 6 40 6H19C17.8954 6 17 6.89543 17 8V17"/><path d="M17 17H8C6.89543 17 6 17.8954 6 19V40C6 41.1046 6.89543 42 8 42H29C30.1046 42 31 41.1046 31 40V31"/><rect x="17" y="17" width="14" height="14" rx="2"/>' : '<path d="M31 31H40C41.1046 31 42 30.1046 42 29V8C42 6.89543 41.1046 6 40 6H19C17.8954 6 17 6.89543 17 8V17"/><path d="M17 17H8C6.89543 17 6 17.8954 6 19V40C6 41.1046 6.89543 42 8 42H29C30.1046 42 31 41.1046 31 40V31"/><rect x="17" y="17" width="14" height="14" rx="2"/>';

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

module.exports = Intersection;
