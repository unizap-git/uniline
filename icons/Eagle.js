'use strict';

var React = require('react');

function Eagle(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M23,18.2c-.2-.6-.2-1.6-.3-2.9-.1-1.7-.2-3.7-.7-6.1-.5-2.7-2.8-6-6.2-7.1-2.1-.7-5.4-.9-9.3,2.4-1.5.3-3.8,1.4-4.8,3.4-.4.9-.7,2.3.3,4,.2.3.4.4.7.5.3,0,.6,0,.8-.2.7-.6,1.8-1.2,2.6-.9.7.2,1.1,1.2,1.3,2,.1.4,0,2.8-2.4,7.2-.3.5-.1,1.1.4,1.3.2,0,.3.1.5.1.3,0,.6-.2.8-.4,1-1.6,2.9-3.3,4.2-3.5.4,0,.6,0,.9.2.7.5,1.6.7,2.4.5.8-.2,1.8-.7,2.6-2.3,0,0,.2-.3.5-.3.4,0,1.7.1,3.8,2.9.3.4.8.5,1.2.3.4-.2.7-.7.5-1.2ZM11.5,9c-.6,0-1-.4-1-1s.4-1,1-1,1,.4,1,1-.4,1-1,1Z"/>' : '<path d="M5.99968 23.0008C1.96038 15.9568 9.62382 11.8637 13.9997 11.0004C28.541 -1.84434 40.485 10.7132 41.9998 19C43.5145 27.2868 43.1582 33.8931 43.9997 37.0008C37.5368 28.2995 33.1225 29.8415 31.9997 32.0008C29.98 36.1442 26.6863 36.2519 24.9997 35.0008C20.9604 31.686 14.5242 38.2023 11.9997 42.0005C16.847 33.2992 17.5047 27.7272 16.9997 26.0008C14.98 17.7138 8.69261 20.5837 5.99968 23.0008Z"/><circle cx="23" cy="16" r="2"/>';

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

module.exports = Eagle;
