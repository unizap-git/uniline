'use strict';

var React = require('react');

function SchoolFlagAlt(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M12,12c-.6,0-1,.4-1,1s.4,1,1,1,1-.4,1-1-.4-1-1-1Z"/>   <path d="M17,4c-.6,0-1,.4-1,1v5l-4-4.9-5.3,6.6c-.2.2-.5.4-.8.4h-2.9v7c0,.6.4,1,1,1h16c.6,0,1-.4,1-1v-7h-2.9s0,0-.1,0v-3h3c.6,0,1-.4,1-1v-3c0-.6-.4-1-1-1h-4ZM9,13c0-1.7,1.3-3,3-3s3,1.3,3,3-1.3,3-3,3-3-1.3-3-3Z" fill-rule="evenodd"/>   <path d="M5.2,6.4l-2.7,3.6h2.9l3.2-4h-2.6c-.3,0-.6.1-.8.4Z"/>' : '<path d="M14.4,22l10-12,10,12M14.4,22h-6v16.1h32.1v-16.1h-6M14.4,22H6.4l6-8h8.7s-6.7,8-6.7,8ZM34.5,22v-7M28.4,26c0,2.2-1.8,4-4,4s-4-1.8-4-4,1.8-4,4-4,4,1.8,4,4ZM34.5,9.9v6h8v-6h-8Z"/>';

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

module.exports = SchoolFlagAlt;
