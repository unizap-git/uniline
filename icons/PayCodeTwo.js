'use strict';

var React = require('react');

function PayCodeTwo(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M16 6H8C6.89543 6 6 6.89543 6 8V16"/><path d="M16 42H8C6.89543 42 6 41.1046 6 40V32"/><path d="M32 42H40C41.1046 42 42 41.1046 42 40V32"/><path d="M32 6H40C41.1046 6 42 6.89543 42 8V16"/><path d="M24 16V32"/><path d="M32 16V32"/><path d="M16 16V32"/>' : '<path d="M16 6H8C6.89543 6 6 6.89543 6 8V16"/><path d="M16 42H8C6.89543 42 6 41.1046 6 40V32"/><path d="M32 42H40C41.1046 42 42 41.1046 42 40V32"/><path d="M32 6H40C41.1046 6 42 6.89543 42 8V16"/><path d="M24 16V32"/><path d="M32 16V32"/><path d="M16 16V32"/>';

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

module.exports = PayCodeTwo;
