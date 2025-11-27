'use strict';

var React = require('react');

function MapDraw(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<g>     <path d="M15.5,2s0,0,.1,0c0,0,0,0-.1,0Z"/>     <path d="M22.4,5.1l-6.5-3s0,0,0,0c.4.2.6.5.6.9v15c0,.6-.4,1-1,1s-1-.4-1-1V3c0-.4.3-.8.6-.9,0,0,0,0,0,0l-6.6,2.8L2.4,2.1c-.3-.1-.7-.1-1,0-.3.2-.5.5-.5.8v15c0,.4.2.7.6.9l6.5,3s0,0,0,0c-.4-.2-.6-.5-.6-.9V6c0-.6.4-1,1-1s1,.4,1,1v15c0,.4-.3.8-.6.9,0,0,0,0,0,0l6.6-2.8,6.1,2.8c.1,0,.3,0,.4,0s.4,0,.5-.2c.3-.2.5-.5.5-.8V6c0-.4-.2-.7-.6-.9Z"/>     <path d="M8.5,22s0,0-.1,0c0,0,0,0,.1,0Z"/>   </g>   <path d="M8.5,7c-.1,0-.3,0-.4,0l-3.2-1.5c-.5-.2-.7-.8-.5-1.3.2-.5.8-.7,1.3-.5l2.8,1.3,6.6-2.8c.3-.1.6-.1.8,0l3.2,1.5c.5.2.7.8.5,1.3-.2.5-.8.7-1.3.5l-2.8-1.3-6.6,2.8c-.1,0-.3,0-.4,0Z"/>   <path d="M8.5,22c-.1,0-.3,0-.4,0l-3.2-1.5c-.5-.2-.7-.8-.5-1.3.2-.5.8-.7,1.3-.5l2.8,1.3,6.6-2.8c.3-.1.6-.1.8,0l3.2,1.5c.5.2.7.8.5,1.3-.2.5-.8.7-1.3.5l-2.8-1.3-6.6,2.8c-.1,0-.3,0-.4,0Z"/>' : '<path d="M17 12L4 6V36L17 42L31 36L44 42V12L31 6L17 12Z"/><path d="M31 6V36"/><path d="M17 12V42"/><path d="M10.5 9L17 12L31 6L37.5 9"/><path d="M10.5 39L17 42L31 36L37.5 39"/>';

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

module.exports = MapDraw;
