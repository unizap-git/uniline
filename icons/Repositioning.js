'use strict';

var React = require('react');

function Repositioning(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M15.9,7.1c-1-1-2.4-1.6-3.9-1.6s-2.8.6-3.9,1.6c-1,1-1.6,2.4-1.6,3.9,0,4,4.7,7.2,4.9,7.3.2.1.4.2.6.2s.4,0,.6-.2c.2-.1,4.9-3.3,4.9-7.3s-.6-2.9-1.6-3.9ZM12,13.5c-1.4,0-2.5-1.1-2.5-2.5s1.1-2.5,2.5-2.5,2.5,1.1,2.5,2.5-1.1,2.5-2.5,2.5Z"/>   <path d="M4.5,7s3.8-5.8,10.2-3.5c6.5,2.3,6.2,8.8,6.2,8.8"/>   <path d="M21,4v8"/>   <path d="M19.5,17s-3,5.5-9.8,3.8S3,12,3,12"/>   <path d="M3,12v8"/>' : '<path d="M33 22C33 29 24 35 24 35C24 35 15 29 15 22C15 19.6131 15.9482 17.3239 17.636 15.636C19.3239 13.9482 21.6131 13 24 13C26.3869 13 28.6761 13.9482 30.364 15.636C32.0518 17.3239 33 19.6131 33 22Z"/><path d="M24 25C25.6569 25 27 23.6569 27 22C27 20.3431 25.6569 19 24 19C22.3431 19 21 20.3431 21 22C21 23.6569 22.3431 25 24 25Z"/><path d="M9 13.9999C9 13.9999 16.5 2.49984 29.5 6.99986C42.5 11.4999 42 24.4999 42 24.4999"/><path d="M42 8V24"/><path d="M39 34C39 34 33 45 19.5 41.5C6 38 6 24 6 24"/><path d="M6 24L6 40"/>';

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

module.exports = Repositioning;
