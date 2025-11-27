'use strict';

var React = require('react');

function HotPotOne(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M8.5,17.5l-1.5,4.5h10l-1.5-4.5"/>   <path d="M14.5,9l-.6-7h-3.9l-.6,7"/>   <path d="M20.5,8H3.5c-.6,0-1,.4-1,1,0,6.3,3.6,10,9.5,10s9.5-3.7,9.5-10-.4-1-1-1ZM9,15s0,0,0,0c-.2,0-.9,0-1.6-.8s-.8-1.5-.8-1.6c0-.6.4-1,.9-1.1.5,0,1,.4,1.1.9,0,0,0,.2.2.4s.4.2.4.2c.6,0,1,.5.9,1.1,0,.5-.5.9-1,.9Z"/>' : '<path d="M24 36C36 36 41 27.9411 41 18H7C7 27.9411 12 36 24 36Z"/><path d="M17 35L14 44H34L31 35"/><path d="M29 18L27.8889 4L20.1111 4L19 18"/><path d="M15 25C15 25 15.0703 26.0703 16 27C16.9297 27.9297 18 28 18 28"/>';

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

module.exports = HotPotOne;
