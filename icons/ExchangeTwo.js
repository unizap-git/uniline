'use strict';

var React = require('react');

function ExchangeTwo(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M20.1,8.2l-7.5-6c-.4-.3-.9-.3-1.2,0l-7.5,6c-.2.2-.4.5-.4.8v12c0,.6.4,1,1,1h15c.6,0,1-.4,1-1v-12c0-.3-.1-.6-.4-.8ZM9.5,18c0,.6-.4,1-1,1s-1-.4-1-1v-2c0-.6.4-1,1-1s1,.4,1,1v2ZM13,18c0,.6-.4,1-1,1s-1-.4-1-1v-3c0-.6.4-1,1-1s1,.4,1,1v3ZM11.8,12.7l-.9-.9-1.8,1.4c-.2.1-.4.2-.6.2s-.6-.1-.8-.4c-.3-.4-.3-1.1.2-1.4l2.5-2c.4-.3,1-.3,1.3,0l.9.9,2.3-1.9c.4-.4,1.1-.3,1.4.1.4.4.3,1.1-.1,1.4l-3,2.5c-.4.3-1,.3-1.3,0ZM16.5,18c0,.6-.4,1-1,1s-1-.4-1-1v-5c0-.6.4-1,1-1s1,.4,1,1v5Z"/>' : '<path d="M9 18V42H39V18L24 6L9 18Z"/><path d="M24 30V36"/><path d="M31 26V36"/><path d="M17 32V36"/><path d="M17 25L22 21L25 24L31 19"/>';

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

module.exports = ExchangeTwo;
