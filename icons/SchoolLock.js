'use strict';

var React = require('react');

function SchoolLock(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M11.4,3.2c.3-.2.8-.2,1.1,0l6,4c.5.3.6.9.3,1.4-.2.3-.5.4-.8.4-.2,0-.4,0-.5-.1,0,0,0,0,0,0l-1.4-1v1.7c-1.1.1-2,.7-2.7,1.5-.1,0-.2,0-.3,0h-2c-.6,0-1,.4-1,1s.4,1,1,1h1.5c0,.2,0,.3,0,.5v.3c-1.2.6-2,1.8-2,3.2v2c0,.7.2,1.4.6,2h-3.1V7.9l-1.4,1c-.5.3-1.1.2-1.4-.3-.3-.5-.2-1.1.3-1.4,0,0,6-4,6-4ZM10,9c0-.6.4-1,1-1h2c.6,0,1,.4,1,1s-.4,1-1,1h-2c-.6,0-1-.4-1-1Z" fill-rule="evenodd"/>   <path d="M16.5,11c.6,0,1.1.2,1.5.5,0,0,0,0,0,0,.6.5.9,1.2.9,1.9v1.5c1.1,0,2,.9,2,2v2c0,1.1-.9,2-2,2h-5c-1.1,0-2-.9-2-2v-2c0-1.1.9-2,2-2v-1.5c0-1.2.9-2.2,2-2.4h0c.2,0,.3,0,.5,0ZM16.5,13c-.3,0-.5.2-.5.5v1.5h1v-1.5c0-.3-.2-.5-.5-.5Z" fill-rule="evenodd"/>   <path d="M3.7,11.2l2.3-.6v10.5h-2c-.6,0-1-.4-1-1v-7.9c0-.4.3-.8.7-1Z"/>' : '<path d="M15.2,42v-20.2l-9,2.5v17.7h9ZM15.2,42V12M15.2,42h4.5M33.2,17.2v-5.2M37.7,15l-13.5-9-13.5,9M22,17.2h4.5M22,24h2.2M31,33v-5.6c0-1.9,1.5-3.4,3.4-3.4s3.4,1.5,3.4,3.4v5.6M28.7,33h11.2c1.2,0,2.2,1,2.2,2.2v4.5c0,1.2-1,2.2-2.2,2.2h-11.2c-1.2,0-2.2-1-2.2-2.2v-4.5c0-1.2,1-2.2,2.2-2.2Z"/>';

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

module.exports = SchoolLock;
