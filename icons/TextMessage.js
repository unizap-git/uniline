'use strict';

var React = require('react');

function TextMessage(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<polygon points="13.6 11 15.4 11 14.5 9.2 13.6 11"/>   <path d="M22,2.5H2c-.6,0-1,.4-1,1v15c0,.6.4,1,1,1h7.1l2.2,2.2c.2.2.5.3.7.3s.5,0,.7-.3l2.2-2.2h7.1c.6,0,1-.4,1-1V3.5c0-.6-.4-1-1-1ZM8,13h-1c-.6,0-1-.4-1-1s.4-1,1-1h1c.6,0,1,.4,1,1s-.4,1-1,1ZM7,9c-.6,0-1-.4-1-1s.4-1,1-1h3c.6,0,1,.4,1,1s-.4,1-1,1h-3ZM18.4,14.9c-.1,0-.3.1-.4.1-.4,0-.7-.2-.9-.6l-.7-1.4h-3.8l-.7,1.4c-.2.4-.5.6-.9.6s-.3,0-.4-.1c-.5-.2-.7-.8-.4-1.3l3.5-7s0,0,0,0c0,0,0-.1.1-.2s.1,0,.2-.1c0,0,0,0,0,0,0,0,0,0,0,0,0,0,.1,0,.2,0,0,0,.1,0,.2,0,0,0,.1,0,.2,0,0,0,.1,0,.2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,.1,0,.2.1,0,0,0,.1.1.2,0,0,0,0,0,0l3.5,7c.2.5,0,1.1-.4,1.3Z"/>' : '<path d="M44 7H4V37H19L24 42L29 37H44V7Z"/><path d="M14 16H20"/><path d="M14 24H16"/><path d="M29 14L36 28"/><path d="M28.9998 13.9998L21.9998 27.9998"/><path d="M24 24H34"/>';

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

module.exports = TextMessage;
