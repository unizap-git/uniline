'use strict';

var React = require('react');

function TireSwing(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M22.7,2.7c.4-.4.4-1,0-1.4-.4-.4-1-.4-1.4,0,0,0-2.9,2.7-9.3,2.7S2.8,1.4,2.7,1.3c-.4-.4-1-.4-1.4,0-.4.4-.4,1,0,1.4.1.1,3.1,3,9.7,3.3v1h-2c-2.7,0-4.8,3.2-5,7.4,0,0,0,0,0,0s0,0,0,0c0,.1,0,.3,0,.4,0,4.5,2.2,8,5,8h6c2.8,0,5-3.5,5-8s-2.2-8-5-8h-2v-1c6.6-.3,9.6-3.1,9.7-3.3ZM6.4,12h3.9c-.1.5-.2,1-.3,1.5h-4c0-.5.2-1,.3-1.5ZM6,15.5h4c0,.7.1,1.4.2,2h-4c-.1-.6-.2-1.3-.3-2ZM9,21c-.7,0-1.4-.6-1.9-1.5h3.8c.2.6.5,1.1.8,1.5h-2.7ZM11.1,10h-3.7c.5-.6,1.1-1,1.6-1h2.7c-.2.3-.4.6-.6,1ZM15,11c1.4,0,2.5,1.7,2.5,4s-1.1,4-2.5,4-2.5-1.7-2.5-4,1.1-4,2.5-4Z"/>' : '<path d="M4 4C4 4 10 10 24 10C38 10 44 4 44 4"/><path d="M24 10V16"/><ellipse cx="30" cy="30" rx="8" ry="14"/><ellipse cx="30" cy="30" rx="3" ry="6"/><path d="M18 44C13.5817 44 10 37.732 10 30C10 22.268 13.5817 16 18 16"/><path d="M30 16H18"/><path d="M30 44H18"/><path d="M22 29H10"/><path d="M23 22L12 22"/><path d="M23 37H12"/>';

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

module.exports = TireSwing;
