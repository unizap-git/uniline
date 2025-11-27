'use strict';

var React = require('react');

function Npm(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M20,2.9H4c-.6,0-1,.4-1,1v16c0,.6.4,1,1,1h8c.6,0,1-.4,1-1V7.9h3v12c0,.6.4,1,1,1h3c.6,0,1-.4,1-1V3.9c0-.6-.4-1-1-1Z"/>' : '<path d="M9.5,5.9h29c1.9,0,3.6,1.7,3.6,3.6v29c0,1.9-1.7,3.6-3.6,3.6h-5.3V15.1h-8.9v27h-14.5c-1.9,0-3.6-1.7-3.6-3.6V9.5c0-1.9,1.7-3.6,3.6-3.6h-.2Z"/>';

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

module.exports = Npm;
