'use strict';

var React = require('react');

function AdobePhotoshop(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M8,8.5v3c2.5,0,2.5-1.1,2.5-1.5s0-1.5-2.5-1.5Z"/>   <path d="M19.5,2H4.5c-1.4,0-2.5,1.1-2.5,2.5v15c0,1.4,1.1,2.5,2.5,2.5h15c1.4,0,2.5-1.1,2.5-2.5V4.5c0-1.4-1.1-2.5-2.5-2.5ZM8,13.5v3c0,.6-.4,1-1,1s-1-.4-1-1V7.5c0-.6.4-1,1-1h1c2.8,0,4.5,1.3,4.5,3.5s-1.7,3.5-4.5,3.5ZM15.9,12.6c.8.3,2.1.9,2.1,2.4s-.2,1.2-.7,1.6c-.8.8-2.1.9-2.9.9s-.4,0-.5,0c-.5,0-1-.5-.9-1.1,0-.5.5-1,1.1-.9.6,0,1.5,0,1.9-.3,0,0,0,0,0-.2,0-.2-.1-.3-.9-.6-.8-.3-2.1-.9-2.1-2.4s.2-1.2.7-1.7c.9-.9,2.5-.9,3.2-.8h.1c.6,0,1,.5,1,1s-.4,1-1,1h-.2c-1.2,0-1.6.1-1.7.3,0,0,0,0,0,.2s.1.3.9.6Z"/>' : '<path d="M39 6H9C7.34315 6 6 7.34315 6 9V39C6 40.6569 7.34315 42 9 42H39C40.6569 42 42 40.6569 42 39V9C42 7.34315 40.6569 6 39 6Z"/><path d="M14 15V33"/><path fill-rule="evenodd" clip-rule="evenodd" d="M16 25C19 25 23 24.2 23 20C23 15.8 19 15 16 15H14V25H16Z"/><path d="M34 21.0246C33 21.0246 28 20.5266 28 24.0123C28 27.4979 34 26.5021 34 29.9877C34 33.4734 28 32.9754 28 32.9754"/>';

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

module.exports = AdobePhotoshop;
