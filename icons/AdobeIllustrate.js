'use strict';

var React = require('react');

function AdobeIllustrate(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<polygon points="9.4 12.5 10.6 12.5 10 10.7 9.4 12.5"/>   <path d="M19.5,2H4.5c-1.4,0-2.5,1.1-2.5,2.5v15c0,1.4,1.1,2.5,2.5,2.5h15c1.4,0,2.5-1.1,2.5-2.5V4.5c0-1.4-1.1-2.5-2.5-2.5ZM13.3,17.4c-.1,0-.2,0-.3,0-.4,0-.8-.3-.9-.7l-.8-2.3h-2.6l-.8,2.3c-.1.4-.5.7-.9.7s-.2,0-.3,0c-.5-.2-.8-.7-.6-1.3l3-9s0,0,0,0c0,0,0-.1.1-.2,0,0,0-.1.1-.1,0,0,0,0,.1-.1,0,0,.1,0,.2-.1,0,0,0,0,0,0,0,0,0,0,.1,0,0,0,.1,0,.2,0,0,0,.1,0,.2,0,0,0,0,0,.1,0,0,0,0,0,0,0,0,0,.1,0,.2.1,0,0,.1,0,.1.1,0,0,0,0,.1.1,0,0,0,.1.1.2,0,0,0,0,0,0l3,9c.2.5-.1,1.1-.6,1.3ZM17,16.5c0,.6-.4,1-1,1s-1-.4-1-1v-4c0-.6.4-1,1-1s1,.4,1,1v4ZM17,10c0,.6-.4,1-1,1s-1-.4-1-1v-.5c0-.6.4-1,1-1s1,.4,1,1v.5Z"/>' : '<path d="M39 6H9C7.34315 6 6 7.34315 6 9V39C6 40.6569 7.34315 42 9 42H39C40.6569 42 42 40.6569 42 39V9C42 7.34315 40.6569 6 39 6Z"/><path d="M20 15L14 33"/><path d="M32 33V25"/><path d="M32 20V19"/><path d="M20 15L26 33"/><path d="M16 27H24"/>';

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

module.exports = AdobeIllustrate;
