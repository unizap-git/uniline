'use strict';

var React = require('react');

function CakeTwo(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M40 17.9L31.0577 8L9 17.9V30H40V17.9Z"/><path d="M9 18H26.386C26.4489 18 26.5 18.0511 26.5 18.114V21.625C26.5 23.2128 27.7872 24.5 29.375 24.5V24.5C30.9628 24.5 32.25 23.2128 32.25 21.625V18.114C32.25 18.0511 32.3011 18 32.364 18H40"/><path d="M9.5 23.9568C8.89836 24.2575 8.33775 24.5769 7.82243 24.913C5.41836 26.481 4 28.4118 4 30.4999C4 35.7466 12.9543 39.9999 24 39.9999C35.0457 39.9999 44 35.7466 44 30.4999C44 28.3609 42.5116 26.3869 40 24.799"/>' : '<path d="M40 17.9L31.0577 8L9 17.9V30H40V17.9Z"/><path d="M9 18H26.386C26.4489 18 26.5 18.0511 26.5 18.114V21.625C26.5 23.2128 27.7872 24.5 29.375 24.5V24.5C30.9628 24.5 32.25 23.2128 32.25 21.625V18.114C32.25 18.0511 32.3011 18 32.364 18H40"/><path d="M9.5 23.9568C8.89836 24.2575 8.33775 24.5769 7.82243 24.913C5.41836 26.481 4 28.4118 4 30.4999C4 35.7466 12.9543 39.9999 24 39.9999C35.0457 39.9999 44 35.7466 44 30.4999C44 28.3609 42.5116 26.3869 40 24.799"/>';

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

module.exports = CakeTwo;
