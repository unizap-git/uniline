'use strict';

var React = require('react');

function ExchangeOne(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M20.1,8.2l-7.5-6c-.4-.3-.9-.3-1.2,0l-7.5,6c-.2.2-.4.5-.4.8v12c0,.6.4,1,1,1h15c.6,0,1-.4,1-1v-12c0-.3-.1-.6-.4-.8ZM15.5,16h-4.6l.8.8c.4.4.4,1,0,1.4s-.5.3-.7.3-.5,0-.7-.3l-2.5-2.5c0,0-.2-.2-.2-.3-.1-.2-.1-.5,0-.8.1-.2.3-.4.5-.5.1,0,.3,0,.4,0h7c.6,0,1,.4,1,1s-.4,1-1,1ZM16.4,12.4c-.1.2-.3.4-.5.5-.1,0-.3,0-.4,0h-7c-.6,0-1-.4-1-1s.4-1,1-1h4.6l-.8-.8c-.4-.4-.4-1,0-1.4s1-.4,1.4,0l2.5,2.5c0,0,.2.2.2.3.1.2.1.5,0,.8Z"/>' : '<path d="M9 18V42H39V18L24 6L9 18Z"/><path d="M17 24L31 24"/><path d="M17 30L31 30"/><path d="M31 24L26 19"/><path d="M22 35L17 30"/>';

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

module.exports = ExchangeOne;
