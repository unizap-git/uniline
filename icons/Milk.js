'use strict';

var React = require('react');

function Milk(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M18.7,8.7l-2.3-3.8c-.2-.3-.5-.5-.8-.5h-7c-.3,0-.7.2-.8.5l-2.3,3.8c-.2.3-.3.7-.3,1.1v11.2c0,1.1.9,2,2,2h10c1.1,0,2-.9,2-2v-11.2c0-.4-.1-.7-.3-1.1ZM15.5,16.5c0,.6-.4,1-1,1s-1-.4-1-1v-1.7l-.7.9c-.4.5-1.2.5-1.5,0l-.7-.9v1.7c0,.6-.4,1-1,1s-1-.4-1-1v-4.5c0-.4.3-.8.7-.9.4-.1.8,0,1.1.3l1.7,2.1,1.7-2.1c.3-.3.7-.4,1.1-.3.4.1.7.5.7.9v4.5Z"/>   <path d="M8.5,2h7v3.5h-7v-3.5Z"/>' : '<path d="M12 19.5736C12 19.1988 12.1053 18.8315 12.304 18.5136L17 11H31L35.696 18.5136C35.8947 18.8315 36 19.1988 36 19.5736V42C36 43.1046 35.1046 44 34 44H14C12.8954 44 12 43.1046 12 42V19.5736Z"/><path d="M19 33V24L24 30L29 24V33"/><path d="M17 4H31V11H17V4Z"/>';

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

module.exports = Milk;
