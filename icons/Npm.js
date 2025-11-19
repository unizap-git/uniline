'use strict';

var React = require('react');

function Npm(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M20,2.9H4c-.6,0-1,.4-1,1v16c0,.6.4,1,1,1h8c.6,0,1-.4,1-1V7.9h3v12c0,.6.4,1,1,1h3c.6,0,1-.4,1-1V3.9c0-.6-.4-1-1-1Z"/>' : '<path d="M5.2,3.5h13.6c.9,0,1.7.8,1.7,1.7v13.6c0,.9-.8,1.7-1.7,1.7h-2.5V7.8h-4.2v12.7h-6.8c-.9,0-1.7-.8-1.7-1.7V5.2c0-.9.8-1.7,1.7-1.7Z"/>';

  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
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

module.exports = Npm;
