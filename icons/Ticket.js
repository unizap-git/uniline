'use strict';

var React = require('react');

function Ticket(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M4.5,8l12.5-5,2,5"/>   <path d="M22,12c.6,0,1-.4,1-1v-3c0-.6-.4-1-1-1H2c-.6,0-1,.4-1,1v3c0,.6.4,1,1,1,.9,0,2,.5,2,2s-1.1,2-2,2-1,.4-1,1v3c0,.6.4,1,1,1h20c.6,0,1-.4,1-1v-3c0-.6-.4-1-1-1-.9,0-2-1-2-2.2s1.2-1.8,2-1.8ZM8.5,11.7h3c.6,0,1,.4,1,1s-.4,1-1,1h-3c-.6,0-1-.4-1-1s.4-1,1-1ZM15.5,16.7h-7c-.6,0-1-.4-1-1s.4-1,1-1h7c.6,0,1,.4,1,1s-.4,1-1,1Z"/>' : '<path d="M9.00013 16.0001L34 6.00008L38.0004 16.0001"/><path d="M4 16H44V22C41 22 38 24 38 27.5C38 31 41 34 44 34V40H4V34C7.00016 34 10 32 10 28C10 24 7 22 4 22V16Z"/><path d="M17 25.3848H23"/><path d="M17 31.3848H31"/>';

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

module.exports = Ticket;
