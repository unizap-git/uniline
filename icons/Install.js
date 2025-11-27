'use strict';

var React = require('react');

function Install(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M21.5,5.2s0,0,0,0l-2.5-3.3c-.2-.2-.5-.4-.8-.4H5.8c-.3,0-.6.1-.8.4l-2.5,3.3s0,0,0,0c-.3.3-.5.8-.5,1.3v13.5c0,1.4,1.1,2.5,2.5,2.5h15c1.4,0,2.5-1.1,2.5-2.5V6.5c0-.5-.2-.9-.5-1.3ZM16.7,14.2l-4,4c0,0-.2.1-.2.2,0,0,0,0,0,0-.1,0-.3,0-.4,0s0,0,0,0,0,0,0,0c0,0,0,0-.1,0,0,0-.2,0-.3,0-.1,0-.2-.1-.3-.2l-4-4c-.4-.4-.4-1,0-1.4s1-.4,1.4,0l2.3,2.3v-5.6c0-.6.4-1,1-1s1,.4,1,1v5.6l2.3-2.3c.4-.4,1-.4,1.4,0s.4,1,0,1.4ZM5.5,4.5l.8-1h11.4l.8,1H5.5Z"/>' : '<path d="M41.4004 11.551L36.3332 5H11.6666L6.58398 11.551"/><path d="M6 13C6 11.8954 6.89543 11 8 11H40C41.1046 11 42 11.8954 42 13V40C42 41.6569 40.6569 43 39 43H9C7.34315 43 6 41.6569 6 40V13Z"/><path d="M32 27L24 35L16 27"/><path d="M23.9917 19V35"/>';

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

module.exports = Install;
