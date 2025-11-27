'use strict';

var React = require('react');

function BankCardOne(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M7,6.5v-2c0-.6.4-1,1-1h13c.6,0,1,.4,1,1v9c0,.6-.4,1-1,1h-1"/>   <path d="M17,11.5v6"/>   <path d="M2,11.5v6"/>   <g>     <path d="M17,15H2c-.6,0-1-.4-1-1v5.5c0,1.1.9,2,2,2h13c1.1,0,2-.9,2-2v-5.5c0,.6-.4,1-1,1ZM9.5,18h-4c-.6,0-1-.4-1-1s.4-1,1-1h4c.6,0,1,.4,1,1s-.4,1-1,1ZM13.5,18h-1c-.6,0-1-.4-1-1s.4-1,1-1h1c.6,0,1,.4,1,1s-.4,1-1,1Z"/>     <path d="M16,8.5H3c-1.1,0-2,.9-2,2v3.5c0-.6.4-1,1-1h15c.6,0,1,.4,1,1v-3.5c0-1.1-.9-2-2-2Z"/>   </g>' : '<path d="M14 13V9C14 7.89543 14.8954 7 16 7H42C43.1046 7 44 7.89543 44 9V27C44 28.1046 43.1046 29 42 29H40"/><rect x="4" y="19" width="30" height="22" rx="2"/><path d="M4 28L34 28"/><path d="M34 23L34 35"/><path d="M4 23L4 35"/><path d="M11 34L19 34"/><path d="M25 34L27 34"/>';

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

module.exports = BankCardOne;
