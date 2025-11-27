'use strict';

var React = require('react');

function Homestay(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M8.00042 25.9999C10.3186 26.1968 18.0008 27.9999 18.0004 30.9999C18 34 13.8646 32.9889 12.0004 32.9999C10.3989 32.864 5.9996 33 5.99994 36C6.00027 39 13 41 20 42C27 43 38.0001 42.9999 38.0001 42.9999"/><path d="M8 20L14 14"/><path d="M28 6L38 6L42 10"/><path d="M30 14L36 20H20L14 14H30Z"/><path d="M42 22V16"/><path d="M26 30V26"/><path d="M32 34V26"/>' : '<path d="M8.00042 25.9999C10.3186 26.1968 18.0008 27.9999 18.0004 30.9999C18 34 13.8646 32.9889 12.0004 32.9999C10.3989 32.864 5.9996 33 5.99994 36C6.00027 39 13 41 20 42C27 43 38.0001 42.9999 38.0001 42.9999"/><path d="M8 20L14 14"/><path d="M28 6L38 6L42 10"/><path d="M30 14L36 20H20L14 14H30Z"/><path d="M42 22V16"/><path d="M26 30V26"/><path d="M32 34V26"/>';

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

module.exports = Homestay;
