'use strict';

var React = require('react');

function Facetime(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M19.5,2H4.5c-1.4,0-2.5,1.1-2.5,2.5v15c0,1.4,1.1,2.5,2.5,2.5h15c1.4,0,2.5-1.1,2.5-2.5V4.5c0-1.4-1.1-2.5-2.5-2.5ZM13,14.5c0,.6-.4,1-1,1h-6c-.6,0-1-.4-1-1v-5c0-.6.4-1,1-1h6c.6,0,1,.4,1,1v5ZM18.5,15c0,.4-.2.7-.6.9-.1,0-.3,0-.4,0-.2,0-.4,0-.6-.2l-2.5-2c-.2-.2-.4-.5-.4-.8v-2c0-.3.1-.6.4-.8l2.5-2c.3-.2.7-.3,1.1-.1.3.2.6.5.6.9v6Z"/>' : '<path d="M39 6H9C7.34315 6 6 7.34315 6 9V39C6 40.6569 7.34315 42 9 42H39C40.6569 42 42 40.6569 42 39V9C42 7.34315 40.6569 6 39 6Z"/><path d="M24 19H12V29H24V19Z"/><path d="M35 18L30 22V26L35 30V18Z"/>';

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

module.exports = Facetime;
