'use strict';

var React = require('react');

function AArrowDown(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<polygon points="6.2 11.8 9 11.8 7.6 8.4 6.2 11.8"/>   <path d="M21.7,3H2.3c-.7,0-1.3.6-1.3,1.3v15.4c0,.7.6,1.3,1.3,1.3h19.4c.7,0,1.3-.6,1.3-1.3V4.3c0-.7-.6-1.3-1.3-1.3ZM11.5,15.7c-.4.2-.9,0-1-.4l-.8-1.9h-4.1l-.8,1.9c-.1.3-.4.5-.7.5s-.2,0-.3,0c-.4-.2-.6-.6-.4-1l3.2-7.7c.1-.3.4-.5.6-.6.3-.1.6-.1.9,0,.3.1.5.4.6.6l3.2,7.7c.2.4,0,.9-.4,1ZM20.5,12.4l-3.2,3.2c0,0-.2.1-.3.2,0,0-.2,0-.3,0s-.2,0-.3,0c0,0-.2,0-.3-.2l-3.2-3.2c-.3-.3-.3-.8,0-1.1s.8-.3,1.1,0l1.8,1.8v-5.3c0-.4.4-.8.8-.8s.8.4.8.8v5.3l1.8-1.8c.3-.3.8-.3,1.1,0s.3.8,0,1.1Z"/>' : '<path d="m14 12 4 4 4-4"/><path d="M18 16V7"/><path d="m2 16 4.039-9.69a.5.5 0 0 1 .923 0L11 16"/><path d="M3.304 13h6.392"/>';

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

module.exports = AArrowDown;
