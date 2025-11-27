'use strict';

var React = require('react');

function ExchangeFour(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M19.5,2H4.5c-1.4,0-2.5,1.1-2.5,2.5v15c0,1.4,1.1,2.5,2.5,2.5h15c1.4,0,2.5-1.1,2.5-2.5V4.5c0-1.4-1.1-2.5-2.5-2.5ZM16.5,14.5h-6.6l1.8,1.8c.4.4.4,1,0,1.4s-.5.3-.7.3-.5,0-.7-.3l-3.5-3.5c0,0-.2-.2-.2-.3-.1-.2-.1-.5,0-.8.1-.2.3-.4.5-.5.1,0,.3,0,.4,0h9c.6,0,1,.4,1,1s-.4,1-1,1ZM17.4,10.9c-.1.2-.3.4-.5.5-.1,0-.3,0-.4,0H7.5c-.6,0-1-.4-1-1s.4-1,1-1h6.6l-1.8-1.8c-.4-.4-.4-1,0-1.4s1-.4,1.4,0l3.5,3.5c0,0,.2.2.2.3.1.2.1.5,0,.8Z"/>' : '<path d="M39 6H9C7.34315 6 6 7.34315 6 9V39C6 40.6569 7.34315 42 9 42H39C40.6569 42 42 40.6569 42 39V9C42 7.34315 40.6569 6 39 6Z"/><path d="M15 21L33 21"/><path d="M15 27L33 27"/><path d="M33 21L26 14"/><path d="M22 34L15 27"/>';

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

module.exports = ExchangeFour;
