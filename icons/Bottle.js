'use strict';

var React = require('react');

function Bottle(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M9.9,5.5h4.1c.9,0,1.6.6,1.9,1.4l.7,2.1H7.3l.7-2.1c.3-.8,1-1.4,1.9-1.4Z"/>   <path d="M10.5,5.5v-2c0-.8.7-1.5,1.5-1.5s1.5.7,1.5,1.5v2" stroke-miterlimit="2"/>   <path d="M18,8H6c-.6,0-1,.4-1,1v13c0,.6.4,1,1,1h12c.6,0,1-.4,1-1v-13c0-.6-.4-1-1-1ZM10.2,18c0,.6-.4,1-1,1s-1-.4-1-1v-5c0-.6.4-1,1-1s1,.4,1,1v5Z"/>' : '<path d="M36 18H12V44H36V18Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M19.8943 11H28.1057C29.8329 11 31.365 12.1086 31.9051 13.7492L33.3045 18H14.6953L16.0949 13.7491C16.635 12.1086 18.1671 11 19.8943 11Z"/><path d="M21 11V7C21 5.34315 22.3431 4 24 4C25.6569 4 27 5.34315 27 7V11"/><path d="M18.5 26V36"/>';

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

module.exports = Bottle;
