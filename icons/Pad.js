'use strict';

var React = require('react');

function Pad(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M21,15.5v6.5H3v-6.5"/>   <path d="M13.2,18.8c0-.7-.6-1.2-1.2-1.2s-1.2.6-1.2,1.2.6,1.2,1.2,1.2,1.2-.6,1.2-1.2Z"/>   <path d="M21,1H3c-.6,0-1,.4-1,1v13.5c0,.6.4,1,1,1h18c.6,0,1-.4,1-1V2c0-.6-.4-1-1-1ZM8.5,10c0,.3-.2.5-.5.5h-1.5c-.3,0-.5-.2-.5-.5v-1.5c0-.3.2-.5.5-.5h1.5c.3,0,.5.2.5.5v1.5ZM8.5,6.5c0,.3-.2.5-.5.5h-1.5c-.3,0-.5-.2-.5-.5v-1.5c0-.3.2-.5.5-.5h1.5c.3,0,.5.2.5.5v1.5ZM13.2,10c0,.3-.2.5-.5.5h-1.5c-.3,0-.5-.2-.5-.5v-1.5c0-.3.2-.5.5-.5h1.5c.3,0,.5.2.5.5v1.5ZM13.2,6.5c0,.3-.2.5-.5.5h-1.5c-.3,0-.5-.2-.5-.5v-1.5c0-.3.2-.5.5-.5h1.5c.3,0,.5.2.5.5v1.5ZM18,6.5c0,.3-.2.5-.5.5h-1.5c-.3,0-.5-.2-.5-.5v-1.5c0-.3.2-.5.5-.5h1.5c.3,0,.5.2.5.5v1.5Z"/>' : '<path d="M42 4H6V31H42V4Z"/><path d="M42 31V44H6V31"/><path d="M16 9H13C12.4477 9 12 9.44772 12 10V13C12 13.5523 12.4477 14 13 14H16C16.5523 14 17 13.5523 17 13V10C17 9.44772 16.5523 9 16 9Z"/><path d="M16 16H13C12.4477 16 12 16.4477 12 17V20C12 20.5523 12.4477 21 13 21H16C16.5523 21 17 20.5523 17 20V17C17 16.4477 16.5523 16 16 16Z"/><path d="M25.5 9H22.5C21.9477 9 21.5 9.44772 21.5 10V13C21.5 13.5523 21.9477 14 22.5 14H25.5C26.0523 14 26.5 13.5523 26.5 13V10C26.5 9.44772 26.0523 9 25.5 9Z"/><path d="M25.5 16H22.5C21.9477 16 21.5 16.4477 21.5 17V20C21.5 20.5523 21.9477 21 22.5 21H25.5C26.0523 21 26.5 20.5523 26.5 20V17C26.5 16.4477 26.0523 16 25.5 16Z"/><path d="M26.5 37.5C26.5 36.1193 25.3807 35 24 35C22.6193 35 21.5 36.1193 21.5 37.5C21.5 38.8807 22.6193 40 24 40C25.3807 40 26.5 38.8807 26.5 37.5Z"/><path d="M35 9H32C31.4477 9 31 9.44772 31 10V13C31 13.5523 31.4477 14 32 14H35C35.5523 14 36 13.5523 36 13V10C36 9.44772 35.5523 9 35 9Z"/>';

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

module.exports = Pad;
