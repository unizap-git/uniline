'use strict';

var React = require('react');

function ShoppingCartDel(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M19.5,17H6.5c-.5,0-.9-.3-1-.8L2.5,4h-1c-.6,0-1-.4-1-1s.4-1,1-1h1.8c.5,0,.9.3,1,.8l.6,2.2h17.2c.3,0,.6.1.8.4s.3.6.2.9l-2.5,10c-.1.4-.5.8-1,.8ZM7.3,15h11.4l2-8H5.3l2,8Z"/>   <circle cx="6.5" cy="19.5" r="1.5"/>   <circle cx="19.5" cy="19.5" r="1.5"/>   <path d="M4,6l2.5,10h13l2.5-10H4ZM15,12h-4c-.6,0-1-.4-1-1s.4-1,1-1h4c.6,0,1,.4,1,1s-.4,1-1,1Z"/>' : '<path d="M39 32H13L8 12H44L39 32Z"/><path d="M3 6H6.5L8 12M8 12L13 32H39L44 12H8Z"/><circle cx="13" cy="39" r="3"/><circle cx="39" cy="39" r="3"/><path d="M22 22H30"/>';

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

module.exports = ShoppingCartDel;
