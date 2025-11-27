'use strict';

var React = require('react');

function TreeOne(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M12,19c-1.2,0-2.3-.3-3.4-.8l.8-1.8c1.6.8,3.5.8,5.2,0l.8,1.8c-1.1.5-2.2.8-3.4.8Z"/>   <path d="M12,23c-.6,0-1-.4-1-1v-4c0-.6.4-1,1-1s1,.4,1,1v4c0,.6-.4,1-1,1Z"/>   <path d="M12,1C7.3,1,3.5,5,3.5,10s3.8,9,8.5,9c-.6,0-1-.4-1-1v-3.1l-2.7-2.7c-.4-.4-.4-1,0-1.4s1-.4,1.4,0l1.3,1.3v-5.1c0-.6.4-1,1-1s1,.4,1,1v1.6l1.3-1.3c.4-.4,1-.4,1.4,0s.4,1,0,1.4l-2.7,2.7v6.6c0,.6-.4,1-1,1,4.7,0,8.5-4,8.5-9S16.7,1,12,1Z"/>' : '<ellipse cx="24" cy="20" rx="15" ry="16"/><path d="M24 14L24 36"/><path d="M30 34.6689C28.1626 35.5253 26.1333 36.0003 24 36.0003C21.8667 36.0003 19.8374 35.5253 18 34.6689"/><path d="M24 36L24 44"/><path d="M24 22L30 16"/><path d="M24 29L18 23"/>';

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

module.exports = TreeOne;
