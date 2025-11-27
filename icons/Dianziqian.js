'use strict';

var React = require('react');

function Dianziqian(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M33 8L24 13L34 19V29.2143L14 18V29L34 41L43 35.1071V13.8929L33 8Z"/><path d="M24 35L15 41L5 35L5.00069 14L15 8L24 13"/>' : '<path d="M33 8L24 13L34 19V29.2143L14 18V29L34 41L43 35.1071V13.8929L33 8Z"/><path d="M24 35L15 41L5 35L5.00069 14L15 8L24 13"/>';

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

module.exports = Dianziqian;
