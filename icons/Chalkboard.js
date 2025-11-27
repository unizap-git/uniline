'use strict';

var React = require('react');

function Chalkboard(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M3,4.9c0-1,.8-1.9,1.9-1.9h14.2c1.1,0,1.9.9,1.9,1.9v8.1h-3v-2c0-.6-.4-1-1-1h-4c-.6,0-1,.4-1,1v2H3V4.9ZM3,15v1.1c0,1,.8,1.9,1.9,1.9h3.5l-1.1,1.4c-.4.4-.3,1.1.1,1.4.4.4,1.1.3,1.4-.1l2.2-2.6h2.1l2.2,2.6c.4.4,1,.5,1.4.1.4-.4.5-1,.1-1.4l-1.1-1.4h3.5c1.1,0,1.9-.9,1.9-1.9v-1.1H3Z"/>   <path d="M16,12v1h-2v-1h2Z"/>' : '<path d="M42.2,28.5H5.8M20.6,35.4l-5.7,6.8M27.4,35.4l5.7,6.8M7.8,35.4h32.3c1.1,0,2-.9,2-2.1V7.9c0-1.2-.9-2.1-2-2.1H7.8c-1.1,0-2,.9-2,2.1v25.3c0,1.2.9,2.1,2,2.1ZM26.3,28.5v-6.8h9.1v6.8h-9.1Z"/>';

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

module.exports = Chalkboard;
