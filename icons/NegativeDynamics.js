'use strict';

var React = require('react');

function NegativeDynamics(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M17 33.9502V42.1102"/><path d="M9 40V42.0556"/><path d="M25 27V42.0714"/><path d="M33 18.9614V42.0878"/><path d="M41 10.9707V42.0833"/><path d="M7 33L34 6"/><path d="M7 22L7 33"/>' : '<path d="M17 33.9502V42.1102"/><path d="M9 40V42.0556"/><path d="M25 27V42.0714"/><path d="M33 18.9614V42.0878"/><path d="M41 10.9707V42.0833"/><path d="M7 33L34 6"/><path d="M7 22L7 33"/>';

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

module.exports = NegativeDynamics;
