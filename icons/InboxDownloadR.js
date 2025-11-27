'use strict';

var React = require('react');

function InboxDownloadR(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M21,18v-5"/>   <g>     <path d="M8.4,15.1l.7,1.4h5.8l.7-1.4c.2-.3.5-.6.9-.6h5.5V4.5c0-1.4-1.1-2.5-2.5-2.5H4.5c-1.4,0-2.5,1.1-2.5,2.5v10h5.5c.4,0,.7.2.9.6ZM8.3,10.3c.4-.4,1-.4,1.4,0l1.3,1.3v-5.6c0-.6.4-1,1-1s1,.4,1,1v5.6l1.3-1.3c.4-.4,1-.4,1.4,0s.4,1,0,1.4l-3,3c0,0-.2.2-.3.2-.1,0-.3,0-.4,0s-.3,0-.4,0c-.1,0-.2-.1-.3-.2l-3-3c-.4-.4-.4-1,0-1.4Z"/>     <path d="M16.4,17.9c-.2.3-.5.6-.9.6h-7c-.4,0-.7-.2-.9-.6l-.7-1.4H2v3c0,1.4,1.1,2.5,2.5,2.5h15c1.4,0,2.5-1.1,2.5-2.5v-3h-4.9l-.7,1.4Z"/>   </g>   <path d="M3,18v-5"/>' : '<rect x="5.8" y="5.8" width="36.4" height="36.4" rx="3" ry="3"/>   <path d="M5.8,31.3h10l1.8,3.6h12.7l1.8-3.6h10"/>   <path d="M42.2,36.1v-10.1"/>   <path d="M17.9,22l6.1,6.1,6.1-6.1"/>   <path d="M24,28V11.9"/>   <path d="M5.8,36.1v-10.1"/>';

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

module.exports = InboxDownloadR;
