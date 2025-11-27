'use strict';

var React = require('react');

function Oscillator(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M17.5,16H6.5c-2.2,0-4-1.8-4-4v-7.5c0-.6.4-1,1-1s1,.4,1,1v7.5c0,1.1.9,2,2,2h11c1.1,0,2-.9,2-2v-7.5c0-.6.4-1,1-1s1,.4,1,1v7.5c0,2.2-1.8,4-4,4Z"/>   <path d="M17.5,1H6.5c-2.2,0-4,1.8-4,4s1.8,4,4,4h11c2.2,0,4-1.8,4-4s-1.8-4-4-4ZM7.5,6c-.6,0-1-.4-1-1s.4-1,1-1,1,.4,1,1-.4,1-1,1ZM10.5,6c-.6,0-1-.4-1-1s.4-1,1-1,1,.4,1,1-.4,1-1,1ZM13.5,6c-.6,0-1-.4-1-1s.4-1,1-1,1,.4,1,1-.4,1-1,1ZM16.5,6c-.6,0-1-.4-1-1s.4-1,1-1,1,.4,1,1-.4,1-1,1Z"/>   <path d="M9.5,15v7"/>   <path d="M14.5,15v7"/>' : '<path d="M7 9V24C7 27.3137 9.68629 30 13 30H35C38.3137 30 41 27.3137 41 24V9"/><path d="M7 10C7 6.68629 9.68629 4 13 4H35C38.3137 4 41 6.68629 41 10C41 13.3137 38.3137 16 35 16H13C9.68629 16 7 13.3137 7 10Z"/><circle cx="15" cy="10" r="2"/><circle cx="21" cy="10" r="2"/><circle cx="27" cy="10" r="2"/><circle cx="33" cy="10" r="2"/><path d="M19 30V44"/><path d="M29 30V44"/>';

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

module.exports = Oscillator;
