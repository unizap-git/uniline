'use strict';

var React = require('react');

function FileHiding(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M15,2l5,5"/>   <path d="M20,6h-4V2c0-.6-.4-1-1-1H5c-1.1,0-2,.9-2,2v18c0,1.1.9,2,2,2h14c1.1,0,2-.9,2-2V7c0-.6-.4-1-1-1ZM17.3,15.8c-.2.2-.5.3-.7.3s-.5,0-.7-.3l-1.1-1.1c-.1,0-.3.2-.4.2l.3,1.3c.1.5-.2,1.1-.7,1.2,0,0-.2,0-.3,0-.4,0-.8-.3-1-.7l-.3-1.3c-.2,0-.3,0-.5,0s-.3,0-.5,0l-.3,1.3c-.1.4-.5.7-1,.7s-.2,0-.3,0c-.5-.1-.9-.7-.7-1.2l.3-1.3c-.1,0-.3-.1-.4-.2l-1,1c-.2.2-.5.3-.7.3s-.5,0-.7-.3c-.4-.4-.4-1,0-1.4l1-1c-.3-.5-.6-1-.7-1.5-.2-.5.1-1.1.7-1.3.5-.2,1.1.1,1.3.7.1.3.3.7.5,1,.6.8,1.5,1.3,2.6,1.3s2-.5,2.6-1.3c.2-.3.4-.6.5-1,.2-.5.7-.8,1.2-.7.5.2.8.7.7,1.2-.2.5-.4,1-.7,1.5l1.1,1.1c.4.4.4,1,0,1.4Z"/>' : '<path d="M10 44H38C39.1046 44 40 43.1046 40 42V14H30V4H10C8.89543 4 8 4.89543 8 6V42C8 43.1046 8.89543 44 10 44Z"/><path d="M30 4L40 14"/><path d="M16 23C16.2821 23.9145 16.7095 24.7628 17.2546 25.5166C18.7827 27.63 21.2351 29 24 29C26.7649 29 29.2173 27.63 30.7454 25.5166C31.2905 24.7628 31.7179 23.9145 32 23"/><path d="M21.5215 29.0684L20.4862 32.9321"/><path d="M26.4863 29.0684L27.5216 32.9321"/><path d="M30.3535 27.3536L33.1819 30.182"/><path d="M15 30.0103L17.8285 27.1819"/>';

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

module.exports = FileHiding;
