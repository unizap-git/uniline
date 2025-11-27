'use strict';

var React = require('react');

function Flashlight(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M19.5,1H4.5c-.6,0-1,.4-1,1v1.1c0,3.2,1.5,6.3,4,8.4v10.5c0,.6.4,1,1,1h7c.6,0,1-.4,1-1v-10.5c2.5-2,4-5.1,4-8.4v-1.1c0-.6-.4-1-1-1ZM13,16c0,.6-.4,1-1,1s-1-.4-1-1v-2c0-.6.4-1,1-1s1,.4,1,1v2ZM19,6.5H5c-.6,0-1-.4-1-1s.4-1,1-1h14c.6,0,1,.4,1,1s-.4,1-1,1Z"/>   <path d="M8.5,12c-.2,0-.4,0-.6-.2C5.1,9.7,3.5,6.4,3.5,3v-1c0-.6.4-1,1-1s1,.4,1,1v1c0,2.8,1.3,5.5,3.6,7.2.4.3.5,1,.2,1.4-.2.3-.5.4-.8.4Z"/>   <path d="M15.5,12c-.3,0-.6-.1-.8-.4-.3-.4-.2-1.1.2-1.4,2.3-1.7,3.6-4.4,3.6-7.2v-1c0-.6.4-1,1-1s1,.4,1,1v1c0,3.4-1.6,6.7-4.4,8.8-.2.1-.4.2-.6.2Z"/>' : '<path d="M17 22.1961C17 22.0726 16.9419 21.9564 16.8431 21.8824C11.9058 18.1793 9 12.3678 9 6.19608L9 4H39V6.19608C39 12.3678 36.0942 18.1793 31.1569 21.8824C31.0581 21.9564 31 22.0726 31 22.1961V44H17V22.1961Z"/><path d="M38 11H10"/><path d="M24 28.0083V32.0083"/><path d="M17 22V22C11.9639 18.2229 9 12.2951 9 6L9 4"/><path d="M39 4V6C39 12.2951 36.0361 18.2229 31 22V22"/>';

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

module.exports = Flashlight;
