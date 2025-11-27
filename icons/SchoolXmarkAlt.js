'use strict';

var React = require('react');

function SchoolXmarkAlt(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M6.7,11.6l5.3-6.6,5.3,6.6c.2.2.5.4.8.4h2.9v1.1c-.8-.2-1.8,0-2.5.6-1-1-2.6-1-3.5,0,0,0,0,0-.1.1,0-.3.1-.5.1-.8,0-1.7-1.3-3-3-3s-3,1.3-3,3,1.3,3,3,3,1.8-.4,2.3-1.1c-.2.8,0,1.7.7,2.3-.7.7-.9,1.9-.5,2.8H4c-.6,0-1-.4-1-1v-7h2.9c.3,0,.6-.1.8-.4Z"/>   <path d="M17.5,14.8c-.4-.4-1-.4-1.4,0-.4.4-.4,1,0,1.4l1.1,1.1-1.1,1.1c-.4.4-.4,1,0,1.4.4.4,1,.4,1.4,0l1.1-1.1,1.1,1.1c.1.1.3.2.5.3,0,0,0,0,0,0,.3,0,.6,0,.9-.3.4-.4.4-1,0-1.4l-1.1-1.1,1.1-1.1h0c.4-.4.4-1,0-1.4h0s0,0-.1-.1c-.4-.3-.9-.2-1.3.1l-1.1,1.1-1.1-1.1ZM12,12c-.6,0-1,.4-1,1s.4,1,1,1,1-.4,1-1-.4-1-1-1ZM2.5,10l2.7-3.6c.2-.3.5-.4.8-.4h2.6l-3.2,4h-2.9ZM15.4,6l3.2,4h2.9l-2.7-3.6c-.2-.3-.5-.4-.8-.4h-2.6Z"/>' : '<path d="M33.7,30.9l3.5,3.5M37.3,34.5l3.5,3.5M37.3,34.5l-3.5,3.5M37.3,34.5l3.5-3.5M14.2,22l10-12,10,12M14.2,22h-6v16h18.2M14.2,22h-8l6-8h8.7s-6.7,8-6.7,8ZM34.2,22h6v3.1M34.2,22h8l-6-8h-8.7s6.7,8,6.7,8ZM28.2,26c0,2.2-1.8,4-4,4s-4-1.8-4-4,1.8-4,4-4,4,1.8,4,4Z"/>';

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

module.exports = SchoolXmarkAlt;
