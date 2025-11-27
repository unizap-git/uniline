'use strict';

var React = require('react');

function TicketOne(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M22,3h-10.5c-.5,0-.9.3-1,.8,0,0-.4,1.7-2,1.7s-2-1.5-2-1.7c0-.5-.5-.8-1-.8h-3.5c-.6,0-1,.4-1,1v16c0,.6.4,1,1,1h3.5c.5,0,.9-.3,1-.8,0,0,.4-1.7,2-1.7s2,1.5,2,1.7c0,.5.5.8,1,.8h10.5c.6,0,1-.4,1-1V4c0-.6-.4-1-1-1ZM9.5,14.5c0,.6-.4,1-1,1s-1-.4-1-1v-1c0-.6.4-1,1-1s1,.4,1,1v1ZM9.5,10.5c0,.6-.4,1-1,1s-1-.4-1-1v-1c0-.6.4-1,1-1s1,.4,1,1v1ZM18,14.5h-5.5c-.6,0-1-.4-1-1s.4-1,1-1h5.5c.6,0,1,.4,1,1s-.4,1-1,1ZM18,11.5h-5.5c-.6,0-1-.4-1-1s.4-1,1-1h5.5c.6,0,1,.4,1,1s-.4,1-1,1Z"/>' : '<path d="M4 8H11C11 8 12 13 17 13C22 13 23 8 23 8H44V40H23C23 40 22 35 17 35C12 35 11 40 11 40H4V8Z"/><path d="M17 19V21"/><path d="M17 27L17 29"/><path d="M25 21H36"/><path d="M25 27H36"/>';

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

module.exports = TicketOne;
