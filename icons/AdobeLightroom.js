'use strict';

var React = require('react');

function AdobeLightroom(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M19.5,2H4.5c-1.4,0-2.5,1.1-2.5,2.5v15c0,1.4,1.1,2.5,2.5,2.5h15c1.4,0,2.5-1.1,2.5-2.5V4.5c0-1.4-1.1-2.5-2.5-2.5ZM11,17.5h-4c-.6,0-1-.4-1-1V7.5c0-.6.4-1,1-1s1,.4,1,1v8h3c.6,0,1,.4,1,1s-.4,1-1,1ZM17,12c-.5,0-1.2,0-2,1.3v3.2c0,.6-.4,1-1,1s-1-.4-1-1v-6c0-.6.4-1,1-1s1,.4,1,1c.8-.5,1.5-.5,2-.5s1,.4,1,1-.4,1-1,1Z"/>' : '<path d="M39 6H9C7.34315 6 6 7.34315 6 9V39C6 40.6569 7.34315 42 9 42H39C40.6569 42 42 40.6569 42 39V9C42 7.34315 40.6569 6 39 6Z"/><path d="M14 15V33H22"/><path d="M28 33V21"/><path d="M28 26C30.25 22 32.6286 22 34 22"/>';

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

module.exports = AdobeLightroom;
