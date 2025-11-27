'use strict';

var React = require('react');

function SchoolExclamation(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M6,10.5l-2.3.6c-.4.1-.7.5-.7,1v7.9c0,.6.4,1,1,1h2v-10.5Z"/>   <path d="M12.6,3.2c-.3-.2-.8-.2-1.1,0l-6,4c-.5.3-.6.9-.3,1.4.3.5.9.6,1.4.3l1.4-1v13.1h8V7.9l1.4,1s0,0,0,0c.2,0,.3.1.5.1.3,0,.6-.2.8-.4.3-.5.2-1.1-.3-1.4,0,0-6-4-6-4ZM10,12c0-.6.4-1,1-1h2c.6,0,1,.4,1,1s-.4,1-1,1h-2c-.6,0-1-.4-1-1ZM11,8c-.6,0-1,.4-1,1s.4,1,1,1h2c.6,0,1-.4,1-1s-.4-1-1-1h-2ZM19,20c0-.6.4-1,1-1h0c.6,0,1,.4,1,1s-.4,1-1,1h0c-.6,0-1-.4-1-1ZM20,12c.6,0,1,.4,1,1v4c0,.6-.4,1-1,1s-1-.4-1-1v-4c0-.6.4-1,1-1Z" fill-rule="evenodd"/>' : '<path d="M15.1,42v-20.3l-9,2.5v17.7h9ZM15.1,42h18M15.1,42V12M33.1,42v-20.3l3.4,1M33.1,42h2.3M33.1,42V12M37.6,15l-13.5-9-13.5,9M21.8,17.2h4.5M21.8,24h4.5M42.1,42h0M42.1,35.3v-9"/>';

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

module.exports = SchoolExclamation;
