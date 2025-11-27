'use strict';

var React = require('react');

function InductionLock(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M20.1,8.2l-7.5-6c-.4-.3-.9-.3-1.2,0l-7.5,6c-.2.2-.4.5-.4.8v12c0,.6.4,1,1,1h15c.6,0,1-.4,1-1v-12c0-.3-.1-.6-.4-.8ZM9.5,15c0,.6-.4,1-1,1s-1-.4-1-1v-2c0-.6.4-1,1-1s1,.4,1,1v2ZM13,17c0,.6-.4,1-1,1s-1-.4-1-1v-6c0-.6.4-1,1-1s1,.4,1,1v6ZM16.5,15c0,.6-.4,1-1,1s-1-.4-1-1v-2c0-.6.4-1,1-1s1,.4,1,1v2Z"/>' : '<path d="M9 18V42H39V18L24 6L9 18Z"/><path d="M24 22V34"/><path d="M31 26V30"/><path d="M17 26V30"/>';

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

module.exports = InductionLock;
