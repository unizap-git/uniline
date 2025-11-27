'use strict';

var React = require('react');

function ChurchTwo(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M3.5,4l1.5-2,1.5,2v18h-3V4Z"/>   <path d="M17.5,4l1.5-2,1.5,2v18h-3V4Z"/>   <path d="M18.2,11.3l-5.5-5c-.4-.3-1-.3-1.3,0l-5.5,5c-.2.2-.3.5-.3.7v10c0,.6.4,1,1,1h11c.6,0,1-.4,1-1v-10c0-.3-.1-.6-.3-.7ZM14,15.5h-1v2c0,.6-.4,1-1,1s-1-.4-1-1v-2h-1c-.6,0-1-.4-1-1s.4-1,1-1h1v-1c0-.6.4-1,1-1s1,.4,1,1v1h1c.6,0,1,.4,1,1s-.4,1-1,1Z"/>' : '<path d="M13 24L24 14L35 24V44H13V24Z"/><path d="M7 8L10 4L13 8V44H7V8Z"/><path d="M35 8L38 4L41 8V44H35V8Z"/><path d="M24 25V35"/><path d="M20 29L28 29"/>';

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

module.exports = ChurchTwo;
