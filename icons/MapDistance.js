'use strict';

var React = require('react');

function MapDistance(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M8.5,11.5c0-.3-.2-.5-.5-.5s-.5.2-.5.5c0,0,0,.3.5,1.1.5-.8.5-1.1.5-1.1Z"/>   <path d="M19.7,2H4.4c-1.3,0-2.4,1.1-2.4,2.4v15.3c0,1.3,1.1,2.3,2.4,2.3h15.3c1.3,0,2.3-1.1,2.3-2.3V4.4c0-1.3-1.1-2.4-2.3-2.4ZM16,5.5c1.4,0,2.5,1.1,2.5,2.5s-.2,1.4-1.7,3.6c-.2.3-.5.4-.8.4s-.6-.2-.8-.4c-1.5-2.2-1.7-3-1.7-3.6,0-1.4,1.1-2.5,2.5-2.5ZM8,9c1.4,0,2.5,1.1,2.5,2.5s-.2,1.4-1.7,3.6c-.2.3-.5.4-.8.4s-.6-.2-.8-.4c-1.5-2.2-1.7-3-1.7-3.6,0-1.4,1.1-2.5,2.5-2.5ZM10.9,17.4l-3.5,1.5c-.1,0-.3,0-.4,0-.4,0-.8-.2-.9-.6-.2-.5,0-1.1.5-1.3l3.5-1.5c.5-.2,1.1,0,1.3.5.2.5,0,1.1-.5,1.3ZM18.4,14.4l-3.5,1.5c-.1,0-.3,0-.4,0-.4,0-.8-.2-.9-.6-.2-.5,0-1.1.5-1.3l3.5-1.5c.5-.2,1.1,0,1.3.5.2.5,0,1.1-.5,1.3Z"/>   <path d="M16.5,8c0-.3-.2-.5-.5-.5s-.5.2-.5.5c0,0,0,.3.5,1.1.5-.8.5-1.1.5-1.1Z"/>' : '<path d="M39.3 6H8.7C7.20883 6 6 7.20883 6 8.7V39.3C6 40.7912 7.20883 42 8.7 42H39.3C40.7912 42 42 40.7912 42 39.3V8.7C42 7.20883 40.7912 6 39.3 6Z"/><path d="M36 27L29 30"/><path d="M21 33L14 36"/><path d="M16 29C18 26.1046 19 24.1046 19 23C19 21.3431 17.6569 20 16 20C14.3431 20 13 21.3431 13 23C13 24.1046 14 26.1046 16 29Z"/><path d="M32 22C34 19.1046 35 17.1046 35 16C35 14.3431 33.6569 13 32 13C30.3431 13 29 14.3431 29 16C29 17.1046 30 19.1046 32 22Z"/>';

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

module.exports = MapDistance;
