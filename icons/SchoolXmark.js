'use strict';

var React = require('react');

function SchoolXmark(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M15.3,15.7c.4-.4,1-.4,1.4,0l1.1,1.1,1.1-1.1c.4-.4,1-.4,1.4,0s.4,1,0,1.4l-1.1,1.1,1.1,1.1c.4.4.4,1,0,1.4-.4.4-1,.4-1.4,0l-1.1-1.1-1.1,1.1c-.4.4-1,.4-1.4,0-.4-.4-.4-1,0-1.4l1.1-1.1-1.1-1.1c-.4-.4-.4-1,0-1.4Z" fill-rule="evenodd"/>   <path d="M11.4,3.2c.3-.2.8-.2,1.1,0l6,4c.5.3.6.9.3,1.4-.2.3-.5.4-.8.4-.2,0-.4,0-.5-.1,0,0,0,0,0,0l-1.4-1v6c-.6,0-1.3.2-1.8.7-1,1-1,2.6,0,3.5-.8.8-.9,1.9-.5,2.8h-5.7V7.9l-1.4,1c-.5.3-1.1.2-1.4-.3-.3-.5-.2-1.1.3-1.4,0,0,6-4,6-4ZM11,11c-.6,0-1,.4-1,1s.4,1,1,1h2c.6,0,1-.4,1-1s-.4-1-1-1h-2ZM10,9c0-.6.4-1,1-1h2c.6,0,1,.4,1,1s-.4,1-1,1h-2c-.6,0-1-.4-1-1Z" fill-rule="evenodd"/>   <path d="M21,14.4v-2.2c0-.4-.3-.8-.7-1l-2.3-.6v3.9c.9-.7,2.1-.7,3,0ZM18,16.5l.8-.8c.4-.4,1-.4,1.4,0,.4.4.4,1,0,1.4l-1.1,1.1,1.1,1.1c.4.4.4,1,0,1.4-.4.4-1,.4-1.4,0l-.8-.8v-3.3ZM16,15.4c-.3,0-.5.1-.7.3-.4.4-.4,1,0,1.4l.7.7v-2.4ZM16,18.5v2.4c-.3,0-.5-.1-.7-.3-.4-.4-.4-1,0-1.4,0,0,.7-.7.7-.7ZM6,10.5l-2.3.6c-.4.1-.7.5-.7,1v7.9c0,.6.4,1,1,1h2v-10.5Z"/>' : '<path d="M15.1,42v-20.2l-9,2.5v17.7h9ZM15.1,42V12M15.1,42h9M33.1,21.8v-9.7M33.1,21.8l9,2.5v2M33.1,21.8v4.5M37.6,15l-13.5-9-13.5,9M21.8,17.2h4.5M21.8,24h4.5M33.1,33.9l4,4M37.1,37.9l4,4M37.1,37.9l-4,4M37.1,37.9l4-4"/>';

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

module.exports = SchoolXmark;
