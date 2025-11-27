'use strict';

var React = require('react');

function RamTwo(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M42.2,19.3c.2-.1.3-.3.3-.5v-3.8c0-.4-.3-.6-.6-.6H6.7c-.4,0-.6.3-.6.6v3.8c0,.2.1.4.3.5l2.3,1.6v4.4l-2.3,1.5c-.2.1-.3.3-.3.5v3.7c0,.4.3.6.6.6h35.1c.4,0,.6-.3.6-.6v-3.7c0-.2-.1-.4-.3-.5l-2.3-1.5v-4.4l2.3-1.6ZM18.4,27.1c0,.4-.3.6-.6.6h-4.7c-.4,0-.6-.3-.6-.6v-8.2c0-.4.3-.6.6-.6h4.7c.4,0,.6.3.6.6v8.2ZM27.2,27.1c0,.4-.3.6-.6.6h-4.7c-.4,0-.6-.3-.6-.6v-8.2c0-.4.3-.6.6-.6h4.7c.4,0,.6.3.6.6v8.2ZM36.1,27.1c0,.4-.3.6-.6.6h-4.7c-.4,0-.6-.3-.6-.6v-8.2c0-.4.3-.6.6-.6h4.7c.4,0,.6.3.6.6v8.2Z"/>   <path d="M26,30.4H9c-.4,0-.6.3-.6.6v4.5c0,.4.3.6.6.6h17c.4,0,.6-.3.6-.6v-4.5c0-.4-.3-.6-.6-.6ZM12.8,35.6h-1.3v-4.5h1.3v4.5ZM16.3,35.6h-1.3v-4.5h1.3v4.5ZM19.8,35.6h-1.3v-4.5h1.3v4.5ZM23.3,35.6h-1.3v-4.5h1.3v4.5Z"/>   <path d="M39.5,30.4h-10.3c-.4,0-.6.3-.6.6v4.5c0,.4.3.6.6.6h10.3c.4,0,.6-.3.6-.6v-4.5c0-.4-.3-.6-.6-.6ZM33.1,35.6h-1.3v-4.5h1.3v4.5ZM36.6,35.6h-1.3v-4.5h1.3v4.5Z"/>' : '<polygon points="39.5 24.4 39.5 19.1 42.2 17.2 42.2 13.3 5.8 13.3 5.8 17.2 8.5 19.1 8.5 24.4 5.8 26.2 5.8 30 42.2 30 42.2 26.2 39.5 24.4"/>   <rect x="12.4" y="17.4" width="4.8" height="8.5"/>   <rect x="8.2" y="30" width="17.6" height="4.7"/>   <rect x="29.1" y="30" width="10.7" height="4.7"/>   <rect x="21.6" y="17.4" width="4.8" height="8.5"/>   <rect x="30.7" y="17.4" width="4.8" height="8.5"/>   <line x1="11.5" y1="30" x2="11.5" y2="34.7"/>   <line x1="15.1" y1="30" x2="15.1" y2="34.7"/>   <line x1="18.8" y1="30" x2="18.8" y2="34.7"/>   <line x1="22.4" y1="30" x2="22.4" y2="34.7"/>   <line x1="32.5" y1="30" x2="32.5" y2="34.7"/>   <line x1="36.1" y1="30" x2="36.1" y2="34.7"/>';

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

module.exports = RamTwo;
