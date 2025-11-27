'use strict';

var React = require('react');

function FileConversion(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M15,2l5,5"/>   <path d="M20,6h-4V2c0-.6-.4-1-1-1H5c-1.1,0-2,.9-2,2v18c0,1.1.9,2,2,2h14c1.1,0,2-.9,2-2V7c0-.6-.4-1-1-1ZM15.5,16.5h-4.6l.8.8c.4.4.4,1,0,1.4s-.5.3-.7.3-.5,0-.7-.3l-2.5-2.5c0,0-.2-.2-.2-.3-.1-.2-.1-.5,0-.8.1-.2.3-.4.5-.5.1,0,.3,0,.4,0h7c.6,0,1,.4,1,1s-.4,1-1,1ZM16.4,12.9c-.1.2-.3.4-.5.5-.1,0-.3,0-.4,0h-7c-.6,0-1-.4-1-1s.4-1,1-1h4.6l-.8-.8c-.4-.4-.4-1,0-1.4s1-.4,1.4,0l2.5,2.5c0,0,.2.2.2.3.1.2.1.5,0,.8Z"/>' : '<path d="M10 44H38C39.1046 44 40 43.1046 40 42V14H30V4H10C8.89543 4 8 4.89543 8 6V42C8 43.1046 8.89543 44 10 44Z"/><path d="M30 4L40 14"/><path d="M17 25L31 25"/><path d="M17 31L31 31"/><path d="M31 25L26 20"/><path d="M22 36L17 31"/>';

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

module.exports = FileConversion;
