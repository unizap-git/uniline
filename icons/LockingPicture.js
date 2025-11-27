'use strict';

var React = require('react');

function LockingPicture(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M22,13c0-.6-.4-1-1-1s-1,.4-1,1h2ZM12,4c.6,0,1-.4,1-1s-.4-1-1-1v2ZM19.5,20H4.5v2h15v-2ZM4,19.5V4.5h-2v15h2ZM20,13v6.5h2v-6.5h-2ZM4.5,4h7.5v-2h-7.5v2ZM4.5,20c-.3,0-.5-.2-.5-.5h-2c0,1.4,1.1,2.5,2.5,2.5v-2ZM19.5,22c1.4,0,2.5-1.1,2.5-2.5h-2c0,.3-.2.5-.5.5v2ZM4,4.5c0-.3.2-.5.5-.5v-2c-1.4,0-2.5,1.1-2.5,2.5h2Z"/>   <path d="M3,17.5l5.3-4.9c.4-.3.9-.4,1.3,0l6.3,5.4"/>   <path d="M14,15.5l2.4-2.4c.4-.4.9-.4,1.3,0l3.3,2.5"/>   <rect x="15" y="6" width="6" height="4" rx="1.5" ry="1.5"/>   <path d="M19.5,6v1c.6,0,1-.4,1-1h-1ZM16.5,6h-1c0,.6.4,1,1,1v-1ZM18.5,4.5v1.5h2v-1.5h-2ZM19.5,5h-3v2h3v-2ZM17.5,6v-1.5h-2v1.5h2ZM17.5,4.5c0-.3.2-.5.5-.5v-2c-1.4,0-2.5,1.1-2.5,2.5h2ZM20.5,4.5c0-1.4-1.1-2.5-2.5-2.5v2c.3,0,.5.2.5.5h2Z"/>' : '<path d="M6.7,34.4l10.6-9.7c.7-.7,1.9-.7,2.6,0l12.5,10.7"/>   <path d="M28.4,30.5l4.7-4.7c.7-.7,1.8-.8,2.6-.2l6.5,4.9"/>   <path d="M42.2,24v15.7c0,1.2-.9,2.1-2.1,2.1H8.8c-1.2,0-2.1-.9-2.1-2.1V8.3c0-1.2.9-2.1,2.1-2.1h15.7"/>   <rect x="31.7" y="11" width="9.6" height="6.4" rx="2.4" ry="2.4"/>   <path d="M36.5,6.2c1.3,0,2.4,1.1,2.4,2.4v2.4h-4.8v-2.4c0-1.3,1.1-2.4,2.4-2.4h0Z"/>';

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

module.exports = LockingPicture;
