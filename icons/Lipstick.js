'use strict';

var React = require('react');

function Lipstick(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<rect x="29" y="24" width="12" height="20"/><rect x="7" y="24" width="14" height="20"/><path d="M10 11.4545V24H18V4C11.5 4 10 9.63636 10 11.4545Z"/><path d="M7 32L21 32"/>' : '<rect x="29" y="24" width="12" height="20"/><rect x="7" y="24" width="14" height="20"/><path d="M10 11.4545V24H18V4C11.5 4 10 9.63636 10 11.4545Z"/><path d="M7 32L21 32"/>';

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

module.exports = Lipstick;
