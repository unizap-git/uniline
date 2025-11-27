'use strict';

var React = require('react');

function GoldMedalTwo(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M8,2h8v9.5c-1.1-1-2.5-1.5-4-1.5s-2.9.6-4,1.5V2Z"/>   <path d="M12,23c-3.9,0-7-3.1-7-7s.7-3.6,2-4.9v-.6l-3.6-2.7c-.3-.2-.4-.5-.4-.8V2c0-.6.4-1,1-1h16c.6,0,1,.4,1,1v5c0,.3-.1.6-.4.8l-3.6,2.7v.6c1.3,1.3,2,3.1,2,4.9,0,3.9-3.1,7-7,7ZM8.7,12.3c-1.1.9-1.7,2.3-1.7,3.7,0,2.8,2.2,5,5,5s5-2.2,5-5-.6-2.8-1.7-3.7c0,0,0,0,0,0-1.8-1.6-4.8-1.6-6.7,0,0,0,0,0,0,0ZM12,9c1,0,2.1.2,3,.7V3h-6v6.7c.9-.4,2-.7,3-.7ZM17,3v5l2-1.5v-3.5h-2ZM5,6.5l2,1.5V3h-2v3.5Z"/>   <path d="M16,2h4v5l-4,3"/>   <path d="M8,2h-4v5l4,3"/>   <path d="M13,19.5h-2c-.6,0-1-.4-1-1s.4-1,1-1v-2.5c-.4,0-.7-.2-.9-.6s0-1.1.4-1.3l1-.5c.3-.2.7-.1,1,0,.3.2.5.5.5.9v4c.6,0,1,.4,1,1s-.4,1-1,1Z"/>' : '<path d="M36 32C36 28.446 34.455 25.2529 32 23.0556C29.877 21.1554 27.0734 20 24 20C20.9266 20 18.123 21.1554 16 23.0556C13.545 25.2529 12 28.446 12 32C12 38.6274 17.3726 44 24 44C30.6274 44 36 38.6274 36 32Z"/><path d="M16 4H32V20V23.0556C29.877 21.1554 27.0734 20 24 20C20.9266 20 18.123 21.1554 16 23.0556V20V4Z"/><path d="M16 4H32M16 4H8V14L16 20M16 4V20M32 4H40V14L32 20M32 4V20M16 23.0556C18.123 21.1554 20.9266 20 24 20C27.0734 20 29.877 21.1554 32 23.0556M16 23.0556C13.545 25.2529 12 28.446 12 32C12 38.6274 17.3726 44 24 44C30.6274 44 36 38.6274 36 32C36 28.446 34.455 25.2529 32 23.0556M16 23.0556V20M32 23.0556V20"/><path d="M32 4H40V14L32 20"/><path d="M16 4H8V14L16 20"/><path d="M36 32C36 28.446 34.455 25.2529 32 23.0556C29.877 21.1554 27.0734 20 24 20C20.9266 20 18.123 21.1554 16 23.0556C13.545 25.2529 12 28.446 12 32C12 38.6274 17.3726 44 24 44C30.6274 44 36 38.6274 36 32Z"/><path d="M16 4.00009H32V20.0001V23.0557C29.877 21.1555 27.0734 20.0001 24 20.0001C20.9266 20.0001 18.123 21.1555 16 23.0557V20.0001V4.00009Z"/><path d="M24 37V27L22 28M24 37H26M24 37H22"/>';

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

module.exports = GoldMedalTwo;
