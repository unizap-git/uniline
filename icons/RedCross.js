'use strict';

var React = require('react');

function RedCross(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M12,1C5.9,1,1,5.9,1,12s4.9,11,11,11,11-4.9,11-11S18.1,1,12,1ZM19,13.5c0,.6-.4,1-1,1h-3.5v3.5c0,.6-.4,1-1,1h-3c-.6,0-1-.4-1-1v-3.5h-3.5c-.6,0-1-.4-1-1v-3c0-.6.4-1,1-1h3.5v-3.5c0-.6.4-1,1-1h3c.6,0,1,.4,1,1v3.5h3.5c.6,0,1,.4,1,1v3Z"/>' : '<circle cx="24" cy="24" r="20"/><path d="M27 12H21V21L12 21V27H21V36H27V27L36 27V21H27V12Z"/>';

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

module.exports = RedCross;
