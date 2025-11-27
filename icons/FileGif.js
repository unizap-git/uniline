'use strict';

var React = require('react');

function FileGif(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M20.7,6.3L15.7,1.3c-.2-.2-.4-.3-.7-.3H5c-1.1,0-2,.9-2,2v18c0,1.1.9,2,2,2h14c1.1,0,2-.9,2-2V7c0-.3-.1-.5-.3-.7ZM14.5,16v-1.5h-1.5c-.6,0-1-.4-1-1s.4-1,1-1h2.5c.6,0,1,.4,1,1v3.5c0,.6-.4,1-1,1h-7c-.6,0-1-.4-1-1v-8c0-.6.4-1,1-1h7c.6,0,1,.4,1,1s-.4,1-1,1h-6v6h5Z"/>' : '<path d="M10 4H30L40 14V42C40 43.1046 39.1046 44 38 44H10C8.89543 44 8 43.1046 8 42V6C8 4.89543 8.89543 4 10 4Z"/><path d="M31.0083 18H17V34H31.0083V27.0083H26"/>';

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

module.exports = FileGif;
