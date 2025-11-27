'use strict';

var React = require('react');

function SchoolExclamationAlt(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M19,19c0-.6.4-1,1-1h0c.6,0,1,.4,1,1s-.4,1-1,1h0c-.6,0-1-.4-1-1ZM20,12c.6,0,1,.4,1,1v3c0,.6-.4,1-1,1s-1-.4-1-1v-3c0-.6.4-1,1-1Z" fill-rule="evenodd"/>   <path d="M11,13c0-.6.4-1,1-1s1,.4,1,1-.4,1-1,1-1-.4-1-1Z"/>   <path d="M12,5l-5.3,6.6c-.2.2-.5.4-.8.4h-2.9v7c0,.6.4,1,1,1h13.2c-.1-.3-.2-.6-.2-1,0-.5.1-1.1.4-1.5-.3-.4-.4-1-.4-1.5v-3c0-.5.1-1,.3-1.4l-5.3-6.6ZM12,10c-1.7,0-3,1.3-3,3s1.3,3,3,3,3-1.3,3-3-1.3-3-3-3Z" fill-rule="evenodd"/>   <path d="M20,10h-1.4l-3.2-4h2.6c.3,0,.6.1.8.4l2.7,3.6h-1.5ZM20,12c-.5,0-1,.4-1,1v3c0,0,0,.1,0,.2,0,.5.5.8,1,.8h0c.5,0,.9-.4,1-.8,0,0,0-.1,0-.2v-3c0-.6-.4-1-1-1h0ZM21,18.9s0,0,0,0c0-.5-.5-.8-1-.8h0c-.5,0-.9.4-1,.8,0,0,0,.1,0,.2,0,.6.4,1,1,1h0c.5,0,1-.4,1-1h0ZM2.5,10l2.7-3.6c.2-.3.5-.4.8-.4h2.6l-3.2,4h-2.9Z"/>' : '<path d="M35.7,38.9H8.1v-17h6.4M14.4,21.9l10.6-12.8,10.6,12.8M14.4,21.9H5.9l6.4-8.5h9.2s-7.1,8.5-7.1,8.5ZM42.1,38.9h0M42.1,32.5v-6.4M28.6,13.4h9.2l4.2,5.3M29.3,26.1c0,2.3-1.9,4.2-4.2,4.2s-4.2-1.9-4.2-4.2,1.9-4.2,4.2-4.2,4.2,1.9,4.2,4.2Z"/>';

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

module.exports = SchoolExclamationAlt;
