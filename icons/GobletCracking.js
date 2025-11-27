'use strict';

var React = require('react');

function GobletCracking(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M16.5,22H6.5"/>   <path d="M11.5,14v8"/>   <path d="M16.3,1.4c-.2-.3-.5-.4-.8-.4H7.5c-.3,0-.6.2-.8.4,0,.1-2.2,3.1-2.2,6.6s3.1,7,7,7,7-3.1,7-7-2.1-6.5-2.2-6.6ZM13.4,5.8l-1,3c-.1.4-.5.7-.9.7s-.2,0-.3,0c-.5-.2-.8-.7-.6-1.3l.7-2-1-.2c-.3,0-.5-.2-.6-.5-.1-.2-.2-.5,0-.8l1-3c.2-.5.7-.8,1.3-.6.5.2.8.7.6,1.3l-.7,2,1,.2c.3,0,.5.2.6.5.1.2.2.5,0,.8Z"/>   <path d="M15.5,3H7.5c-.6,0-1-.4-1-1s.4-1,1-1h8c.6,0,1,.4,1,1s-.4,1-1,1Z"/>' : '<path d="M33 44H23H13"/><path d="M23 28V44"/><path d="M35 16C35 22.5 29.6274 28 23 28C16.3726 28 11 22.6274 11 16C11 9.5 15 4 15 4H31C31 4 35 9.5 35 16Z"/><path d="M23 4L21 10L25 11L23 17"/><path d="M15 4H31"/>';

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

module.exports = GobletCracking;
