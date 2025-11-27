'use strict';

var React = require('react');

function Iwatch(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M18,5H5c-.6,0-1,.4-1,1v12c0,.6.4,1,1,1h13c.6,0,1-.4,1-1V6c0-.6-.4-1-1-1ZM11.5,15c-1.7,0-3-1.3-3-3s1.3-3,3-3,3,1.3,3,3-1.3,3-3,3Z"/>   <path d="M7.5,6s0,0,0-.1l.8-3.5c0-.2.3-.4.5-.4h5.4c.2,0,.5.2.5.4l.8,3.5" stroke-miterlimit="2"/>   <path d="M7.5,18s0,0,0,.1l.8,3.5c0,.2.3.4.5.4h5.4c.2,0,.5-.2.5-.4l.8-3.5" stroke-miterlimit="2"/>   <path d="M19.5,8v2" stroke-miterlimit="2"/>' : '<path d="M36 12.0002H10V36.0002H36V12.0002Z"/><path d="M27 24.0002C27 21.7911 25.2091 20.0002 23 20.0002C20.7909 20.0002 19 21.7911 19 24.0002C19 26.2094 20.7909 28.0002 23 28.0002C25.2091 28.0002 27 26.2094 27 24.0002Z"/><path d="M15 12.0002C15 11.9273 15.0083 11.8545 15.0246 11.7833L16.6321 4.78331C16.7372 4.32578 17.1565 4.00024 17.6409 4.00024H28.3837C28.8681 4.00024 29.2874 4.32578 29.3925 4.78331L31 11.7833"/><path d="M15 36.0002C15 36.0732 15.0083 36.1459 15.0246 36.2172L16.6321 43.2172C16.7372 43.6747 17.1565 44.0002 17.6409 44.0002H28.3837C28.8681 44.0002 29.2874 43.6747 29.3925 43.2172L31 36.2172"/><path d="M39 16.0002V20.0002"/>';

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

module.exports = Iwatch;
