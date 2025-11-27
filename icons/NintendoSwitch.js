'use strict';

var React = require('react');

function NintendoSwitch(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M20.8,3.2c-1.2-1.2-2.8-1.2-5.8-1.2h-1c-.6,0-1,.4-1,1v18c0,.6.4,1,1,1h1c3,0,4.7,0,5.8-1.2s1.2-2.8,1.2-5.8v-6c0-3,0-4.7-1.2-5.8ZM18.5,7.5c0,.6-.4,1-1,1s-1-.4-1-1v-1c0-.6.4-1,1-1s1,.4,1,1v1Z"/>   <path d="M10,2h-1c-3,0-4.7,0-5.8,1.2-1.2,1.2-1.2,2.8-1.2,5.8v6c0,3,0,4.7,1.2,5.8s2.8,1.2,5.8,1.2h1c.6,0,1-.4,1-1V3c0-.6-.4-1-1-1ZM7.5,17.5c0,.6-.4,1-1,1s-1-.4-1-1v-1c0-.6.4-1,1-1s1,.4,1,1v1Z"/>' : '<path d="M6 18C6 12.3431 6 9.51472 7.75736 7.75736C9.51472 6 12.3431 6 18 6H20V42H18C12.3431 42 9.51472 42 7.75736 40.2426C6 38.4853 6 35.6569 6 30V18Z"/><path d="M42 18C42 12.3431 42 9.51472 40.2426 7.75736C38.4853 6 35.6569 6 30 6H28V42H30C35.6569 42 38.4853 42 40.2426 40.2426C42 38.4853 42 35.6569 42 30V18Z"/><path d="M35 13V15"/><path d="M13 33V35"/>';

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

module.exports = NintendoSwitch;
