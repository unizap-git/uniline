'use strict';

var React = require('react');

function MessageEmoji(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M22,2.5H2c-.6,0-1,.4-1,1v15c0,.6.4,1,1,1h2.5v1.5c0,.3.2.7.5.9.2,0,.3.1.5.1s.3,0,.4-.1l4.8-2.4h11.3c.6,0,1-.4,1-1V3.5c0-.6-.4-1-1-1ZM7.5,8c0-.6.4-1,1-1s1,.4,1,1v.5c0,.6-.4,1-1,1s-1-.4-1-1v-.5ZM16.4,12.9c0,.1-1.3,2.6-4.4,2.6s-4.3-2.4-4.4-2.6c-.2-.5,0-1.1.4-1.3.5-.2,1.1,0,1.3.4,0,0,.8,1.4,2.6,1.4s2.6-1.4,2.6-1.5c.3-.5.9-.7,1.3-.4.5.3.7.8.4,1.3ZM16.5,8.5c0,.6-.4,1-1,1s-1-.4-1-1v-.5c0-.6.4-1,1-1s1,.4,1,1v.5Z"/>' : '<path d="M44 7H4V37H11V42L21 37H44V7Z"/><path d="M31 16V17"/><path d="M17 16V17"/><path d="M31 25C31 25 29 29 24 29C19 29 17 25 17 25"/>';

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

module.exports = MessageEmoji;
