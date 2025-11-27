'use strict';

var React = require('react');

function Mail(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<g>     <path d="M2.6,3.7l9.4,7,9.4-7c.2-.2.4-.2.7-.2,0,0,0,0,0,0H2s0,0,0,0c.2,0,.5,0,.7.2Z"/>     <path d="M22.7,3.9c0,0,0,0-.2-.1,0,0,.1,0,.2.1Z"/>     <path d="M22.3,3.6c0,0,.1,0,.2,0,0,0-.1,0-.2,0Z"/>     <path d="M1.4,3.7c0,0-.1,0-.2.1,0,0,0,0,.2-.1Z"/>     <path d="M22.9,4.2c0,0,0-.1,0-.2,0,0,0,.1,0,.2Z"/>     <path d="M1.6,3.6c0,0,.1,0,.2,0,0,0-.1,0-.2,0Z"/>     <path d="M1.1,4.2c0,0,0-.1,0-.2,0,0,0,.1,0,.2Z"/>     <path d="M23,4.4c0,.3,0,.7-.4.9l-10,7.5c-.2.1-.4.2-.6.2s-.4,0-.6-.2L1.4,5.3c-.3-.2-.4-.6-.4-.9,0,0,0,0,0,.1v15c0,.6.4,1,1,1h20c.6,0,1-.4,1-1V4.5s0,0,0-.1Z"/>   </g>   <path d="M2,13c-.6,0-1-.4-1-1v-7.5c0-.6.4-1,1-1h10c.6,0,1,.4,1,1s-.4,1-1,1H3v6.5c0,.6-.4,1-1,1Z"/>   <path d="M22,13c-.6,0-1-.4-1-1v-6.5h-9c-.6,0-1-.4-1-1s.4-1,1-1h10c.6,0,1,.4,1,1v7.5c0,.6-.4,1-1,1Z"/>' : '<path d="M4 39H44V24V9H24H4V24V39Z"/><path d="M4 9L24 24L44 9"/><path d="M24 9H4V24"/><path d="M44 24V9H24"/>';

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

module.exports = Mail;
