'use strict';

var React = require('react');

function CryingBaby(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M22,11c0,0-.1,0-.2,0-.8-4.2-4.3-7.4-8.5-7.9,0-.1.1-.2.2-.2.5-.3.6-.9.4-1.4-.3-.5-.9-.6-1.4-.4-.4.2-.6.5-.8.8-.6-.5-1.5-.9-2.7-.9s-1,.4-1,1,.4,1,1,1,.7,0,1,.2c-3.9.8-7,3.9-7.8,7.8,0,0-.1,0-.2,0-.6,0-1,.4-1,1v2c0,.6.4,1,1,1s.1,0,.2,0c.9,4.6,5,8,9.8,8s8.9-3.5,9.8-8c0,0,.1,0,.2,0,.6,0,1-.4,1-1v-2c0-.6-.4-1-1-1ZM6.5,12.5v-1.7c-.2-.1-.4-.4-.5-.7,0-.5.3-1.1.8-1.2l3-.5c.5,0,1.1.3,1.2.8,0,.5-.3,1.1-.8,1.2l-1.7.3v1.7c0,.6-.4,1-1,1s-1-.4-1-1ZM15.9,18.4c-.1,0-.3.1-.4.1-.4,0-.7-.2-.9-.5,0,0-.8-1.5-2.6-1.5s-2.6,1.4-2.6,1.5c-.3.5-.9.7-1.3.4s-.7-.8-.4-1.3,1.3-2.6,4.4-2.6,4.3,2.4,4.4,2.6c.2.5,0,1.1-.4,1.3ZM17.5,10.8v1.7c0,.6-.4,1-1,1s-1-.4-1-1v-1.7l-1.7-.3c-.5,0-.9-.6-.8-1.2,0-.5.6-.9,1.2-.8l3,.5c.5,0,.9.6.8,1.2,0,.3-.2.5-.5.7Z"/>' : '<path d="M24 44C33.9411 44 42 35.9411 42 26C42 16.0589 33.9411 8 24 8C14.0589 8 6 16.0589 6 26C6 35.9411 14.0589 44 24 44Z"/><path d="M24 8C23.75 7 22 4 18 4"/><path d="M24 8C24.0833 7 24.6 4.8 26 4"/><path d="M31 35C31 35 29 31 24 31C19 31 17 35 17 35"/><path d="M34 20L28 19"/><path d="M20 19L14 20"/><path d="M15 20V25"/><path d="M33 20V25"/><path d="M4 24V28"/><path d="M44 24V28"/>';

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

module.exports = CryingBaby;
