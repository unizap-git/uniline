'use strict';

var React = require('react');

function CubeFour(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M21.2,6.1L12.5,1.1c-.3-.2-.7-.2-1,0L2.8,6.1c-.3.2-.5.5-.5.9v10c0,.4.2.7.5.9l8.7,5c.2,0,.3.1.5.1s.3,0,.5-.1l8.7-5c.3-.2.5-.5.5-.9V7c0-.4-.2-.7-.5-.9ZM5.4,10.4v-1.6c0-.4.2-.7.5-.9l1.4-.8c.5-.3,1.1-.1,1.4.4.3.5.1,1.1-.4,1.4l-.9.5v1c0,.6-.4,1-1,1s-1-.4-1-1ZM13.9,18.6l-1.4.8c-.2,0-.3.1-.5.1s-.3,0-.5-.1l-1.4-.8c-.5-.3-.6-.9-.4-1.4.3-.5.9-.6,1.4-.4l.9.5.9-.5c.5-.3,1.1-.1,1.4.4.3.5.1,1.1-.4,1.4ZM18.1,15.5c-.2.3-.5.5-.9.5s-.3,0-.5-.1l-4.7-2.7-4.7,2.7c-.5.3-1.1.1-1.4-.4-.3-.5-.1-1.1.4-1.4l4.7-2.7v-5.9c0-.6.4-1,1-1s1,.4,1,1v5.9l4.7,2.7c.3.2.5.5.5.9s0,.3-.1.5ZM18.6,10.4c0,.6-.4,1-1,1s-1-.4-1-1v-1l-.9-.5c-.5-.3-.6-.9-.4-1.4.3-.5.9-.6,1.4-.4l1.4.8c.3.2.5.5.5.9v1.6Z"/>' : '<path d="M15.3399 9L6.67969 14V24V34L15.3399 39L24.0002 44L32.6605 39L41.3207 34V24V14L32.6605 9L24.0002 4L15.3399 9Z"/><path d="M24.0002 24L13.6079 30M24.0002 24V11V24ZM24.0002 24L34.3925 30L24.0002 24Z"/><path d="M26.8147 35.375L24.0001 37L21.1855 35.375"/><path d="M32.4438 15.875L35.2584 17.5V20.75"/><path d="M12.7417 20.75V17.5L15.5563 15.875"/>';

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

module.exports = CubeFour;
