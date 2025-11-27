'use strict';

var React = require('react');

function BabyTaste(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M22,11c0,0-.1,0-.2,0-.8-4.2-4.3-7.4-8.5-7.9,0-.1.1-.2.2-.2.5-.3.6-.9.4-1.4-.3-.5-.9-.6-1.4-.4-.4.2-.6.5-.8.8-.6-.5-1.5-.9-2.7-.9s-1,.4-1,1,.4,1,1,1,.7,0,1,.2c-3.9.8-7,3.9-7.8,7.8,0,0-.1,0-.2,0-.6,0-1,.4-1,1v2c0,.6.4,1,1,1s.1,0,.2,0c.9,4.6,5,8,9.8,8s8.9-3.5,9.8-8c0,0,.1,0,.2,0,.6,0,1-.4,1-1v-2c0-.6-.4-1-1-1ZM7.5,9.5c0-.6.4-1,1-1s1,.4,1,1v2c0,.6-.4,1-1,1s-1-.4-1-1v-2ZM16.4,16.9s0,0,0,0c0,0,0,0,0,0,0,.1-1.3,2.6-4.4,2.6s-4.3-2.4-4.4-2.6c-.2-.5,0-1.1.4-1.3.5-.2,1.1,0,1.3.4,0,0,.8,1.4,2.6,1.4s.4,0,.5,0c.2-1.5.7-3.9,2.5-3.9s1.1.2,1.4.7c.6.9.2,2.3,0,2.7ZM16.5,11.5h-2c-.6,0-1-.4-1-1s.4-1,1-1h2c.6,0,1,.4,1,1s-.4,1-1,1Z"/>' : '<path d="M24 44C33.9411 44 42 35.9411 42 26C42 16.0589 33.9411 8 24 8C14.0589 8 6 16.0589 6 26C6 35.9411 14.0589 44 24 44Z"/><path d="M24 8C23.75 7 22 4 18 4"/><path d="M24 8C24.0833 7 24.6 4.8 26 4"/><path d="M31 33C31 33 29 37 24 37C19 37 17 33 17 33"/><path d="M31 33C31 33 32.5 29 30 29C27.5 29 27 36 27 36"/><path d="M33 21H29"/><path d="M17 19V23"/><path d="M4 24V28"/><path d="M44 24V28"/>';

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

module.exports = BabyTaste;
