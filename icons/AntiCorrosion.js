'use strict';

var React = require('react');

function AntiCorrosion(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M12,8c-2.6,0-11,9.2-11,11.4s1.8,2.5,11,2.6h0c.3,0,.6,0,.9,0,7.2,0,8.9-.7,9.6-1.5.4-.4.5-.9.5-1.2,0-2.2-8.2-11.4-11-11.4ZM11.3,15.5l-1.8,2.2c-.2.2-.5.4-.8.4s-.5,0-.6-.2c-.4-.4-.5-1-.1-1.4l1.8-2.2c.4-.4,1-.5,1.4-.1.4.4.5,1,.1,1.4Z"/>   <path d="M12.2,5.5c.7,0,1.2-.6,1.2-1.2s-.6-1.3-1.2-1.3-1.2.6-1.2,1.3.6,1.2,1.2,1.2Z"/>   <path d="M17,8c.6,0,1-.4,1-1s-.4-1-1-1-1,.4-1,1,.4,1,1,1Z"/>   <path d="M6,10.5c.6,0,1-.4,1-1s-.4-1-1-1-1,.4-1,1,.4,1,1,1Z"/>   <path d="M8.8,7.5c.4,0,.8-.3.8-.8s-.3-.8-.8-.8-.8.3-.8.8.3.8.8.8Z"/>' : '<path fill-rule="evenodd" clip-rule="evenodd" d="M24 41.996C37.3333 42.0989 44 41.0074 44 38.7215C44 35.2928 28.4142 18.0027 24 18.0027C19.5858 18.0027 4 35.6511 4 38.7215C4 40.7685 10.6667 41.86 24 41.996Z"/><path d="M21.0601 29.6614L17.4404 34.0003"/><path d="M24.5 11.0002C25.8807 11.0002 27 9.88096 27 8.50024C27 7.11953 25.8807 6.00024 24.5 6.00024C23.1193 6.00024 22 7.11953 22 8.50024C22 9.88096 23.1193 11.0002 24.5 11.0002Z"/><path d="M34 16.0002C35.1046 16.0002 36 15.1048 36 14.0002C36 12.8957 35.1046 12.0002 34 12.0002C32.8954 12.0002 32 12.8957 32 14.0002C32 15.1048 32.8954 16.0002 34 16.0002Z"/><path d="M12 21.0002C13.1046 21.0002 14 20.1048 14 19.0002C14 17.8957 13.1046 17.0002 12 17.0002C10.8954 17.0002 10 17.8957 10 19.0002C10 20.1048 10.8954 21.0002 12 21.0002Z"/><path d="M17.5 15.0002C18.3284 15.0002 19 14.3287 19 13.5002C19 12.6718 18.3284 12.0002 17.5 12.0002C16.6716 12.0002 16 12.6718 16 13.5002C16 14.3287 16.6716 15.0002 17.5 15.0002Z"/>';

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

module.exports = AntiCorrosion;
