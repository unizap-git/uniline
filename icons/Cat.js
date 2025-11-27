'use strict';

var React = require('react');

function Cat(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M22.1,14.5h-.2c0-.5.1-1,.1-1.5V4.2c0-.8-.5-1.5-1.2-1.8-.7-.3-1.6-.2-2.2.3l-2.4,2.1c-2.7-1.1-5.9-1.1-8.6,0l-2.4-2.1c-.6-.5-1.4-.7-2.2-.3-.7.3-1.2,1-1.2,1.8v8.8c0,.5,0,1,.1,1.5h-.2c-.6,0-1,.5-.9,1.1,0,.5.5.9,1,.9s0,0,0,0h.7c.4.8,1,1.7,1.7,2.4l-1.4.7c-.5.2-.7.8-.4,1.3s.5.6.9.6.3,0,.4-.1l2.2-1.1c1.6,1.1,3.7,1.7,5.8,1.7s4.2-.6,5.8-1.7l2.2,1.1c.1,0,.3.1.4.1.4,0,.7-.2.9-.6.2-.5,0-1.1-.4-1.3l-1.4-.7c.7-.7,1.3-1.6,1.7-2.5h.7c0,0,0,0,0,0,.5,0,1-.4,1-.9,0-.6-.4-1-.9-1.1ZM9,12c-.6,0-1-.4-1-1s.4-1,1-1,1,.4,1,1-.4,1-1,1ZM12,15c-.6,0-1-.4-1-1s.4-1,1-1,1,.4,1,1-.4,1-1,1ZM15,12c-.6,0-1-.4-1-1s.4-1,1-1,1,.4,1,1-.4,1-1,1Z"/>' : '<path d="M42 26C42 34.8366 33.9411 42 24 42C14.0589 42 6 34.8366 6 26M15 12.1405C17.6476 10.7792 20.7214 10 24 10C27.2786 10 30.3524 10.7792 33 12.1405"/><path d="M6 26V8.48814C6 6.757 8.05005 5.84346 9.33729 7.00098L15 12.093"/><path d="M42 26V8.48814C42 6.757 39.9499 5.84346 38.6627 7.00098L33 12.093"/><circle cx="30" cy="22" r="2"/><circle cx="18" cy="22" r="2"/><circle cx="24" cy="28" r="2"/><path d="M16 30L4 31"/><path d="M19 35L7 41"/><path d="M32 30L44 31"/><path d="M29 35L41 41"/>';

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

module.exports = Cat;
