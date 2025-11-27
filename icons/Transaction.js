'use strict';

var React = require('react');

function Transaction(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M19.5,2H4.5c-1.4,0-2.5,1.1-2.5,2.5v15c0,1.4,1.1,2.5,2.5,2.5h15c1.4,0,2.5-1.1,2.5-2.5V4.5c0-1.4-1.1-2.5-2.5-2.5ZM6,11.5c0-.6.4-1,1-1h4c.6,0,1,.4,1,1s-.4,1-1,1h-4c-.6,0-1-.4-1-1ZM17.8,13.1l-4,5c-.2.2-.5.4-.8.4s-.4,0-.6-.2l-2.5-2c-.4-.3-.5-1-.2-1.4.3-.4,1-.5,1.4-.2l1.7,1.4,3.4-4.2c.3-.4,1-.5,1.4-.2.4.3.5,1,.2,1.4ZM17,8.5H7c-.6,0-1-.4-1-1s.4-1,1-1h10c.6,0,1,.4,1,1s-.4,1-1,1Z"/>' : '<path d="M39 6H9C7.34315 6 6 7.34315 6 9V39C6 40.6569 7.34315 42 9 42H39C40.6569 42 42 40.6569 42 39V9C42 7.34315 40.6569 6 39 6Z"/><path d="M21 31L26 35L34 25"/><path d="M14 15H34"/><path d="M14 23L22 23"/>';

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

module.exports = Transaction;
