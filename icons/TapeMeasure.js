'use strict';

var React = require('react');

function TapeMeasure(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M6.5,7.5v-1.5c0-.8-.7-1.5-1.5-1.5h0c-.8,0-1.5.7-1.5,1.5v3.5"/>   <path d="M22,12.5h-2.5c.6,0,1,.4,1,1v2c0,.6-.4,1-1,1s-1-.4-1-1v-2c0-.6.4-1,1-1h-3c.6,0,1,.4,1,1v2c0,.6-.4,1-1,1s-1-.4-1-1v-2c0-.6.4-1,1-1h-1.6c-.5-3.4-3.4-6-6.9-6S1,9.6,1,13.5v6c0,.6.4,1,1,1h20c.6,0,1-.4,1-1v-6c0-.6-.4-1-1-1ZM8,16.5c-1.7,0-3-1.3-3-3s1.3-3,3-3,3,1.3,3,3-1.3,3-3,3Z"/>   <path d="M15,13.5h6"/>' : '<path d="M13 15V12C13 10.3431 11.6569 9 10 9V9C8.34315 9 7 10.3431 7 12V19"/><path d="M4 27C4 20.3726 9.37258 15 16 15C22.6274 15 28 20.3726 28 27V39H4V27Z"/><rect x="28" y="27" width="16" height="12"/><circle cx="16" cy="27" r="4"/><path d="M39 27L39 31"/><path d="M33 27L33 31"/><path d="M30 27H42"/>';

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

module.exports = TapeMeasure;
