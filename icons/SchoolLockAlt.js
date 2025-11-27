'use strict';

var React = require('react');

function SchoolLockAlt(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M6.7,11.6l5.3-6.6,3,3.7c-.6.4-1.1,1-1.5,1.7-.4-.3-1-.4-1.5-.4-1.7,0-3,1.3-3,3s.8,2.4,2,2.8c0,0,0,.1,0,.2v2c0,.7.2,1.4.5,2h-7.5c-.6,0-1-.4-1-1v-7h2.9c.3,0,.6-.1.8-.4Z"/>   <path d="M16.1,10.4c-.7.4-1.1,1.2-1.1,2.1v1.5c0,0-.1,0-.2,0-1,0-1.7.9-1.8,1.8h0c0,0,0,.1,0,.2v2c0,1.1.9,2,2,2h5c1.1,0,2-.9,2-2v-2c0-.7-.4-1.4-1-1.7,0,0,0,0,0,0-.3-.2-.6-.2-1-.2v-1.5c0-.2,0-.3,0-.5-.2-1.1-1.2-2-2.5-2s-.9.1-1.2.3c0,0-.1,0-.2.1ZM17.5,12c-.3,0-.5.2-.5.5v1.5h1v-1.5c0-.3-.2-.5-.5-.5Z" fill-rule="evenodd"/>   <path d="M21.2,10c-.8-1.2-2.2-2-3.7-2s-.3,0-.5,0l-1.6-2h2.6c.3,0,.6.1.8.4l2.7,3.6h-.3ZM12.9,12.6c-.2-.3-.5-.6-.9-.6s-1,.4-1,1,.2.8.6.9c.3-.5.8-1,1.3-1.3ZM5.2,6.4l-2.7,3.6h2.9l3.2-4h-2.6c-.3,0-.6.1-.8.4Z"/>' : '<path d="M14.3,22l10-12,6.7,8M14.3,22h-6v16.1h14.1M14.3,22H6.3l6-8h8.7s-6.7,8-6.7,8ZM31,18l-3.4-4h8.7l3,4M22.7,29.8c-2.1-.8-3-3.2-2.2-5.2.8-2.1,3.2-3,5.2-2.2M32.4,30v-5c0-1.7,1.3-3,3-3s3,1.3,3,3v5M30.4,30h10c1.1,0,2,.9,2,2v4c0,1.1-.9,2-2,2h-10c-1.1,0-2-.9-2-2v-4c0-1.1.9-2,2-2Z"/>';

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

module.exports = SchoolLockAlt;
