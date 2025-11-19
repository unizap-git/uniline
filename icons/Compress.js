'use strict';

var React = require('react');

function Compress(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M16,21c-.6,0-1-.4-1-1v-4c0-.6.4-1,1-1h4c.6,0,1,.4,1,1s-.4,1-1,1h-3v3c0,.6-.4,1-1,1ZM8,21c-.6,0-1-.4-1-1v-3h-3c-.6,0-1-.4-1-1s.4-1,1-1h4c.6,0,1,.4,1,1v4c0,.6-.4,1-1,1ZM20,9h-4c-.6,0-1-.4-1-1v-4c0-.6.4-1,1-1s1,.4,1,1v3h3c.6,0,1,.4,1,1s-.4,1-1,1ZM8,9h-4c-.6,0-1-.4-1-1s.4-1,1-1h3v-3c0-.6.4-1,1-1s1,.4,1,1v4c0,.6-.4,1-1,1Z"/>' : '<path d="M4 8h4V4m12 4h-4V4M4 16h4v4m12-4h-4v4"/>';

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

module.exports = Compress;
