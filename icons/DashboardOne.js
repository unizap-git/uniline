'use strict';

var React = require('react');

function DashboardOne(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M24.7778 7C13.7321 7 4.77783 15.9543 4.77783 27C4.77783 32.2301 6.49127 37.4362 9.77783 41H39.7778C43.0644 37.4362 44.7778 32.2301 44.7778 27C44.7778 15.9543 35.8235 7 24.7778 7Z"/><circle cx="24.7778" cy="30" r="4"/><path d="M24.7778 20V26"/><path d="M24.7778 12V14"/><path d="M9.77783 28H11.7778"/><path d="M13.7778 18L15.192 19.4142"/><path d="M37.7778 28H39.7778"/><path d="M34.7778 19.4141L36.192 17.9998"/>' : '<path d="M24.7778 7C13.7321 7 4.77783 15.9543 4.77783 27C4.77783 32.2301 6.49127 37.4362 9.77783 41H39.7778C43.0644 37.4362 44.7778 32.2301 44.7778 27C44.7778 15.9543 35.8235 7 24.7778 7Z"/><circle cx="24.7778" cy="30" r="4"/><path d="M24.7778 20V26"/><path d="M24.7778 12V14"/><path d="M9.77783 28H11.7778"/><path d="M13.7778 18L15.192 19.4142"/><path d="M37.7778 28H39.7778"/><path d="M34.7778 19.4141L36.192 17.9998"/>';

  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 49 48',
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

module.exports = DashboardOne;
