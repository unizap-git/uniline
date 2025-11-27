'use strict';

var React = require('react');

function FilePdf(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<rect x="10" y="10" width="4" height="2"/>   <path d="M20.7,6.3L15.7,1.3c-.2-.2-.4-.3-.7-.3H5c-1.1,0-2,.9-2,2v18c0,1.1.9,2,2,2h14c1.1,0,2-.9,2-2V7c0-.3-.1-.5-.3-.7ZM16,13c0,.6-.4,1-1,1h-5v3c0,.6-.4,1-1,1s-1-.4-1-1v-8s0,0,0,0c0-.1,0-.2,0-.3,0-.1.1-.2.2-.3,0,0,0,0,0,0h0c0,0,.2-.2.3-.2.1,0,.3,0,.4,0h6c.6,0,1,.4,1,1v4Z"/>' : '<path d="M10 4H30L40 14V42C40 43.1046 39.1046 44 38 44H10C8.89543 44 8 43.1046 8 42V6C8 4.89543 8.89543 4 10 4Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M18 18H30V25.9917L18.0083 26L18 18Z"/><path d="M18 18V34"/>';

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

module.exports = FilePdf;
