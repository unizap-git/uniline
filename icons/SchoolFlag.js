'use strict';

var React = require('react');

function SchoolFlag(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M15,4c0-.6.4-1,1-1h4c.6,0,1,.4,1,1v3c0,.6-.4,1-1,1h-4v13h-8V7.9l-1.4,1c-.5.3-1.1.2-1.4-.3-.3-.5-.2-1.1.3-1.4l6-4c.3-.2.8-.2,1.1,0l2.4,1.6v-.8ZM10,12c0-.6.4-1,1-1h2c.6,0,1,.4,1,1s-.4,1-1,1h-2c-.6,0-1-.4-1-1ZM11,8c-.6,0-1,.4-1,1s.4,1,1,1h2c.6,0,1-.4,1-1s-.4-1-1-1h-2Z" fill-rule="evenodd"/>   <path d="M18,9h0s0,0,0,0h0ZM6,10.5l-2.3.6c-.4.1-.7.5-.7,1v7.9c0,.6.4,1,1,1h2v-10.5ZM20.3,11.2l-2.3-.6v10.5h2c.6,0,1-.4,1-1v-7.9c0-.4-.3-.8-.7-1Z"/>' : '<path d="M15,42v-20.2l-9,2.5v17.7h9ZM15,42h18M15,42V12M33,42v-20.2l9,2.5v17.7h-9ZM33,42V12.8M33,12.8v-6.8h9v6.8h-9ZM10.5,15l13.5-9,9,6M21.8,17.2h4.5M21.8,24h4.5"/>';

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

module.exports = SchoolFlag;
