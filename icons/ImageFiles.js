'use strict';

var React = require('react');

function ImageFiles(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M15,2l5,5"/>   <path d="M20,6h-4V2c0-.6-.4-1-1-1H5c-1.1,0-2,.9-2,2v18c0,1.1.9,2,2,2h14c1.1,0,2-.9,2-2V7c0-.6-.4-1-1-1ZM9,5.5c1.7,0,3,1.3,3,3s-1.3,3-3,3-3-1.3-3-3,1.3-3,3-3ZM17.5,18.5c0,.6-.4,1-1,1H7.5c-.6,0-1-.4-1-1v-4.5c0-.3.2-.6.4-.8.3-.2.6-.2.9,0l3.6,1.5,4.3-4.7c.3-.3.7-.4,1.1-.3.4.1.6.5.6.9v8Z"/>' : '<path d="M10 44H38C39.1046 44 40 43.1046 40 42V14H30V4H10C8.89543 4 8 4.89543 8 6V42C8 43.1046 8.89543 44 10 44Z"/><path d="M30 4L40 14"/><circle cx="18" cy="17" r="4"/><path d="M15 28V37H33V21L23.4894 31.5L15 28Z"/>';

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

module.exports = ImageFiles;
