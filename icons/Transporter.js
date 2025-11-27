'use strict';

var React = require('react');

function Transporter(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M42 8H20C18.8954 8 18 8.89543 18 10V32C18 33.1046 18.8954 34 20 34H42C43.1046 34 44 33.1046 44 32V10C44 8.89543 43.1046 8 42 8Z"/><path d="M4 34H18V20H11L4 26.4615V34Z"/><path d="M18 36C18 38.2091 16.2091 40 14 40C11.7909 40 10 38.2091 10 36"/><path d="M40 36C40 38.2091 38.2091 40 36 40C33.7909 40 32 38.2091 32 36"/>' : '<path d="M42 8H20C18.8954 8 18 8.89543 18 10V32C18 33.1046 18.8954 34 20 34H42C43.1046 34 44 33.1046 44 32V10C44 8.89543 43.1046 8 42 8Z"/><path d="M4 34H18V20H11L4 26.4615V34Z"/><path d="M18 36C18 38.2091 16.2091 40 14 40C11.7909 40 10 38.2091 10 36"/><path d="M40 36C40 38.2091 38.2091 40 36 40C33.7909 40 32 38.2091 32 36"/>';

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

module.exports = Transporter;
