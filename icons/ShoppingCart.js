'use strict';

var React = require('react');

function ShoppingCart(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M1.5,3h1.8l.8,3M4,6l2.5,10h13l2.5-10H4Z"/>   <circle cx="6.5" cy="19.5" r="1.5"/>   <circle cx="19.5" cy="19.5" r="1.5"/>   <path d="M4,6l2.5,10h13l2.5-10H4ZM15,12h-1v1c0,.6-.4,1-1,1s-1-.4-1-1v-1h-1c-.6,0-1-.4-1-1s.4-1,1-1h1v-1c0-.6.4-1,1-1s1,.4,1,1v1h1c.6,0,1,.4,1,1s-.4,1-1,1Z"/>' : '<path d="M39 32H13L8 12H44L39 32Z"/><path d="M3 6H6.5L8 12M8 12L13 32H39L44 12H8Z"/><circle cx="13" cy="39" r="3"/><circle cx="39" cy="39" r="3"/><path d="M22 22H30"/><path d="M26 26V18"/>';

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

module.exports = ShoppingCart;
